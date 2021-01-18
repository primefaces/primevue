import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
    fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
        if (file !== 'index.js' && file !== 'index.d.ts') {
            let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
            if (/\.vue$/.test(file)) {
                entries.push({
                    input: 'src/components/' + folder + '/' + file,
                    external: [/\.\./],
                    output: [
                        {
                            format: 'esm',
                            file: 'dist/' + folder + '/' + name + '.esm.js'
                        },
                        {
                            format: 'umd',
                            name: 'primevue',
                            file: 'dist/' + folder + '/' + name + '.umd.js'
                        }
                    ],
                    plugins: [
                        vue(),
                        postcss()
                    ]
                });
            }
        }
    });
});

export default entries;