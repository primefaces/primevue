import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

import fs from 'fs-extra';
import path from 'path';

import viteConfig, { THEME_PRESETS } from './nuxt-vite.config.js';
import pkg from './package.json';

// globals
const GLOBALS = {
    vue: 'Vue'
};

// externals
const GLOBAL_EXTERNALS = ['vue', 'chart.js/auto', 'quill'];
const INLINE_EXTERNALS = Object.keys(viteConfig.resolve.alias);
const EXTERNALS = [...GLOBAL_EXTERNALS, ...INLINE_EXTERNALS];

// alias
const ALIAS_ENTRIES = Object.entries(viteConfig.resolve.alias).map(([key, value]) => ({ find: key, replacement: value }));

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

const ALIAS_PLUGIN_OPTIONS = {
    entries: ALIAS_ENTRIES
};

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: true
    },
    mangle: {
        reserved: ['theme', 'css']
    }
};

const PLUGINS = [vue(), postcss(POSTCSS_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS)];

const ENTRY = {
    entries: [],
    onwarn(warning) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') {
            //console.error(`(!) ${warning.message}`);
            return;
        }
    },
    format: {
        cjs_es(options) {
            return ENTRY.format.cjs(options).es(options);
        },
        cjs({ input, output, minify }) {
            ENTRY.entries.push({
                onwarn: ENTRY.onwarn,
                input,
                plugins: [...PLUGINS, minify && terser(TERSER_PLUGIN_OPTIONS)],
                external: EXTERNALS,
                inlineDynamicImports: true,
                output: [
                    {
                        format: 'cjs',
                        file: `${output}${minify ? '.min' : ''}.cjs`,
                        sourcemap: true,
                        exports: 'auto'
                    }
                ]
            });

            return ENTRY.format;
        },
        es({ input, output, minify }) {
            ENTRY.entries.push({
                onwarn: ENTRY.onwarn,
                input,
                plugins: [...PLUGINS, minify && terser(TERSER_PLUGIN_OPTIONS)],
                external: EXTERNALS,
                inlineDynamicImports: true,
                output: [
                    {
                        format: 'es',
                        file: `${output}${minify ? '.min' : ''}.mjs`,
                        sourcemap: true,
                        exports: 'auto'
                    }
                ]
            });

            return ENTRY.format;
        },
        umd({ name, input, output, minify }) {
            ENTRY.entries.push({
                onwarn: ENTRY.onwarn,
                input,
                plugins: [alias(ALIAS_PLUGIN_OPTIONS), ...PLUGINS, minify && terser(TERSER_PLUGIN_OPTIONS)],
                external: GLOBAL_EXTERNALS,
                inlineDynamicImports: true,
                output: [
                    {
                        format: 'umd',
                        name: name ?? 'PrimeVue',
                        file: `${output}${minify ? '.min' : ''}.js`,
                        globals: GLOBALS,
                        exports: 'auto'
                    }
                ]
            });

            return ENTRY.format;
        }
    }
};

function addFile() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName)).forEach((file) => {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();

                if (name === folderName) {
                    const input = process.env.INPUT_DIR + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + folderName + '/' + name;

                    ENTRY.format.es({ input, output });
                }
            });
        });
}

function addIcon() {
    const iconDir = path.resolve(__dirname, process.env.INPUT_DIR + 'icons');

    fs.readdirSync(path.resolve(__dirname, iconDir), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, iconDir + '/' + folderName)).forEach((file) => {
                if (/\.vue$/.test(file)) {
                    const name = file.split(/(.vue)$/)[0].toLowerCase();
                    const input = process.env.INPUT_DIR + 'icons/' + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + 'icons/' + folderName + '/' + name;

                    ENTRY.format.es({ input, output });
                }
            });
        });
}

function addStyle() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            try {
                fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName + '/style')).forEach((file) => {
                    if (/\.js$/.test(file)) {
                        const name = file.split(/(.js)$/)[0].toLowerCase();
                        const input = process.env.INPUT_DIR + folderName + '/style/' + file;
                        const output = process.env.OUTPUT_DIR + folderName + '/style/' + name;

                        ENTRY.format.es({ input, output });
                    }
                });
            } catch {}
        });
}

function traverseDir(dir, condition, callback) {
    try {
        const files = fs.readdirSync(dir);

        files.forEach((file) => {
            const filePath = path.join(dir, file);
            const fileStat = fs.statSync(filePath);

            if (fileStat.isDirectory()) {
                traverseDir(filePath, condition, callback);
            } else if (condition?.(file) && fileStat.isFile()) {
                callback?.(file, filePath, dir);
            }
        });
    } catch {}
}

function addThemes() {
    traverseDir(
        path.resolve(__dirname, process.env.INPUT_DIR + 'themes'),
        (file) => file === 'index.js',
        (file, filePath, folderPath) => {
            const searchFolder = '/' + process.env.INPUT_DIR;
            const folderName = folderPath.substring(folderPath.indexOf(searchFolder) + searchFolder.length);
            const input = process.env.INPUT_DIR + folderName + '/' + file;
            const output = process.env.OUTPUT_DIR + folderName + '/' + 'index';

            ENTRY.format.es({ input, output });
        }
    );
}

function addCore() {
    ENTRY.format.es({ input: process.env.INPUT_DIR + 'config/PrimeVue.js', output: process.env.OUTPUT_DIR + 'config/config' });
    ENTRY.format.es({ input: process.env.INPUT_DIR + 'service/PrimeVueService.js', output: process.env.OUTPUT_DIR + 'service/primevueservice' });
}

function addPassThrough() {
    ENTRY.format.es({ input: process.env.INPUT_DIR + 'passthrough/index.js', output: process.env.OUTPUT_DIR + 'passthrough/index' });
}

function addLibrary() {
    THEME_PRESETS?.forEach((preset) => {
        ENTRY.format.umd({ name: `PrimeVue.Themes.${preset[0].toUpperCase() + preset.slice(1)}`, input: process.env.INPUT_DIR + `themes/${preset}/index.js`, output: process.env.OUTPUT_DIR + `umd/themes/${preset}`, minify: true });
    });

    ENTRY.format.umd({ name: 'PrimeVue', input: process.env.INPUT_DIR + 'primevue.js', output: process.env.OUTPUT_DIR + 'umd/primevue', minify: true });
}

function addPackageJson() {
    const outputDir = path.resolve(__dirname, process.env.OUTPUT_DIR);
    const packageJson = `{
    "name": "primevue",
    "version": "${pkg.version}",
    "private": false,
    "author": "PrimeTek Informatics",
    "description": "PrimeVue is an open source UI library for Vue featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.",
    "homepage": "https://primevue.org/",
    "repository": {
        "type": "git",
        "url": "https://github.com/primefaces/primevue.git"
    },
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/primefaces/primevue/issues"
    },
    "keywords": [
        "primevue",
        "vue",
        "vue.js",
        "vue2",
        "vue3",
        "ui library",
        "component library",
        "material",
        "bootstrap",
        "fluent",
        "tailwind",
        "unstyled",
        "passthrough"
    ],
    "unpkg": "umd/primevue.min.js",
    "jsdelivr": "umd/primevue.min.js",
    "web-types": "./web-types.json",
    "vetur": {
        "tags": "./vetur-tags.json",
        "attributes": "./vetur-attributes.json"
    },
    "sideEffects": [
        "*.vue"
    ],
    "peerDependencies": {
        "vue": "^3.0.0"
    },
    "engines": {
        "node": ">=12.11.0"
    }
}`;

    !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
    fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson);
}

addCore();
addStyle();
addThemes();
addIcon();
addFile();
addPassThrough();
addLibrary();
addPackageJson();

export default ENTRY.entries;
