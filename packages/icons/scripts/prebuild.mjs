import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(path.resolve(resolvePath(import.meta.url).__dirname, '../package.json'));

// update package.json > "exports" for local
let exports = {};
let modules = {
    ignoredFolders: [],
    esm: [
        `/***************** PrimeVue Icons (Auto-Generated) *****************/
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

            if (name === folderName || name === `${folderName}icon`) {
                const validModuleFolder = !modules.ignoredFolders.includes(folderName);

                exports[`./${folderName}`] = `./${INPUT_DIR}${folderName}/${file}`;

                if (validModuleFolder) {
                    modules.esm.push(
                        `
// ${fileName}
export * from '@primevue/icons/${folderName}';
export { default as ${fileName} } from '@primevue/icons/${folderName}';
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
                                modules.esm.push(
                                    `export * from '@primevue/icons/${folderName}/style';
export { default as ${subFileName} } from '@primevue/icons/${folderName}/style';
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

// ESM
fs.writeFileSync(INPUT_DIR + 'index.js', modules.esm.join(''));
fs.writeFileSync(INPUT_DIR + 'index.d.ts', modules.esm.join(''));
