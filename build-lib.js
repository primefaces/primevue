const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const vueCliServicePath = path.resolve(__dirname, 'node_modules/@vue/cli-service/bin/vue-cli-service');
const babelPath = path.resolve(__dirname, 'node_modules/@babel/cli/bin/babel');

fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
    fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
        let filename = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
        if (/\.vue$/.test(file)) {
            console.log('Building ' + green(filename));

            execSync(
                `node ${vueCliServicePath} build src/components/${folder}/${file} --target lib --name ${filename} --dest components/${folder} --no-clean `
            )
        }
        else if (/\.js$/.test(file)) {
            console.log('Building ' + blue(filename));

            execSync(
                `node ${vueCliServicePath} build src/components/${folder}/${file} --target lib --name ${filename} --dest components/${folder} --no-clean `
            )
            
            execSync(
                `${babelPath} --no-babelrc src/components/${folder}/${file} --out-file components/${folder}/${file} --presets=es2015,stage-2 `
            )
        }
    });
});

function blue (str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}

function green (str) {
    return '\x1b[1m\x1b[32m' + str + '\x1b[39m\x1b[22m';
}