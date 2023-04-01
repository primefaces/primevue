import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

let core = {};

let coreIconDependencies = {
    'primevue/baseicon': 'primevue.baseicon',
    'primevue/icon/angledoubledown': 'primevue.icon.angledoubledown',
    'primevue/icon/angledoubleleft': 'primevue.icon.angledoubleleft',
    'primevue/icon/angledoubleright': 'primevue.icon.angledoubleright',
    'primevue/icon/angledoubleup': 'primevue.icon.angledoubleup',
    'primevue/icon/angledown': 'primevue.icon.angledown',
    'primevue/icon/angleleft': 'primevue.icon.angleleft',
    'primevue/icon/angleright': 'primevue.icon.angleright',
    'primevue/icon/angleup': 'primevue.icon.angleup',
    'primevue/icon/arrowdown': 'primevue.icon.arrowdown',
    'primevue/icon/arrowup': 'primevue.icon.arrowup',
    'primevue/icon/ban': 'primevue.icon.ban',
    'primevue/icon/bars': 'primevue.icon.bars',
    'primevue/icon/calendar': 'primevue.icon.calendar',
    'primevue/icon/check': 'primevue.icon.check',
    'primevue/icon/chevrondown': 'primevue.icon.chevrondown',
    'primevue/icon/chevronleft': 'primevue.icon.chevronleft',
    'primevue/icon/chevronright': 'primevue.icon.chevronright',
    'primevue/icon/chevronup': 'primevue.icon.chevronup',
    'primevue/icon/exclamationtriangle': 'primevue.icon.exclamationtriangle',
    'primevue/icon/eye': 'primevue.icon.eye',
    'primevue/icon/eyeslash': 'primevue.icon.eyeslash',
    'primevue/icon/filter': 'primevue.icon.filter',
    'primevue/icon/filterslash': 'primevue.icon.filterslash',
    'primevue/icon/infocircle': 'primevue.icon.infocircle',
    'primevue/icon/minus': 'primevue.icon.minus',
    'primevue/icon/pencil': 'primevue.icon.pencil',
    'primevue/icon/plus': 'primevue.icon.plus',
    'primevue/icon/refresh': 'primevue.icon.refresh',
    'primevue/icon/search': 'primevue.icon.search',
    'primevue/icon/searchminus': 'primevue.icon.searchminus',
    'primevue/icon/searchplus': 'primevue.icon.searchplus',
    'primevue/icon/sortalt': 'primevue.icon.sortalt',
    'primevue/icon/sortamountdown': 'primevue.icon.sortamountdown',
    'primevue/icon/sortamountupalt': 'primevue.icon.sortamountupalt',
    'primevue/icon/spinner': 'primevue.icon.spinner',
    'primevue/icon/star': 'primevue.icon.star',
    'primevue/icon/starfill': 'primevue.icon.starfill',
    'primevue/icon/thlarge': 'primevue.icon.thlarge',
    'primevue/icon/times': 'primevue.icon.times',
    'primevue/icon/timescircle': 'primevue.icon.timescircle',
    'primevue/icon/trash': 'primevue.icon.trash',
    'primevue/icon/undo': 'primevue.icon.undo',
    'primevue/icon/upload': 'primevue.icon.upload',
    'primevue/icon/windowmaximize': 'primevue.icon.windowmaximize',
    'primevue/icon/windowminimize': 'primevue.icon.windowminimize'
};

let coreDependencies = {
    'primevue/utils': 'primevue.utils',
    'primevue/api': 'primevue.api',
    'primevue/config': 'primevue.config',
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
    fs.readdirSync(path.resolve(__dirname, './components/lib/icon'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './components/lib/icon/' + folderName)).forEach((file) => {
                if (/\.vue$/.test(file)) {
                    addEntry('icon/' + folderName, 'index.vue', 'index');
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
