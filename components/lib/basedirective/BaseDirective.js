import BaseStyle from 'primevue/base/style';
import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';

const BaseDirective = {
    _getMeta: (...args) => [ObjectUtils.isObject(args[0]) ? undefined : args[0], ObjectUtils.getItemValue(ObjectUtils.isObject(args[0]) ? args[0] : args[1])],
    _getConfig: (binding, vnode) => (binding?.instance?.$primevue || vnode?.ctx?.appContext?.config?.globalProperties?.$primevue)?.config,
    _getOptionValue: (options, key = '', params = {}) => {
        const fKeys = ObjectUtils.toFlatCase(key).split('.');
        const fKey = fKeys.shift();

        return fKey
            ? ObjectUtils.isObject(options)
                ? BaseDirective._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find((k) => ObjectUtils.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                : undefined
            : ObjectUtils.getItemValue(options, params);
    },
    _getPTValue: (instance = {}, obj = {}, key = '', params = {}, searchInDefaultPT = true) => {
        const getValue = (...args) => {
            const value = BaseDirective._getOptionValue(...args);

            return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? { class: value } : value;
        };

        const { mergeSections = true, mergeProps: useMergeProps = false } = instance.binding?.value?.ptOptions || instance.$config?.ptOptions || {};
        const global = searchInDefaultPT ? BaseDirective._useDefaultPT(instance, instance.defaultPT(), getValue, key, params) : undefined;
        const self = BaseDirective._usePT(instance, BaseDirective._getPT(obj, instance.$name), getValue, key, { ...params, global: global || {} });
        const datasets = BaseDirective._getPTDatasets(instance, key);

        return mergeSections || (!mergeSections && self) ? (useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
    },
    _getPTDatasets(instance = {}, key = '') {
        const datasetPrefix = 'data-pc-';

        return {
            ...(key === 'root' && { [`${datasetPrefix}name`]: ObjectUtils.toFlatCase(instance.$name) }),
            [`${datasetPrefix}section`]: ObjectUtils.toFlatCase(key)
        };
    },
    _getPT: (pt, key = '', callback) => {
        const getValue = (value) => {
            const computedValue = callback ? callback(value) : value;
            const _key = ObjectUtils.toFlatCase(key);

            return computedValue?.[_key] ?? computedValue;
        };

        return pt?.hasOwnProperty('_usept')
            ? {
                  _usept: pt['_usept'],
                  originalValue: getValue(pt.originalValue),
                  value: getValue(pt.value)
              }
            : getValue(pt);
    },
    _usePT: (instance = {}, pt, callback, key, params) => {
        const fn = (value) => callback(value, key, params);

        if (pt?.hasOwnProperty('_usept')) {
            const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || instance.$config?.ptOptions || {};
            const originalValue = fn(pt.originalValue);
            const value = fn(pt.value);

            if (originalValue === undefined && value === undefined) return undefined;
            else if (ObjectUtils.isString(value)) return value;
            else if (ObjectUtils.isString(originalValue)) return originalValue;

            return mergeSections || (!mergeSections && value) ? (useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
        }

        return fn(pt);
    },
    _useDefaultPT: (instance = {}, defaultPT = {}, callback, key, params) => {
        return BaseDirective._usePT(instance, defaultPT, callback, key, params);
    },
    _hook: (directiveName, hookName, el, binding, vnode, prevVnode) => {
        const name = `on${ObjectUtils.toCapitalCase(hookName)}`;
        const config = BaseDirective._getConfig(binding, vnode);
        const instance = el?.$instance;
        const selfHook = BaseDirective._usePT(instance, BaseDirective._getPT(binding?.value?.pt, directiveName), BaseDirective._getOptionValue, `hooks.${name}`);
        const defaultHook = BaseDirective._useDefaultPT(instance, config?.pt?.directives?.[directiveName], BaseDirective._getOptionValue, `hooks.${name}`);
        const options = { el, binding, vnode, prevVnode };

        selfHook?.(instance, options);
        defaultHook?.(instance, options);
    },
    _mergeProps(instance = {}, fn, ...args) {
        return ObjectUtils.isFunction(fn) ? fn(...args) : mergeProps(...args);
    },
    _extend: (name, options = {}) => {
        const handleHook = (hook, el, binding, vnode, prevVnode) => {
            el._$instances = el._$instances || {};

            const config = BaseDirective._getConfig(binding, vnode);
            const $prevInstance = el._$instances[name] || {};
            const $options = ObjectUtils.isEmpty($prevInstance) ? { ...options, ...options?.methods } : {};

            el._$instances[name] = {
                ...$prevInstance,
                /* new instance variables to pass in directive methods */
                $name: name,
                $host: el,
                $binding: binding,
                $modifiers: binding?.modifiers,
                $value: binding?.value,
                $el: $prevInstance['$el'] || el || undefined,
                $style: { classes: undefined, inlineStyles: undefined, loadStyle: () => {}, ...options?.style },
                $config: config,
                /* computed instance variables */
                defaultPT: () => BaseDirective._getPT(config?.pt, undefined, (value) => value?.directives?.[name]),
                isUnstyled: () => (el.$instance?.$binding?.value?.unstyled !== undefined ? el.$instance?.$binding?.value?.unstyled : config?.unstyled),
                /* instance's methods */
                ptm: (key = '', params = {}) => BaseDirective._getPTValue(el.$instance, el.$instance?.$binding?.value?.pt, key, { ...params }),
                ptmo: (obj = {}, key = '', params = {}) => BaseDirective._getPTValue(el.$instance, obj, key, params, false),
                cx: (key = '', params = {}) => (!el.$instance?.isUnstyled() ? BaseDirective._getOptionValue(el.$instance?.$style?.classes, key, { ...params }) : undefined),
                sx: (key = '', when = true, params = {}) => (when ? BaseDirective._getOptionValue(el.$instance?.$style?.inlineStyles, key, { ...params }) : undefined),
                ...$options
            };

            el.$instance = el._$instances[name]; // pass instance data to hooks
            el.$instance[hook]?.(el, binding, vnode, prevVnode); // handle hook in directive implementation
            el[`$${name}`] = el.$instance; // expose all options with $<directive_name>
            BaseDirective._hook(name, hook, el, binding, vnode, prevVnode); // handle hooks during directive uses (global and self-definition)
        };

        return {
            created: (el, binding, vnode, prevVnode) => {
                handleHook('created', el, binding, vnode, prevVnode);
            },
            beforeMount: (el, binding, vnode, prevVnode) => {
                const config = BaseDirective._getConfig(binding, vnode);

                BaseStyle.loadStyle({ nonce: config?.csp?.nonce });
                !el.$instance?.isUnstyled() && el.$instance?.$style?.loadStyle({ nonce: config?.csp?.nonce });
                handleHook('beforeMount', el, binding, vnode, prevVnode);
            },
            mounted: (el, binding, vnode, prevVnode) => {
                const config = BaseDirective._getConfig(binding, vnode);

                BaseStyle.loadStyle({ nonce: config?.csp?.nonce });
                !el.$instance?.isUnstyled() && el.$instance?.$style?.loadStyle({ nonce: config?.csp?.nonce });
                handleHook('mounted', el, binding, vnode, prevVnode);
            },
            beforeUpdate: (el, binding, vnode, prevVnode) => {
                handleHook('beforeUpdate', el, binding, vnode, prevVnode);
            },
            updated: (el, binding, vnode, prevVnode) => {
                handleHook('updated', el, binding, vnode, prevVnode);
            },
            beforeUnmount: (el, binding, vnode, prevVnode) => {
                handleHook('beforeUnmount', el, binding, vnode, prevVnode);
            },
            unmounted: (el, binding, vnode, prevVnode) => {
                handleHook('unmounted', el, binding, vnode, prevVnode);
            }
        };
    },
    extend: (...args) => {
        const [name, options] = BaseDirective._getMeta(...args);

        return {
            extend: (..._args) => {
                const [_name, _options] = BaseDirective._getMeta(..._args);

                return BaseDirective.extend(_name, { ...options, ...options?.methods, ..._options });
            },
            ...BaseDirective._extend(name, options)
        };
    }
};

export default BaseDirective;
