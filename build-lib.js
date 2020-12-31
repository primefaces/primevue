const fs = require('fs-extra');
const path = require('path');
const Service = require('@vue/cli-service/lib/Service');
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd());
const _file = require("@babel/cli/lib/babel/file");

function buildComponent(folder, file, name) {
    service.run('build', {
            _: ['build', 'src/components/' + folder + '/' + file, 'build'],
            modern: false,
            report: false,
            'report-json': false,
            'inline-vue': false,
            watch: false,
            open: false,
            copy: true,
            https: false,
            verbose: false,
            target: 'lib',
            clean: false,
            name: name,
            dest: 'dist/' + folder
        },
        [
            'build',
            'src/components/' + folder + '/' + file,
            'build',
            '--target',
            'lib',
            '--no-clean',
            '--name',
            name,
            '--dest',
            'dist/' + folder
        ]);
}

function transpileJS(folder, file) {
    var options = {
        babelOptions: {
            configFile: './.babelrc-lib'
        },
        cliOptions: {
            filename: undefined,
            filenames: ['src/components/' + folder + '/' + file],
            extensions: undefined,
            keepFileExtension: undefined,
            outFileExtension: undefined,
            watch: undefined,
            skipInitialBuild: undefined,
            outFile: 'dist/' + folder + '/' + file,
            outDir: undefined,
            relative: undefined,
            copyFiles: undefined,
            copyIgnored: undefined,
            includeDotfiles: undefined,
            verbose: undefined,
            quiet: undefined,
            deleteDirOnStart: undefined,
            sourceMapTarget: undefined
        }
    }

    _file.default(options).catch(err => {
        console.error(err);
        process.exitCode = 1;
    });
}

function blue(str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}

function green(str) {
    return '\x1b[1m\x1b[32m' + str + '\x1b[39m\x1b[22m';
}

fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
    fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
        fs.copySync(path.resolve(__dirname, './src/components/' + folder) + '/' + file, 'dist/' + folder + '/' + file);
    });
});

const excludedFolders = ['nuxt'];
const excludedFiles = ['index.js', 'index.d.ts', 'plugin.js', 'plugin-ripple.js'];

fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
    if (!excludedFolders.includes(folder)) {
        fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
            if (!excludedFiles.includes(file)) {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
                if (/\.js$/.test(file)) {
                    console.log('Transpiling ' + blue(file));
                    buildComponent(folder, file, name);
                    transpileJS(folder, file);
                }
                else if (/\.vue$/.test(file)) {
                    console.log('Building ' + green(name));
                    buildComponent(folder, file, name);
                }
            }
        });
    }

});

fs.copySync(path.resolve(__dirname, './package-build.json'), 'dist/package.json');
fs.copySync(path.resolve(__dirname, './README.md'), 'dist/README.md');
fs.copySync(path.resolve(__dirname, './LICENSE.md'), 'dist/LICENSE.md');