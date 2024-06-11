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

fs.readdirSync(path.resolve(__root, INPUT_DIR), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        fs.readdirSync(path.resolve(__root, INPUT_DIR + folderName)).forEach((file) => {
            let fileName = file.split(/(.vue)$|(.js)$/)[0];
            let name = fileName.toLowerCase();

            if (name === folderName) {
                exports[`./${folderName}`] = `./${INPUT_DIR}${folderName}/${file}`;
                exports[`./${folderName}/style`] = `./${INPUT_DIR}${folderName}/style/${fileName}Style.js`;
            }
        });
    });
exports['./*'] = './*';

const pkgJson = JSON.parse(fs.readFileSync(pkg, { encoding: 'utf8', flag: 'r' }));

pkgJson.exports = exports;

fs.writeFileSync(pkg, JSON.stringify(pkgJson, null, 4));
