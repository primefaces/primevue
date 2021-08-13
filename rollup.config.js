import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

let globalDependencies = {
    'vue': 'Vue',
    'primevue/api': 'primevue.api',
    'primevue/ripple': 'primevue.ripple',
    'primevue/utils': 'primevue.utils',
    'primevue/button': 'primevue.button',
    'primevue/inputtext': 'primevue.inputtext',
    'primevue/virtualscroller': 'primevue.virtualscroller',
    'primevue/dialog': 'primevue.dialog',
    'primevue/paginator': 'primevue.paginator',
    'primevue/confirmationeventbus': 'primevue.confirmationeventbus',
    'primevue/toasteventbus': 'primevue.toasteventbus',
    'primevue/overlayeventbus': 'primevue.overlayeventbus',
    'primevue/useconfirm': 'primevue.useconfirm',
    'primevue/usetoast': 'primevue.usetoast',
    'primevue/progressbar': 'primevue.progressbar',
    'primevue/message': 'primevue.message',
    'primevue/dropdown': 'primevue.dropdown',
    'primevue/menu': 'primevue.menu',
    'primevue/tieredmenu': 'primevue.tieredmenu',
    'primevue/tree': 'primevue.tree',
    '@fullcalendar/core': 'FullCalendar'
}

function addEntry(folder, inFile, outFile) {
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
            postcss()
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
            terser()
        ]
    });
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

addSFC();
addDirectives();
addConfig();
addUtils();
addApi();
addServices();

export default entries;
