import ObjectUtils from '../../utils/ObjectUtils';

export const getDeclaration = (property, value) => {
    return [property]
        .flat()
        .map((prop) => ObjectUtils.css.getDeclaration(ObjectUtils.toKebabCase(prop), value))
        .join('');
};

const importantRegex = /.*!$/;

export const token = {
    spacing: (property, options) => {
        return {
            type: 'spacing',
            property,
            transform(value) {
                return importantRegex.test(value) ? value + 'important' : value;
            },
            toString(value, options) {
                return getDeclaration(property, this.transform(value));
            }
        };
    },
    sizing: (property) => {
        return {
            type: 'sizing',
            property,
            declaration: (value) => declaration(property, value)
        };
    },
    prop: (property) => {
        return {
            property
        };
    }
};

export const defineDeclarations = (...args) => {
    const getData = (keys, props, declarations) => {
        return {
            keys,
            props,
            declarations,
            getStyleDeclarations(options) {
                return Object.entries(declarations)
                    .reduce((acc, [key, value]) => {
                        const v = props[key];

                        ObjectUtils.isNotEmpty(v) && acc.push(value.toString(v, options));

                        return acc;
                    }, [])
                    .join('');
            },
            filterP(inProps) {
                const _props = Object.entries(inProps)
                    .filter(([key]) => keys.includes(key))
                    .reduce((acc, [key, value]) => ((acc[key] = value), acc), {});
                const _keys = Object.keys(_props);
                const _declarations = Object.entries(_props).reduce((acc, [key]) => ((acc[key] = declarations[key]), acc), {});

                return getData(_keys, _props, _declarations);
            }
        };
    };

    const declarations = Object.assign({}, ...args);
    const keys = Object.keys(declarations);
    const props = keys.reduce((acc, k) => ((acc[k] = undefined), acc), {});

    return getData(keys, props, declarations);
};
