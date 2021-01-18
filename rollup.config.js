import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

console.log(process.env.NODE_ENV);

const fs = require('fs-extra');
const path = require('path');

let entries = [];

function addEntry(folder, inFile, outFile) {
    entries.push({
        input: 'src/components/' + folder + '/' + inFile,
        output: [
            {
                format: 'umd',
                name: 'primevue.' + folder,
                file: 'dist/' + folder + '/' + outFile + '.umd.js'
            },
            {
                format: 'esm',
                file: 'dist/' + folder + '/' + outFile + '.esm.js'
            },
            {
                format: 'iife',
                name: 'PrimeVue.' + folder,
                file: 'dist/' + folder + '/' + outFile + '.js'
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
                format: 'umd',
                name: 'primevue.' + folder,
                file: 'dist/' + folder + '/' + outFile + '.umd.min.js'
            },
            {
                format: 'esm',
                file: 'dist/' + folder + '/' + outFile + '.esm.min.js'
            },
            {
                format: 'iife',
                name: 'primevue.' + folder,
                file: 'dist/' + folder + '/' + outFile + '.min.js'
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
    addEntry('useconfirm', 'useconfirm.js', 'useconfirm');
    addEntry('toastservice', 'ToastService.js', 'toastservice');
    addEntry('toasteventbus', 'ToastEventBus.js', 'toasteventbus');
    addEntry('usetoast', 'usetoast.js', 'usetoast');
}

addSFC();
addDirectives();
addConfig();
addUtils();
addServices();

export default entries;