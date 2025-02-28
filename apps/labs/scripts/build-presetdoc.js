const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, '../assets/styles/primevue');
const jsonFilePath = path.join(__dirname, '../doc/common/presetdoc/index.json');

fs.readdir(folderPath, (err, files) => {
    if (err) {
        return console.error(err);
    }

    const jsonObject = {};

    files.forEach((file) => {
        const filePath = path.join(folderPath, file);

        if (path.extname(file) === '.css' && !file.startsWith('components')) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const fileName = path.parse(file).name;

            jsonObject[fileName] = fileContent;
        }
    });

    const dirPath = path.dirname(jsonFilePath);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFile(jsonFilePath, JSON.stringify(jsonObject, null, 2), (err) => {
        if (err) {
            return console.error(err);
        }
    });
});
