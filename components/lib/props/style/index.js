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

export const defineDeclarations = (data = {}) => {
    return Object.entries(data).reduce((acc, [key, value]) => ((acc[key] = { key, ...value }), acc), {});
};

export const useDeclarations = (...args) => {
    const declarations = Object.assign({}, ...args);
    const keys = Object.keys(declarations);
    const props = keys.reduce((acc, k) => ((acc[k] = undefined), acc), {});

    return {
        keys,
        props,
        declarations,
        getStyleDeclarations(options) {},
        filterP(_props) {
            const __props = Object.entries(_props)
                .filter(([key]) => keys.includes(key))
                .reduce((acc, [k, v]) => ((acc[k] = v), acc), {});
            const __ks = Object.keys(__props);
            const __declarations = Object.entries(__props).reduce((acc, [key]) => ((acc[key] = declarations[key]), acc), {});

            /*const declarations = props.reduce((acc, [key, value]) => {
                    if (ObjectUtils.isNotEmpty(value)) {
                        const rule = ObjectUtils.toKebabCase(key);

                        acc.push(rules[key].toString(ObjectUtils.css.getVariableValue(value, rule)));
                    }

                    return acc;
                }, [])
                .join('');*/

            return {
                keys: __ks,
                props: __props,
                declarations: __declarations,
                getStyleDeclarations(options) {
                    return Object.entries(__declarations)
                        .reduce((acc, [, value]) => {
                            const { key, toString } = value;

                            const v = __props[key];

                            ObjectUtils.isNotEmpty(v) && acc.push(value.toString(v, options));

                            return acc;
                        }, [])
                        .join('');
                }
            };
        }
    };
};
