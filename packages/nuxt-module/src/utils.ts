import type { MetaType } from '@primevue/metadata';
import type { ConstructsType, ResolvePathOptions } from './types';

export const Utils = {
    object: {
        isEmpty(value: any) {
            return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
        },
        isNotEmpty(value: any) {
            return !this.isEmpty(value);
        },
        isFunction(value: any) {
            return !!(value && value.constructor && value.call && value.apply);
        },
        isString(value: any, empty: boolean = true) {
            return typeof value === 'string' && (empty || value !== '');
        },
        getValue(obj: any, ...params: any) {
            return this.isFunction(obj) ? obj(...params) : obj;
        },
        getName(item: MetaType, options: ConstructsType) {
            return this.isFunction(options?.name) ? options.name(item) : `${options.prefix}${item.name}`;
        },
        getPath(fn: any, options: ResolvePathOptions) {
            return this.isFunction(fn) ? fn(options) : options.from;
        },
        createStyleAsString(css: string, options = { name: '' }) {
            if (css) {
                const { name, ...rest } = options;

                return `'<style type="text/css" data-primevue-style-id="${name}"${Object.entries(rest).reduce((s, [k, v]) => s + `${k}="${v}"`, ' ')}>${css}</style>'`;
            }

            return '';
        }
    }
};
