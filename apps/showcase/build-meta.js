const fs = require('fs-extra');
const path = require('path');

function copyDependencies(inFolder, outFolder, subFolder) {
    fs.readdirSync(inFolder, { withFileTypes: true }).forEach((entry) => {
        const fileName = entry.name;
        const sourcePath = path.join(inFolder, fileName);
        const destPath = path.join(outFolder, fileName);

        if (entry.isDirectory()) {
            copyDependencies(sourcePath, destPath, subFolder);
        } else {
            if (fileName === 'package.json' || fileName.endsWith('d.ts') || fileName.endsWith('.vue')) {
                if (subFolder && sourcePath.includes(subFolder)) {
                    const subDestPath = path.join(outFolder, fileName.replace(subFolder, ''));

                    fs.ensureDirSync(path.dirname(subDestPath));
                    fs.copyFileSync(sourcePath, subDestPath);
                } else {
                    fs.ensureDirSync(path.dirname(destPath));
                    fs.copyFileSync(sourcePath, destPath);
                }
            }
        }
    });
}

copyDependencies('./components/lib/', 'dist/', '/style');
copyDependencies('./components/lib/icons/', 'dist/icons/');
copyDependencies('./components/lib/passthrough/', 'dist/passthrough/');
copyDependencies('./components/lib/themes/', 'dist/themes/');

fs.copySync(path.resolve(__dirname, './components/lib/ts-helpers.d.ts'), 'dist/ts-helpers.d.ts');
fs.copySync(path.resolve(__dirname, './README.md'), 'dist/README.md');
fs.copySync(path.resolve(__dirname, './LICENSE.md'), 'dist/LICENSE.md');
