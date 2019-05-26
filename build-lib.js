const fs = require('fs-extra');
const path = require('path');
const {execSync} = require('child_process');
const vueCliServicePath = path.resolve(__dirname, 'node_modules/@vue/cli-service/bin/vue-cli-service');

fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
    fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
        if (/\.vue$/.test(file) || /\.js$/.test(file)) {
            let filename = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
            console.log('Building ' + filename);

            execSync(
                `node ${vueCliServicePath} build src/components/${folder}/${file} --target lib --name ${filename} --dest components/${folder} --no-clean `
            )
        }
    });
});