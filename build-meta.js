const fs = require('fs-extra');
const path = require('path');

function copyDependencies(inFolder, outFolder, subFolder) {
    fs.readdirSync(path.resolve(__dirname, inFolder), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, inFolder + folderName)).forEach((file) => {
                if (file === 'package.json' || file.endsWith('d.ts') || file.endsWith('vue')) {
                    fs.copySync(path.resolve(__dirname, inFolder + folderName) + '/' + file, outFolder + folderName + '/' + file);
                }
            });

            if (subFolder) {
                try {
                    fs.readdirSync(path.resolve(__dirname, inFolder + folderName + subFolder)).forEach((subFile) => {
                        if (subFile === 'package.json' || subFile.endsWith('d.ts') || subFile.endsWith('vue')) {
                            fs.copySync(path.resolve(__dirname, inFolder + folderName + subFolder) + '/' + subFile, outFolder + folderName + subFolder + '/' + subFile);
                        }
                    });
                } catch {}
            }
        });
}

copyDependencies('./components/lib/', 'dist/', '/style');
copyDependencies('./components/lib/icons/', 'dist/icons/');
copyDependencies('./components/lib/passthrough/', 'dist/passthrough/');

fs.copySync(path.resolve(__dirname, './components/lib/ts-helpers.d.ts'), 'dist/ts-helpers.d.ts');
fs.copySync(path.resolve(__dirname, './README.md'), 'dist/README.md');
fs.copySync(path.resolve(__dirname, './LICENSE.md'), 'dist/LICENSE.md');
