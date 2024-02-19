import ObjectUtils from '../../utils/ObjectUtils';

/* Custom Theme */
const defaultStyleOptions = {
    //spacing: 2 // 2 * value
    //spacing: [0, 1, 3, 5, 7]
    //spacing: (value) => value * 2
    spacing: {
        0: 0,
        1: 2,
        2: 4,
        3: 6
    }
};

export const getDeclaration = (property, value) => {
    return [property]
        .flat()
        .map((prop) => ObjectUtils.css.getDeclaration(ObjectUtils.toKebabCase(prop), value))
        .join('');
};

const importantRegex = /!$/;

const formatter = {
    format(computedValue, value) {
        return importantRegex.test(value) ? this.important(computedValue) : computedValue;
    },
    important(value) {
        return `${value}!important`;
    }
};

export const token = {
    spacing: (property) => {
        const transform = (key, value, options = {}) => {
            const spacing = options.spacing; // theming and default spacing
            let computedValue = `${value}`.replace(importantRegex, '').trim();

            if (ObjectUtils.isNumber(spacing)) {
                computedValue = ObjectUtils.isNumber(computedValue) ? +computedValue * spacing : computedValue;
            } else if (ObjectUtils.isArray(spacing)) {
                computedValue = ObjectUtils.isNumber(computedValue) ? spacing[+computedValue] ?? computedValue : computedValue;
            } else if (ObjectUtils.isObject(spacing)) {
                computedValue = ObjectUtils.isNumber(computedValue) ? spacing[+computedValue] ?? computedValue : computedValue;
            } else if (ObjectUtils.isFunction(spacing)) {
                computedValue = ObjectUtils.isNumber(computedValue) ? spacing(+computedValue) : computedValue;
            }

            return formatter.format(ObjectUtils.css.getVariableValue(computedValue, key), value);
        };

        return {
            type: 'spacing',
            property,
            transform,
            getStyleDeclaration(key, value, options) {
                return getDeclaration(property, transform(key, value, defaultStyleOptions));
            }
        };
    },
    sizing: (property) => {
        const transform = (key, value, options = {}) => {
            let computedValue = `${value}`.replace(importantRegex, '').trim();

            try {
                computedValue = Function(`'use strict'; return ${computedValue}`)();
            } catch {}

            if (ObjectUtils.isNumber(computedValue)) {
                computedValue = computedValue <= 1 && computedValue !== 0 ? `${computedValue * 100}%` : computedValue;
            }

            return formatter.format(ObjectUtils.css.getVariableValue(computedValue, key), value);
        };

        return {
            type: 'sizing',
            property,
            transform,
            getStyleDeclaration(key, value, options) {
                return getDeclaration(property, transform(key, value, defaultStyleOptions));
            }
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

                        ObjectUtils.isNotEmpty(v) && acc.push(value.getStyleDeclaration(key, v, options));

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
