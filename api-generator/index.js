const fs = require("fs");
const path = require("path");

const componentPath = path.join(__dirname, "./components");

const files = fs.readdirSync(componentPath);

const fileModules = {};

files.forEach(file => {
    const { name } = path.parse(file);

    fileModules[name] = require(`./components//${name}`);
});

module.exports = fileModules;
