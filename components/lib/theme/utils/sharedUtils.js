export default {
    object: {
        isEmpty(value) {
            return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
        },
        isNotEmpty(value) {
            return !this.isEmpty(value);
        },
        isFunction(value) {
            return !!(value && value.constructor && value.call && value.apply);
        },
        isObject(value, empty = true) {
            return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
        },
        isArray(value, empty = true) {
            return Array.isArray(value) && (empty || value.length !== 0);
        },
        isString(value, empty = true) {
            return typeof value === 'string' && (empty || value !== '');
        },
        isNumber(value) {
            return !isNaN(value);
        },
        toFlatCase(str) {
            // convert snake, kebab, camel and pascal cases to flat case
            return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
        },
        toKebabCase(str) {
            // convert snake, camel and pascal cases to kebab case
            return this.isString(str)
                ? str
                      .replace(/(_)/g, '-')
                      .replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '-' + c.toLowerCase()))
                      .toLowerCase()
                : str;
        },
        merge(value1, value2) {
            if (this.isArray(value1)) {
                value1.push(...(value2 || []));
            } else if (this.isObject(value1)) {
                Object.assign(value1, value2);
            }
        },
        test(regex, str) {
            if (regex) {
                const match = regex.test(str);

                regex.lastIndex = 0;

                return match;
            }

            return false;
        },
        toValue(value) {
            return this.isObject(value) && value.hasOwnProperty('value') ? value.value : value;
        },
        toUnit(value, variable = '') {
            const excludedProperties = ['opacity', 'z-index', 'line-height', 'font-weight', 'flex', 'flex-grow', 'flex-shrink', 'order'];

            if (!excludedProperties.some((property) => variable.endsWith(property))) {
                const val = `${value}`.trim();
                const valArr = val.split(' ');

                return valArr.map((v) => (this.isNumber(v) ? `${v}px` : v)).join(' ');
            }

            return value;
        },
        toNormalizePrefix(prefix) {
            return prefix.replaceAll(/ /g, '').replace(/[^\w]/g, '-');
        },
        getVariableValue(value, variable = '', prefix = '', excludedKeyRegexes = []) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value.trim();
                const px = prefix.trim();

                if (this.test(regex, val)) {
                    const computedPx = this.isNotEmpty(px) ? `${px}-` : px;
                    const _val = val.replaceAll(regex, (v) => {
                        const path = v.replace(/{|}/g, '');
                        const keys = path.split('.').filter((_v) => !excludedKeyRegexes.some((_r) => this.test(_r, _v)));

                        return `var(--${computedPx}${this.toKebabCase(keys.join('-'))})`;
                    });

                    const calculationRegex = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
                    const cleanedVarRegex = /var\([^)]+\)/g;

                    return this.test(calculationRegex, _val.replace(cleanedVarRegex, '0')) ? `calc(${_val})` : _val;
                }

                return this.toUnit(val, variable);
            } else if (this.isNumber(value)) {
                return this.toUnit(value, variable);
            }

            return undefined;
        },
        setProperty(properties, key, value) {
            if (this.isString(key, false)) {
                properties.push(`${key}:${value};`);
            }
        },
        getRule(selector, properties) {
            if (selector) {
                return `${selector}{${properties}}`;
            }

            return '';
        }
    }
};
