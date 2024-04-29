const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
const distDir = path.resolve(rootDir, 'dist');
const componentPath = path.join(__dirname, './components');

// Import project `package.json`
const pkg = require(path.resolve(rootDir, 'package.json'));
const libraryName = 'PrimeVue';
const libraryVersion = pkg.version;

const showcaseURL = 'https://primevue.org/';

const fileModules = {},
    veturTags = {},
    veturAttributes = {};

const files = fs.readdirSync(componentPath);

files.forEach((file) => {
    const { name } = path.parse(file);

    fileModules[name] = require(`./components//${name}`);
});

const webTypes = {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'vue',
    name: libraryName,
    version: libraryVersion,
    contributions: {
        html: {
            'types-syntax': 'typescript',
            'description-markup': 'markdown',
            tags: [],
            attributes: []
        }
    }
};

const addURL = (attr, url, value) => {
    const newArray = [];

    attr.forEach((att) => {
        const newObj = {};

        Object.keys(att).forEach((key) => {
            newObj[key] = att[key];
            if (key === value) newObj['doc-url'] = url;
        });

        newArray.push(newObj);
    });

    return newArray;
};

const createWebTypes = (component) => {
    const url = showcaseURL + `${component['doc-url'] ? component['doc-url'] : component.name.toLowerCase()}`;

    // components
    const tag = {
        name: component.name,
        source: {
            module: libraryName,
            symbol: component.name
        },
        'doc-url': url,
        description: component.description
    };

    // directives
    const attribute = {
        name: component.name,
        source: {
            module: libraryName,
            symbol: component.name
        },
        description: component.description,
        'doc-url': url,
        value: {
            kind: 'expression',
            type: 'function'
        }
    };

    if (component.props) {
        tag.attributes = addURL(component.props, url, 'default');
        tag.attributes.forEach((k) => {
            k['value'] = {
                kind: 'expression',
                type: k['type']
            };

            delete k['type'];
        });
    }

    if (component.events) {
        tag.events = addURL(component.events, url, 'name');
        tag.events.forEach((k) => {
            if (k.arguments) {
                k.arguments = addURL(k.arguments, url, 'name');
            }
        });
    }

    if (component.slots) {
        tag.slots = addURL(component.slots, url, 'name');
    }

    if (component['vue-modifiers']) {
        attribute.required = false;
        attribute['vue-modifiers'] = addURL(component['vue-modifiers'], url, 'name');

        if (attribute['vue-modifiers'].length < 1) delete attribute['vue-modifiers'];

        webTypes.contributions.html.attributes.push(attribute);
    }

    webTypes.contributions.html.tags.push(tag);
};

const createVeturTags = (component) => {
    const attributes = [];

    if (component.props) {
        component.props.forEach((comp) => {
            attributes.push(comp.name);
        });
    }

    if (attributes.length > 0) {
        veturTags[component.name] = {
            description: component.description,
            attributes
        };
    }
};

const createVeturAttributes = (component) => {
    if (component.props) {
        component.props.forEach((comp) => {
            veturAttributes[component.name.toLowerCase() + `/${comp.name}`] = {
                description: comp.description,
                type: comp.type
            };
        });
    }
};

Object.keys(fileModules).forEach((p) => {
    const component = fileModules[p][p];

    if (component) {
        createWebTypes(component);
        createVeturTags(component);
        createVeturAttributes(component);
    }
});

!fs.existsSync(distDir) && fs.mkdirSync(distDir);

const webTypesJson = JSON.stringify(webTypes, null, 2);

fs.writeFileSync(path.resolve(distDir, 'web-types.json'), webTypesJson);

const veturTagsJson = JSON.stringify(veturTags, null, 2);

fs.writeFileSync(path.resolve(distDir, 'vetur-tags.json'), veturTagsJson);

const veturAttributesJson = JSON.stringify(veturAttributes, null, 2);

fs.writeFileSync(path.resolve(distDir, 'vetur-attributes.json'), veturAttributesJson);
