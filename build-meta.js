const fs = require('fs-extra');
const path = require('path');

fs.readdirSync(path.resolve(__dirname, './components/lib/'), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        fs.readdirSync(path.resolve(__dirname, './components/lib/' + folderName)).forEach((file) => {
            if (file === 'package.json' || file.endsWith('d.ts') || file.endsWith('vue')) {
                fs.copySync(path.resolve(__dirname, './components/lib/' + folderName) + '/' + file, 'dist/' + folderName + '/' + file);
            }
        });
    });

fs.copySync(path.resolve(__dirname, './components/lib/ts-helpers.d.ts'), 'dist/ts-helpers.d.ts');
fs.copySync(path.resolve(__dirname, './package-build.json'), 'dist/package.json');
fs.copySync(path.resolve(__dirname, './README.md'), 'dist/README.md');
fs.copySync(path.resolve(__dirname, './LICENSE.md'), 'dist/LICENSE.md');
