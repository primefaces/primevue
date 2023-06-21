import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

let core = {};

let coreIconDependencies = {
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

let coreDependencies = {
    'primevue/utils': 'primevue.utils',
    'primevue/api': 'primevue.api',
    'primevue/config': 'primevue.config',
    'primevue/basedirective': 'primevue.basedirective',
    'primevue/ripple': 'primevue.ripple',
    'primevue/portal': 'primevue.portal',
    'primevue/basecomponent': 'primevue.basecomponent',
    ...coreIconDependencies,
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

let globalDependencies = {
    vue: 'Vue',
    ...coreDependencies
};

function addEntry(folder, inFile, outFile) {
    let useCorePlugin = Object.keys(coreDependencies).some((d) => d.replace('primevue/', '') === folder);

    entries.push({
        input: 'components/lib/' + folder + '/' + inFile,
        output: [
            {
                format: 'cjs',
                file: 'dist/' + folder + '/' + outFile + '.cjs.js'
            },
            {
                format: 'esm',
                file: 'dist/' + folder + '/' + outFile + '.esm.js'
            },
            {
                format: 'iife',
                name: 'primevue.' + folder.replaceAll('/', '.'),
                file: 'dist/' + folder + '/' + outFile + '.js',
                globals: globalDependencies
            }
        ],
        plugins: [vue(), postcss(), useCorePlugin && corePlugin()]
    });

    entries.push({
        input: 'components/lib/' + folder + '/' + inFile,
        output: [
            {
                format: 'cjs',
                file: 'dist/' + folder + '/' + outFile + '.cjs.min.js'
            },
            {
                format: 'esm',
                file: 'dist/' + folder + '/' + outFile + '.esm.min.js'
            },
            {
                format: 'iife',
                name: 'primevue.' + folder.replaceAll('/', '.'),
                file: 'dist/' + folder + '/' + outFile + '.min.js',
                globals: globalDependencies
            }
        ],
        plugins: [vue(), postcss(), terser(), useCorePlugin && corePlugin()]
    });
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
                    const code = Object.keys(coreDependencies).reduce((val, d) => {
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
addApi();
addConfig();
addDirectives();
addServices();
addSFC();
addIcon();
addCore();

export default entries;
