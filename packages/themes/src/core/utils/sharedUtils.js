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
        toTokenKey(str) {
            return this.isString(str) ? str.replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '.' + c.toLowerCase())).toLowerCase() : str;
        },
        merge(value1, value2) {
            if (this.isArray(value1)) {
                value1.push(...(value2 || []));
            } else if (this.isObject(value1)) {
                Object.assign(value1, value2);
            }
        },
        mergeKeysByRegex(target = {}, source = {}, regex) {
            const mergedObj = { ...target };

            Object.keys(source).forEach((key) => {
                if (this.test(regex, key)) {
                    if (this.isObject(source[key]) && key in target && this.isObject(target[key])) {
                        mergedObj[key] = this.mergeKeysByRegex(target[key], source[key], regex);
                    } else {
                        mergedObj[key] = source[key];
                    }
                } else {
                    mergedObj[key] = source[key];
                }
            });

            return mergedObj;
        },
        mergeKeys(...args) {
            const _mergeKeys = (target = {}, source = {}) => {
                const mergedObj = { ...target };

                Object.keys(source).forEach((key) => {
                    if (this.isObject(source[key]) && key in target && this.isObject(target[key])) {
                        mergedObj[key] = _mergeKeys(target[key], source[key]);
                    } else {
                        mergedObj[key] = source[key];
                    }
                });

                return mergedObj;
            };

            return args.reduce((acc, obj, i) => (i === 0 ? obj : _mergeKeys(acc, obj)), {});
        },
        getItemValue(obj, ...params) {
            return this.isFunction(obj) ? obj(...params) : obj;
        },
        getOptionValue(options, key = '', params = {}) {
            const fKeys = this.toFlatCase(key).split('.');
            const fKey = fKeys.shift();

            return fKey
                ? this.isObject(options)
                    ? this.getOptionValue(this.getItemValue(options[Object.keys(options).find((k) => this.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                    : undefined
                : this.getItemValue(options, params);
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
            // Check for Figma (value-type)
            return this.isObject(value) && value.hasOwnProperty('value') && value.hasOwnProperty('type') ? value.value : value;
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
        toNormalizeVariable(prefix = '', variable = '') {
            return this.toNormalizePrefix(`${this.isString(prefix, false) && this.isString(variable, false) ? `${prefix}-` : prefix}${variable}`);
        },
        getVariableName(prefix = '', variable = '') {
            return `--${this.toNormalizeVariable(prefix, variable)}`;
        },
        getVariableValue(value, variable = '', prefix = '', excludedKeyRegexes = [], fallback) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value.trim();

                if (this.test(regex, val)) {
                    const _val = val.replaceAll(regex, (v) => {
                        const path = v.replace(/{|}/g, '');
                        const keys = path.split('.').filter((_v) => !excludedKeyRegexes.some((_r) => this.test(_r, _v)));

                        return `var(${this.getVariableName(prefix, this.toKebabCase(keys.join('-')))}${this.isNotEmpty(fallback) ? `, ${fallback}` : ''})`;
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
        getComputedValue(obj = {}, value) {
            if (this.isString(value)) {
                const regex = /{([^}]*)}/g;
                const val = value.trim();

                return this.test(regex, val) ? val.replaceAll(regex, (v) => this.getOptionValue(obj, v.replace(/{|}/g, ''))) : val;
            } else if (this.isNumber(value)) {
                return value;
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
        },
        minifyCSS(css) {
            return css
                ? css
                      .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
                      .replace(/ {2,}/g, ' ')
                      .replace(/ ([{:}]) /g, '$1')
                      .replace(/([;,]) /g, '$1')
                      .replace(/ !/g, '!')
                      .replace(/: /g, ':')
                : css;
        }
    },
    dom: {
        isClient() {
            return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
        },
        addClass(element, className) {
            if (element && className && !this.hasClass(element, className)) {
                if (element.classList) element.classList.add(className);
                else element.className += ' ' + className;
            }
        },
        removeClass(element, className) {
            if (element && className) {
                if (element.classList) element.classList.remove(className);
                else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },
        hasClass(element, className) {
            if (element) {
                if (element.classList) return element.classList.contains(className);
                else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
            }

            return false;
        },
        removeMultipleClasses(element, classNames) {
            if (element && classNames) {
                [classNames]
                    .flat()
                    .filter(Boolean)
                    .forEach((cNames) => cNames.split(' ').forEach((className) => this.removeClass(element, className)));
            }
        }
    }
};
