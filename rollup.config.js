import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

let core = {};

let coreDependencies = {
    'primevue/utils': 'primevue.utils',
    'primevue/api': 'primevue.api',
    'primevue/config': 'primevue.config',
    'primevue/ripple': 'primevue.ripple',
    'primevue/virtualscroller': 'primevue.virtualscroller',
    'primevue/confirmationeventbus': 'primevue.confirmationeventbus',
    'primevue/toasteventbus': 'primevue.toasteventbus',
    'primevue/overlayeventbus': 'primevue.overlayeventbus',
    'primevue/terminalservice': 'primevue.terminalservice',
    'primevue/useconfirm': 'primevue.useconfirm',
    'primevue/usetoast': 'primevue.usetoast',
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
    'primevue/tieredmenu': 'primevue.tieredmenu'
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
                    const name = id.replace('.min.js', '').replace('.js', '');
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js': '.js'}`;

                    core[filePath] ? (core[filePath][name] = chunk.code) : (core[filePath] = { [`${name}`]: chunk.code });
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

                    fs.outputFile(path.resolve(__dirname, filePath), code, {}, function(err) {
                        if (err) {
                            return console.error(err);
                        }
                    });
                });
            }
        }
    ]
}

function addSFC() {
    fs.readdirSync(path.resolve(__dirname, './src/components/'), { withFileTypes: true })
        .filter(dir => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './src/components/' + folderName)).forEach(file => {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
                if (/\.vue$/.test(file) && (name === folderName)) {
                    addEntry(folderName, file, name);
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

addUtils();
addApi();
addConfig();
addDirectives();
addServices();
addSFC();
addCore();

export default entries;
