import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

import fs from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// @todo - Remove
const __dirname = dirname(fileURLToPath(import.meta.url));

// globals
const GLOBALS = {};

// externals
const GLOBAL_EXTERNALS = [];
const EXTERNALS = [];

// alias
const ALIAS_ENTRIES = [
    {
        find: /^@primevue\/themes\/(.*)$/,
        replacement: path.resolve(__dirname, './src/presets/$1/index.js')
    }
];

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

            ENTRY.update.packageJson({ input, output, options: { main: `${output}.cjs` } });

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

            ENTRY.update.packageJson({ input, output, options: { main: `${output}.mjs`, module: `${output}.mjs` } });

            return ENTRY.format;
        },
        umd({ name, input, output, minify }) {
            ENTRY.entries.push({
                onwarn: ENTRY.onwarn,
                input,
                plugins: [alias(ALIAS_PLUGIN_OPTIONS), resolve(), ...PLUGINS, minify && terser(TERSER_PLUGIN_OPTIONS)],
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
    },
    update: {
        packageJson({ input, output, options }) {
            try {
                const inputDir = path.resolve(__dirname, path.dirname(input));
                const outputDir = path.resolve(__dirname, path.dirname(output));
                const packageJson = path.resolve(outputDir, 'package.json');

                !fs.existsSync(packageJson) && fs.copySync(path.resolve(inputDir, './package.json'), packageJson);

                const pkg = JSON.parse(fs.readFileSync(packageJson, { encoding: 'utf8', flag: 'r' }));

                !pkg?.main?.includes('.cjs') && (pkg.main = path.basename(options?.main) ? `./${path.basename(options.main)}` : pkg.main);
                pkg.module = path.basename(options?.module) ? `./${path.basename(options.module)}` : packageJson.module;
                //pkg.types && (pkg.types = './index.d.ts');

                fs.writeFileSync(packageJson, JSON.stringify(pkg, null, 4));
            } catch {}
        }
    }
};

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
        path.resolve(__dirname, process.env.INPUT_DIR + 'presets'),
        (file) => file === 'index.js',
        (file, filePath, folderPath) => {
            const searchFolder = '/' + process.env.INPUT_DIR;
            const folderName = folderPath.substring(folderPath.indexOf(searchFolder) + searchFolder.length);
            const input = process.env.INPUT_DIR + folderName + '/' + file;
            const output = process.env.OUTPUT_DIR + folderName.replace('presets/', '') + '/index';

            ENTRY.format.es({ input, output });
        }
    );
}

function addCore() {
    ENTRY.format.es({ input: process.env.INPUT_DIR + 'index.js', output: process.env.OUTPUT_DIR + 'index' });
}

function addLibrary() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + 'presets'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            ENTRY.format.umd({ name: `PrimeVue.Themes.${folderName[0].toUpperCase() + folderName.slice(1)}`, input: process.env.INPUT_DIR + `presets/${folderName}/index.js`, output: process.env.OUTPUT_DIR + `umd/${folderName}`, minify: true });
        });
}

addCore();
addThemes();
addLibrary();

export default ENTRY.entries;
