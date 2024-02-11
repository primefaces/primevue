<script>
import BaseStyle from 'primevue/base/style';
import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';
import BaseComponentStyle from './style/BaseComponentStyle';

export default {
    name: 'BaseComponent',
    props: {
        pt: {
            type: Object,
            default: undefined
        },
        ptOptions: {
            type: Object,
            default: undefined
        },
        unstyled: {
            type: Boolean,
            default: undefined
        }
    },
    inject: {
        $parentInstance: {
            default: undefined
        }
    },
    watch: {
        isUnstyled: {
            immediate: true,
            handler(newValue) {
                if (!newValue) {
                    BaseComponentStyle.loadStyle({ nonce: this.$config?.csp?.nonce });
                    this.$options.style && this.$style.loadStyle({ nonce: this.$config?.csp?.nonce });
                }
            }
        }
    },
    beforeCreate() {
        const _usept = this.pt?.['_usept'];
        const originalValue = _usept ? this.pt?.originalValue?.[this.$.type.name] : undefined;
        const value = _usept ? this.pt?.value?.[this.$.type.name] : this.pt;

        (value || originalValue)?.hooks?.['onBeforeCreate']?.();

        const _useptInConfig = this.$config?.pt?.['_usept'];
        const originalValueInConfig = _useptInConfig ? this.$primevue?.config?.pt?.originalValue : undefined;
        const valueInConfig = _useptInConfig ? this.$primevue?.config?.pt?.value : this.$primevue?.config?.pt;

        (valueInConfig || originalValueInConfig)?.[this.$.type.name]?.hooks?.['onBeforeCreate']?.();
    },
    created() {
        this._hook('onCreated');
    },
    beforeMount() {
        BaseStyle.loadStyle({ nonce: this.$config?.csp?.nonce });
        this._loadGlobalStyles();
        this._hook('onBeforeMount');
    },
    mounted() {
        this._hook('onMounted');
    },
    beforeUpdate() {
        this._hook('onBeforeUpdate');
    },
    updated() {
        this._hook('onUpdated');
    },
    beforeUnmount() {
        this._hook('onBeforeUnmount');
    },
    unmounted() {
        this._hook('onUnmounted');
    },
    methods: {
        _hook(hookName) {
            if (!this.$options.hostName) {
                const selfHook = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, `hooks.${hookName}`);
                const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);

                selfHook?.();
                defaultHook?.();
            }
        },
        _mergeProps(fn, ...args) {
            return ObjectUtils.isFunction(fn) ? fn(...args) : mergeProps(...args);
        },
        _loadGlobalStyles() {
            /*
             * @todo Add self custom css support;
             * <Panel :pt="{ css: `...` }" .../>
             *
             * const selfCSS = this._getPTClassValue(this.pt, 'css', this.$params);
             * const defaultCSS = this._getPTClassValue(this.defaultPT, 'css', this.$params);
             * const mergedCSS = mergeProps(selfCSS, defaultCSS);
             * ObjectUtils.isNotEmpty(mergedCSS?.class) && this.$css.loadCustomStyle(mergedCSS?.class);
             */

            const globalCSS = this._useGlobalPT(this._getOptionValue, 'global.css', this.$params);

            ObjectUtils.isNotEmpty(globalCSS) && BaseComponentStyle.loadGlobalStyle(globalCSS, { nonce: this.$config?.csp?.nonce });
        },
        _getHostInstance(instance) {
            return instance ? (this.$options.hostName ? (instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance)) : instance.$parentInstance) : undefined;
        },
        _getPropValue(name) {
            return this[name] || this._getHostInstance(this)?.[name];
        },
        _getOptionValue(options, key = '', params = {}) {
            const fKeys = ObjectUtils.toFlatCase(key).split('.');
            const fKey = fKeys.shift();

            return fKey
                ? ObjectUtils.isObject(options)
                    ? this._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find((k) => ObjectUtils.toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params)
                    : undefined
                : ObjectUtils.getItemValue(options, params);
        },
        _getPTValue(obj = {}, key = '', params = {}, searchInDefaultPT = true) {
            const searchOut = /./g.test(key) && !!params[key.split('.')[0]];
            const { mergeSections = true, mergeProps: useMergeProps = false } = this._getPropValue('ptOptions') || this.$config?.ptOptions || {};
            const global = searchInDefaultPT ? (searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params)) : undefined;
            const self = searchOut ? undefined : this._getPTSelf(obj, this._getPTClassValue, key, { ...params, global: global || {} });
            const datasets = this._getPTDatasets(key);

            return mergeSections || (!mergeSections && self) ? (useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
        },
        _getPTSelf(obj = {}, ...args) {
            return mergeProps(
                this._usePT(this._getPT(obj, this.$name), ...args), // Exp; <component :pt="{}"
                this._usePT(this.$_attrsPT, ...args) // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
            );
        },
        _getPTDatasets(key = '') {
            const datasetPrefix = 'data-pc-';
            const isExtended = key === 'root' && ObjectUtils.isNotEmpty(this.pt?.['data-pc-section']);

            return (
                key !== 'transition' && {
                    ...(key === 'root' && {
                        [`${datasetPrefix}name`]: ObjectUtils.toFlatCase(isExtended ? this.pt?.['data-pc-section'] : this.$.type.name),
                        ...(isExtended && { [`${datasetPrefix}extend`]: ObjectUtils.toFlatCase(this.$.type.name) })
                    }),
                    [`${datasetPrefix}section`]: ObjectUtils.toFlatCase(key)
                }
            );
        },
        _getPTClassValue(...args) {
            const value = this._getOptionValue(...args);

            return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? { class: value } : value;
        },
        _getPT(pt, key = '', callback) {
            const getValue = (value, checkSameKey = false) => {
                const computedValue = callback ? callback(value) : value;
                const _key = ObjectUtils.toFlatCase(key);
                const _cKey = ObjectUtils.toFlatCase(this.$name);

                return (checkSameKey ? (_key !== _cKey ? computedValue?.[_key] : undefined) : computedValue?.[_key]) ?? computedValue;
            };

            return pt?.hasOwnProperty('_usept')
                ? {
                      _usept: pt['_usept'],
                      originalValue: getValue(pt.originalValue),
                      value: getValue(pt.value)
                  }
                : getValue(pt, true);
        },
        _usePT(pt, callback, key, params) {
            const fn = (value) => callback(value, key, params);

            if (pt?.hasOwnProperty('_usept')) {
                const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || this.$config?.ptOptions || {};
                const originalValue = fn(pt.originalValue);
                const value = fn(pt.value);

                if (originalValue === undefined && value === undefined) return undefined;
                else if (ObjectUtils.isString(value)) return value;
                else if (ObjectUtils.isString(originalValue)) return originalValue;

                return mergeSections || (!mergeSections && value) ? (useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
            }

            return fn(pt);
        },
        _useGlobalPT(callback, key, params) {
            return this._usePT(this.globalPT, callback, key, params);
        },
        _useDefaultPT(callback, key, params) {
            return this._usePT(this.defaultPT, callback, key, params);
        },
        ptm(key = '', params = {}) {
            return this._getPTValue(this.pt, key, { ...this.$params, ...params });
        },
        ptmi(key = '', params = {}) {
            // inheritAttrs:true without `pt:*`
            return mergeProps(this.$_attrsNoPT, this.ptm(key, params));
        },
        ptmo(obj = {}, key = '', params = {}) {
            return this._getPTValue(obj, key, { instance: this, ...params }, false);
        },
        cx(key = '', params = {}) {
            return !this.isUnstyled ? this._getOptionValue(this.$style.classes, key, { ...this.$params, ...params }) : undefined;
        },
        sx(key = '', when = true, params = {}) {
            if (when) {
                const self = this._getOptionValue(this.$style.inlineStyles, key, { ...this.$params, ...params });
                const base = this._getOptionValue(BaseComponentStyle.inlineStyles, key, { ...this.$params, ...params });

                return [base, self];
            }

            return undefined;
        }
    },
    computed: {
        globalPT() {
            return this._getPT(this.$config?.pt, undefined, (value) => ObjectUtils.getItemValue(value, { instance: this }));
        },
        defaultPT() {
            return this._getPT(this.$config?.pt, undefined, (value) => this._getOptionValue(value, this.$name, { ...this.$params }) || ObjectUtils.getItemValue(value, { ...this.$params }));
        },
        isUnstyled() {
            return this.unstyled !== undefined ? this.unstyled : this.$config?.unstyled;
        },
        $params() {
            const parentInstance = this._getHostInstance(this) || this.$parent;

            return {
                instance: this,
                props: this.$props,
                state: this.$data,
                attrs: this.$attrs,
                parent: {
                    instance: parentInstance,
                    props: parentInstance?.$props,
                    state: parentInstance?.$data,
                    attrs: parentInstance?.$attrs
                },
                /* @deprecated since v3.43.0. Use the `parent.instance` instead of the `parentInstance`.*/
                parentInstance
            };
        },
        $style() {
            return { classes: undefined, inlineStyles: undefined, loadStyle: () => {}, loadCustomStyle: () => {}, ...(this._getHostInstance(this) || {}).$style, ...this.$options.style };
        },
        $config() {
            return this.$primevue?.config;
        },
        $name() {
            return this.$options.hostName || this.$.type.name;
        },
        $_attrsPT() {
            return Object.entries(this.$attrs || {})
                .filter(([key]) => key?.startsWith('pt:'))
                .reduce((result, [key, value]) => {
                    const [, ...rest] = key.split(':');

                    rest?.reduce((currentObj, nestedKey, index, array) => {
                        !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});

                        return currentObj[nestedKey];
                    }, result);

                    return result;
                }, {});
        },
        $_attrsNoPT() {
            // $attrs without `pt:*`
            return Object.entries(this.$attrs || {})
                .filter(([key]) => !key?.startsWith('pt:'))
                .reduce((acc, [key, value]) => {
                    acc[key] = value;

                    return acc;
                }, {});
        }
    }
};
</script>
