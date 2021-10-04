import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

let coreDependencies = {
    'primevue/config': 'primevue.config',
    'primevue/api': 'primevue.api',
    'primevue/utils': 'primevue.utils',
    'primevue/ripple': 'primevue.ripple',
    'primevue/confirmationeventbus': 'primevue.confirmationeventbus',
    'primevue/toasteventbus': 'primevue.toasteventbus',
    'primevue/overlayeventbus': 'primevue.overlayeventbus',
    'primevue/terminalservice': 'primevue.terminalservice',
    'primevue/useconfirm': 'primevue.useconfirm',
    'primevue/usetoast': 'primevue.usetoast',
    'primevue/button': 'primevue.button',
    'primevue/inputtext': 'primevue.inputtext',
    'primevue/virtualscroller': 'primevue.virtualscroller',
    'primevue/dialog': 'primevue.dialog',
    'primevue/paginator': 'primevue.paginator',
    'primevue/progressbar': 'primevue.progressbar',
    'primevue/message': 'primevue.message',
    'primevue/dropdown': 'primevue.dropdown',
    'primevue/inputnumber': 'primevue.inputnumber',
    'primevue/menu': 'primevue.menu',
    'primevue/tieredmenu': 'primevue.tieredmenu',
    'primevue/tree': 'primevue.tree',
}

let globalDependencies = {
    'vue': 'Vue',
    '@fullcalendar/core': 'FullCalendar',
    ...coreDependencies
}

function addEntry(folder, inFile, outFile) {
    let useCorePlugin = Object.keys(coreDependencies).some(d => d.replace('primevue/', '') === outFile);

    entries.push({
        input: 'src/components/' + folder + '/' + inFile,
        output: [
            {
                format: 'cjs',
                file: 'dist/' + folder + '/' + outFile + '.cjs.js',
            },
            {
                format: 'esm',
                file: 'dist/' + folder + '/' + outFile + '.esm.js'
            },
            {
                format: 'iife',
                name: 'primevue.' + folder,
                file: 'dist/' + folder + '/' + outFile + '.js',
                globals: globalDependencies
            }
        ],
        plugins: [
            vue(),
            postcss(),
            useCorePlugin && corePlugin()
        ]
    });

    entries.push({
        input: 'src/components/' + folder + '/' + inFile,
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
                name: 'primevue.' + folder,
                file: 'dist/' + folder + '/' + outFile + '.min.js',
                globals: globalDependencies
            }
        ],
        plugins: [
            vue(),
            postcss(),
            terser(),
            useCorePlugin && corePlugin()
        ]
    });
}

function corePlugin() {
    return {
        name: 'corePlugin',
        generateBundle(outputOptions, bundle) {
            if (outputOptions.format === 'iife') {
                Object.keys(bundle).forEach(id => {
                    const chunk = bundle[id];
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js': '.js'}`;

                    fs.outputFile(path.resolve(__dirname, filePath), chunk.code + '\n',  { 'flag': 'a' },  function(err) {
                        if (err) {
                            return console.error(err);
                        }
                    });
                });
            }
        }
    };
}

function removeCore() {
    fs.removeSync(path.resolve(__dirname, './dist/core'));
}

function addSFC() {
    fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
        fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
            let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
            if (/\.vue$/.test(file) && (name === folder)) {
                addEntry(folder, file, name);
            }
        });
    });
}

function addDirectives() {
    addEntry('badgedirective', 'BadgeDirective.js', 'badgedirective');
    addEntry('ripple', 'Ripple.js', 'ripple');
    addEntry('tooltip', 'Tooltip.js', 'tooltip');
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
}

removeCore();
addUtils();
addApi();
addConfig();
addDirectives();
addServices();
addSFC();

export default entries;
