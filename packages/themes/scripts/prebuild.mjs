import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

// update package.json > "publishConfig.exports" for publish
let exports = {
    '.': {
        types: './index.d.ts',
        import: './index.mjs'
    }
};

fs.readdirSync(path.resolve(__root, INPUT_DIR + 'presets'), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        exports[`./${folderName}/*`] = {
            types: `./types/*/index.d.ts`,
            import: `./${folderName}/*/index.mjs`
        };
    });
exports['./*'] = {
    types: './*/index.d.ts',
    import: './*/index.mjs'
};

const pkgJson = JSON.parse(fs.readFileSync(pkg, { encoding: 'utf8', flag: 'r' }));

pkgJson.publishConfig.exports = exports;

fs.writeFileSync(pkg, JSON.stringify(pkgJson, null, 4));
