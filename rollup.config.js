import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

function addEntry(folder, inFile, outFile) {
    entries.push({
        input: 'src/components/' + folder + '/' + inFile,
        output: [
            {
                format: 'esm',
                file: 'dist/' + folder + '/' + outFile + '.esm.js'
            },
            {
                format: 'cjs',
                file: 'dist/' + folder + '/' + outFile + '.cjs.js'
            },
            {
                format: 'umd',
                name: 'primevue',
                file: 'dist/' + folder + '/' + outFile + '.umd.js'
            }
        ],
        plugins: [
            vue(),
            postcss()
        ]
    });
}

function addSFC() {
    fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
        fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
            let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
            if (/\.vue$/.test(file)) {
                addEntry(folder, file, name);
            }
        });
    });
}

function addDirectives() {
    addEntry('badgedirective', 'BadgeDirective.js', 'badgedirective');
    addEntry('ripple', 'Ripple.js', 'ripple');
    addEntry('tooltip', 'Tooltip.js', 'tooltip');
}

function addConfig() {
    addEntry('config', 'PrimeVue.js', 'config');
}

function addUtils() {
    addEntry('utils', 'Utils.js', 'utils');
}

function addServices() {
    addEntry('confirmationservice', 'ConfirmationService.js', 'confirmationservice');
    addEntry('confirmationeventbus', 'ConfirmationEventBus.js', 'confirmationeventbus');
    addEntry('toastservice', 'ToastService.js', 'toastservice');
    addEntry('toasteventbus', 'ToastEventBus.js', 'toasteventbus');
}

addSFC();
addDirectives();
addConfig();
addUtils();
addServices();

export default entries;