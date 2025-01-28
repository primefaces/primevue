import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

// update package.json > "exports" for local
let exports = {};
let modules = {
    ignoredFolders: ['useconfirm', 'usedialog', 'usetoast', 'usestyle', 'editor', 'chart', 'utils'],
    umd: [
        `/***************** PrimeVue (Auto-Generated) *****************/

// API
export * from '@primevue/core';

// BaseIcon
export { default as BaseIcon } from '@primevue/icons/baseicon';
export { default as BaseIconStyle } from '@primevue/icons/baseicon/style';

// Themes
export * from '@primeuix/styled';

// Utils
export * from '../utils/Utils.js';

// UseConfirm
export * from '../useconfirm/UseConfirm.js';

// UseDialog
export * from '../usedialog/UseDialog.js';

// UseToast
export * from '../usetoast/UseToast.js';

// UseStyle
export * from '../usestyle/UseStyle.js';

// Editor
export * from '../editor/Editor.vue';
export { default as Editor } from '../editor/Editor.vue';
export * from '../editor/style/EditorStyle.js';
export { default as EditorStyle } from '../editor/style/EditorStyle.js';

// Chart
export * from '../chart/Chart.vue';
export { default as Chart } from '../chart/Chart.vue';
export * from '../chart/style/ChartStyle.js';
export { default as ChartStyle } from '../chart/style/ChartStyle.js';
`
    ],
    esm: [
        `/***************** PrimeVue (Auto-Generated) *****************/

// Utils
export * from 'primevue/utils';

// UseConfirm
export * from 'primevue/useconfirm';

// UseDialog
export * from 'primevue/usedialog';

// UseToast
export * from 'primevue/usetoast';

// UseStyle
export * from 'primevue/usestyle';
`
    ]
};

fs.readdirSync(path.resolve(__root, INPUT_DIR), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        const folderPath = path.resolve(__root, INPUT_DIR + folderName);

        fs.readdirSync(folderPath).forEach((file) => {
            let fileName = file.split(/(.vue)$|(.js)$/)[0];
            let name = fileName.toLowerCase();

            if (name === folderName) {
                const validModuleFolder = !modules.ignoredFolders.includes(folderName);

                exports[`./${folderName}`] = `./${INPUT_DIR}${folderName}/${file}`;

                if (validModuleFolder) {
                    modules.umd.push(
                        `
// ${fileName}
export * from '../${folderName}/${file}';
export { default as ${fileName} } from '../${folderName}/${file}';
`
                    );
                    modules.esm.push(
                        `
// ${fileName}
export * from 'primevue/${folderName}';
export { default as ${fileName} } from 'primevue/${folderName}';
`
                    );
                }

                try {
                    fs.readdirSync(folderPath + '/style').forEach((file) => {
                        let subFileName = file.split(/(.js)$/)[0];
                        let subName = subFileName.toLowerCase();

                        if (subName === `${folderName}style`) {
                            exports[`./${folderName}/style`] = `./${INPUT_DIR}${folderName}/style/${file}`;

                            if (validModuleFolder) {
                                modules.umd.push(
                                    `export * from '../${folderName}/style/${file}';
export { default as ${subFileName} } from '../${folderName}/style/${file}';
`
                                );
                                modules.esm.push(
                                    `export * from 'primevue/${folderName}/style';
export { default as ${subFileName} } from 'primevue/${folderName}/style';
`
                                );
                            }
                        }
                    });
                } catch {}
            }
        });
    });
exports['./*'] = './*';

// package.json
const pkgJson = JSON.parse(fs.readFileSync(pkg, { encoding: 'utf8', flag: 'r' }));

pkgJson.exports = exports;

fs.writeFileSync(pkg, JSON.stringify(pkgJson, null, 4));

// UMD
fs.writeFileSync(INPUT_DIR + 'umd/primevue.js', modules.umd.join(''));

// ESM
fs.writeFileSync(INPUT_DIR + 'index.js', modules.esm.join(''));
fs.writeFileSync(INPUT_DIR + 'index.d.ts', modules.esm.join(''));
