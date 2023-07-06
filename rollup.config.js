import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

let core = {};

const CORE_ICON_DEPENDENCIES = {
    'primevue/baseicon': 'primevue.baseicon',
    'primevue/icons/angledoubledown': 'primevue.icons.angledoubledown',
    'primevue/icons/angledoubleleft': 'primevue.icons.angledoubleleft',
    'primevue/icons/angledoubleright': 'primevue.icons.angledoubleright',
    'primevue/icons/angledoubleup': 'primevue.icons.angledoubleup',
    'primevue/icons/angledown': 'primevue.icons.angledown',
    'primevue/icons/angleleft': 'primevue.icons.angleleft',
    'primevue/icons/angleright': 'primevue.icons.angleright',
    'primevue/icons/angleup': 'primevue.icons.angleup',
    'primevue/icons/arrowdown': 'primevue.icons.arrowdown',
    'primevue/icons/arrowup': 'primevue.icons.arrowup',
    'primevue/icons/ban': 'primevue.icons.ban',
    'primevue/icons/bars': 'primevue.icons.bars',
    'primevue/icons/calendar': 'primevue.icons.calendar',
    'primevue/icons/check': 'primevue.icons.check',
    'primevue/icons/chevrondown': 'primevue.icons.chevrondown',
    'primevue/icons/chevronleft': 'primevue.icons.chevronleft',
    'primevue/icons/chevronright': 'primevue.icons.chevronright',
    'primevue/icons/chevronup': 'primevue.icons.chevronup',
    'primevue/icons/exclamationtriangle': 'primevue.icons.exclamationtriangle',
    'primevue/icons/eye': 'primevue.icons.eye',
    'primevue/icons/eyeslash': 'primevue.icons.eyeslash',
    'primevue/icons/filter': 'primevue.icons.filter',
    'primevue/icons/filterslash': 'primevue.icons.filterslash',
    'primevue/icons/infocircle': 'primevue.icons.infocircle',
    'primevue/icons/minus': 'primevue.icons.minus',
    'primevue/icons/pencil': 'primevue.icons.pencil',
    'primevue/icons/plus': 'primevue.icons.plus',
    'primevue/icons/refresh': 'primevue.icons.refresh',
    'primevue/icons/search': 'primevue.icons.search',
    'primevue/icons/searchminus': 'primevue.icons.searchminus',
    'primevue/icons/searchplus': 'primevue.icons.searchplus',
    'primevue/icons/sortalt': 'primevue.icons.sortalt',
    'primevue/icons/sortamountdown': 'primevue.icons.sortamountdown',
    'primevue/icons/sortamountupalt': 'primevue.icons.sortamountupalt',
    'primevue/icons/spinner': 'primevue.icons.spinner',
    'primevue/icons/star': 'primevue.icons.star',
    'primevue/icons/starfill': 'primevue.icons.starfill',
    'primevue/icons/thlarge': 'primevue.icons.thlarge',
    'primevue/icons/times': 'primevue.icons.times',
    'primevue/icons/timescircle': 'primevue.icons.timescircle',
    'primevue/icons/trash': 'primevue.icons.trash',
    'primevue/icons/undo': 'primevue.icons.undo',
    'primevue/icons/upload': 'primevue.icons.upload',
    'primevue/icons/windowmaximize': 'primevue.icons.windowmaximize',
    'primevue/icons/windowminimize': 'primevue.icons.windowminimize'
};

const CORE_DEPENDENCIES = {
    'primevue/utils': 'primevue.utils',
    'primevue/api': 'primevue.api',
    'primevue/config': 'primevue.config',
    'primevue/base': 'primevue.base',
    'primevue/basedirective': 'primevue.basedirective',
    'primevue/ripple': 'primevue.ripple',
    'primevue/portal': 'primevue.portal',
    'primevue/basecomponent': 'primevue.basecomponent',
    ...CORE_ICON_DEPENDENCIES,
    'primevue/tooltip': 'primevue.tooltip',
    'primevue/focustrap': 'primevue.focustrap',
    'primevue/virtualscroller': 'primevue.virtualscroller',
    'primevue/confirmationeventbus': 'primevue.confirmationeventbus',
    'primevue/toasteventbus': 'primevue.toasteventbus',
    'primevue/overlayeventbus': 'primevue.overlayeventbus',
    'primevue/dynamicdialogeventbus': 'primevue.dynamicdialogeventbus',
    'primevue/terminalservice': 'primevue.terminalservice',
    'primevue/useconfirm': 'primevue.useconfirm',
    'primevue/usetoast': 'primevue.usetoast',
    'primevue/usedialog': 'primevue.usedialog',
    'primevue/usestyle': 'primevue.usestyle',
    'primevue/button': 'primevue.button',
    'primevue/inputtext': 'primevue.inputtext',
    'primevue/inputnumber': 'primevue.inputnumber',
    'primevue/message': 'primevue.message',
    'primevue/progressbar': 'primevue.progressbar',
    'primevue/dropdown': 'primevue.dropdown',
    'primevue/dialog': 'primevue.dialog',
    'primevue/paginator': 'primevue.paginator',
    'primevue/tree': 'primevue.tree',
    'primevue/menu': 'primevue.menu',
    'primevue/tieredmenu': 'primevue.tieredmenu',
    'primevue/badge': 'primevue.badge'
};

// dependencies
const GLOBAL_DEPENDENCIES = {
    vue: 'Vue'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES,
    ...CORE_DEPENDENCIES
};

// externals
const EXTERNAL = ['vue', 'chart.js/auto', 'quill'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...Object.keys(CORE_DEPENDENCIES)];

// plugins
const BABEL_PLUGIN_OPTIONS = {
    extensions: ['.js', '.vue'],
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env'],
    plugins: [],
    skipPreflightCheck: true,
    babelHelpers: 'runtime',
    babelrc: false
};

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: false
    }
};

const PLUGINS = [vue(), postcss(POSTCSS_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS)];

function addEntry(folder, inFile, outFile) {
    const exports = inFile === 'PrimeVue.js' ? 'named' : 'auto';
    const useCorePlugin = Object.keys(GLOBAL_COMPONENT_DEPENDENCIES).some((d) => d.replace('primevue/', '') === folder);
    const plugins = PLUGINS;
    const external = EXTERNAL_COMPONENT;
    const inlineDynamicImports = true;

    const input = `components/lib/${folder}/${inFile}`;
    const output = `dist/${folder}/${outFile}`;

    const getEntry = (isMinify) => {
        return {
            input,
            plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS), useCorePlugin && corePlugin()],
            external,
            inlineDynamicImports
        };
    };

    const get_CJS_ESM = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'cjs',
                    file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
                    exports
                },
                {
                    format: 'esm',
                    file: `${output}.esm${isMinify ? '.min' : ''}.js`,
                    exports
                }
            ]
        };
    };

    const get_IIFE = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'iife',
                    name: 'primevue.' + folder.replaceAll('/', '.'),
                    file: `${output}${isMinify ? '.min' : ''}.js`,
                    globals: GLOBAL_COMPONENT_DEPENDENCIES,
                    exports
                }
            ]
        };
    };

    entries.push(get_CJS_ESM());
    entries.push(get_IIFE());

    // Minify
    entries.push(get_CJS_ESM(true));
    entries.push(get_IIFE(true));
}

function corePlugin() {
    return {
        name: 'corePlugin',
        generateBundle(outputOptions, bundle) {
            const { name, format } = outputOptions;

            if (format === 'iife') {
                Object.keys(bundle).forEach((id) => {
                    const chunk = bundle[id];
                    const folderName = name.replace('primevue.', '').replaceAll('.', '/');
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js' : '.js'}`;

                    core[filePath] ? (core[filePath][folderName] = chunk.code) : (core[filePath] = { [`${folderName}`]: chunk.code });
                });
            }
        }
    };
}

function addCore() {
    const lastEntry = entries[entries.length - 1];

    lastEntry.plugins = [
        ...lastEntry.plugins,
        {
            name: 'coreMergePlugin',
            generateBundle() {
                Object.entries(core).forEach(([filePath, value]) => {
                    const code = Object.keys(CORE_DEPENDENCIES).reduce((val, d) => {
                        const name = d.replace('primevue/', '');

                        val += value[name] + '\n';

                        return val;
                    }, '');

                    fs.outputFile(path.resolve(__dirname, filePath), code, {}, function (err) {
                        if (err) {
                            // eslint-disable-next-line no-console
                            return console.error(err);
                        }
                    });
                });
            }
        }
    ];
}

function addSFC() {
    fs.readdirSync(path.resolve(__dirname, './components/lib'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './components/lib/' + folderName)).forEach((file) => {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();

                if (/\.vue$/.test(file) && name === folderName) {
                    addEntry(folderName, file, name);
                }
            });
        });
}

function addIcon() {
    fs.readdirSync(path.resolve(__dirname, './components/lib/icons'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './components/lib/icons/' + folderName)).forEach((file) => {
                if (/\.vue$/.test(file)) {
                    addEntry('icons/' + folderName, 'index.vue', 'index');
                }
            });
        });
}

function addDirectives() {
    addEntry('basedirective', 'BaseDirective.js', 'basedirective');
    addEntry('badgedirective', 'BadgeDirective.js', 'badgedirective');
    addEntry('ripple', 'Ripple.js', 'ripple');
    addEntry('tooltip', 'Tooltip.js', 'tooltip');
    addEntry('focustrap', 'FocusTrap.js', 'focustrap');
    addEntry('styleclass', 'StyleClass.js', 'styleclass');
}

function addConfig() {
    addEntry('config', 'PrimeVue.js', 'config');
}

function addUtils() {
    addEntry('utils', 'Utils.js', 'utils');
}

function addApi() {
    addEntry('api', 'Api.js', 'api');
}

function addBase() {
    addEntry('base', 'Base.js', 'base');
}

function addServices() {
    addEntry('confirmationservice', 'ConfirmationService.js', 'confirmationservice');
    addEntry('confirmationeventbus', 'ConfirmationEventBus.js', 'confirmationeventbus');
    addEntry('useconfirm', 'UseConfirm.js', 'useconfirm');
    addEntry('toastservice', 'ToastService.js', 'toastservice');
    addEntry('toasteventbus', 'ToastEventBus.js', 'toasteventbus');
    addEntry('overlayeventbus', 'OverlayEventBus.js', 'overlayeventbus');
    addEntry('usetoast', 'UseToast.js', 'usetoast');
    addEntry('usestyle', 'UseStyle.js', 'usestyle');
    addEntry('terminalservice', 'TerminalService.js', 'terminalservice');
    addEntry('usedialog', 'UseDialog.js', 'usedialog');
    addEntry('dialogservice', 'DialogService.js', 'dialogservice');
    addEntry('dynamicdialogeventbus', 'DynamicDialogEventBus.js', 'dynamicdialogeventbus');
}

addUtils();
addBase();
addApi();
addConfig();
addDirectives();
addServices();
addSFC();
addIcon();
addCore();

export default entries;
