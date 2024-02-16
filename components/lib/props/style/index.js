import ObjectUtils from '../../utils/ObjectUtils';

export const getDeclaration = (property, value) => {
    return [property]
        .flat()
        .map((prop) => ObjectUtils.css.getDeclaration(ObjectUtils.toKebabCase(prop), value))
        .join('');
};

export const token = {
    spacing: (property, options) => {
        return {
            type: 'spacing',
            property,
            transform(value) {
                console.log(this.key);

                return value;
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

export const createRules = (rules = {}) => {
    return Object.entries(rules).reduce((acc, [key, value]) => ((acc[key] = { key, ...value }), acc), {});
};

export const createStyleData = (rules = {}) => {
    const keys = Object.keys(rules);
    const props = keys.reduce((acc, k) => ((acc[k] = undefined), acc), {});

    return {
        rules,
        keys,
        props,
        toString(obj) {
            return Object.entries(obj)
                .filter(([key]) => keys.includes(key))
                .reduce((acc, [key, value]) => {
                    if (ObjectUtils.isNotEmpty(value)) {
                        const rule = ObjectUtils.toKebabCase(key);

                        acc.push(rules[key].toString(ObjectUtils.css.getVariableValue(value, rule)));
                    }

                    return acc;
                }, [])
                .join('');
        }
    };
};
