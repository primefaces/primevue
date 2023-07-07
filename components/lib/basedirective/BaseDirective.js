import { loadBaseStyle } from 'primevue/base';
import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';

const BaseDirective = {
    _getMeta: (...args) => [ObjectUtils.isObject(args[0]) ? undefined : args[0], ObjectUtils.getItemValue(ObjectUtils.isObject(args[0]) ? args[0] : args[1])],
    _getOptionValue: (options, key = '', params = {}) => {
        const fKeys = ObjectUtils.convertToFlatCase(key).split('.');
        const fKey = fKeys.shift();

        return fKey
            ? ObjectUtils.isObject(options)
                ? BaseDirective._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find((k) => ObjectUtils.convertToFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                : undefined
            : ObjectUtils.getItemValue(options, params);
    },
    _getPTValue: (instance = {}, obj = {}, key = '', params = {}, searchInDefaultPT = true) => {
        const datasetPrefix = 'data-pc-';
        const self = BaseDirective._getOptionValue(obj, key, params);
        const globalPT = searchInDefaultPT ? BaseDirective._getOptionValue(instance.defaultPT, key, params) : undefined;
        const merged = mergeProps(self, globalPT, {
            ...(key === 'root' && { [`${datasetPrefix}name`]: ObjectUtils.convertToFlatCase(instance.$name) }),
            [`${datasetPrefix}section`]: ObjectUtils.convertToFlatCase(key)
        });

        return merged;
    },
    _hook: (directiveName, hookName, el, binding, vnode, prevVnode) => {
        const config = binding?.instance?.$primevue?.config;
        const selfHook = binding?.value?.pt?.hooks?.[hookName];
        const globalHook = config?.pt?.directives?.[directiveName]?.hooks?.[hookName];

        selfHook?.(el, binding, vnode, prevVnode);
        globalHook?.(el, binding, vnode, prevVnode);
    },
    _extend: (name, options = {}) => {
        const handleHook = (hook, el, binding, vnode, prevVnode) => {
            el._$instances = el._$instances || {};

            const config = binding?.instance?.$primevue?.config;
            const $prevInstance = el._$instances[name] || {};
            const $options = ObjectUtils.isEmpty($prevInstance) ? { ...options, ...options?.methods } : {};

            el._$instances[name] = {
                ...$prevInstance,
                /* new instance variables to pass in directive methods */
                $name: name,
                $host: el,
                $binding: binding,
                $el: $prevInstance['$el'] || undefined,
                $css: { classes: undefined, inlineStyles: undefined, loadStyle: () => {}, ...options?.css },
                /* computed instance variables */
                defaultPT: config?.pt?.directives?.[name],
                isUnstyled: el.unstyled !== undefined ? el.unstyled : config?.unstyled,
                /* instance's methods */
                ptm: (key = '', params = {}) => BaseDirective._getPTValue(el.$instance, el.$instance?.$binding?.value?.pt, key, { ...params }),
                ptmo: (obj = {}, key = '', params = {}) => BaseDirective._getPTValue(el.$instance, obj, key, params, false),
                cx: (key = '', params = {}) => (!el.$instance?.isUnstyled ? BaseDirective._getOptionValue(el.$instance?.$css?.classes, key, { ...params }) : undefined),
                sx: (key = '', when = true, params = {}) => (when ? BaseDirective._getOptionValue(el.$instance?.$css?.inlineStyles, key, { ...params }) : undefined),
                ...$options
            };

            el.$instance = el._$instances[name]; // pass instance data to hooks
            el.$instance[hook]?.(el, binding, vnode, prevVnode); // handle hook in directive implementation
            BaseDirective._hook(name, hook, el, binding, vnode, prevVnode); // handle hooks during directive uses (global and self-definition)
        };

        return {
            created: (el, binding, vnode, prevVnode) => {
                handleHook('created', el, binding, vnode, prevVnode);
            },
            beforeMount: (el, binding, vnode, prevVnode) => {
                loadBaseStyle();
                !el.$instance?.isUnstyled && el.$instance?.$css?.loadStyle();
                handleHook('beforeMount', el, binding, vnode, prevVnode);
            },
            mounted: (el, binding, vnode, prevVnode) => {
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
