export const Utils = {
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
        isString(value, empty = true) {
            return typeof value === 'string' && (empty || value !== '');
        },
        getValue(obj, ...params) {
            return this.isFunction(obj) ? obj(...params) : obj;
        },
        getName(item, options) {
            return this.isFunction(options?.name) ? options.name(item) : `${options.prefix}${item.name}`;
        },
        getPath(fn, options) {
            return this.isFunction(fn) ? fn(options) : options.from;
        },
        createStyleAsString(css, options = { name: '' }) {
            if (css) {
                const { name, ...rest } = options;

                return `'<style type="text/css" data-primevue-style-id="${name}"${Object.entries(rest).reduce((s, [k, v]) => s + `${k}="${v}"`, ' ')}>${css}</style>'`;
            }

            return '';
        }
    }
};
