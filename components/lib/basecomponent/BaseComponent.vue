<script>
import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';

const inlineStyles = {
    hiddenAccessible: {
        border: '0',
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px'
    }
};

export default {
    name: 'BaseComponent',
    props: {
        pt: {
            type: Object,
            default: undefined
        },
        unstyled: {
            type: Boolean,
            default: undefined
        }
    },
    methods: {
        getOption(obj = {}, key = '') {
            const fKey = ObjectUtils.convertToFlatCase(key);

            return obj[Object.keys(obj).find((k) => ObjectUtils.convertToFlatCase(k) === fKey) || ''];
        },
        getPTValue(obj = {}, key = '', params = {}) {
            const self = ObjectUtils.getItemValue(this.getOption(obj, key), params);
            const globalPT = ObjectUtils.getItemValue(this.getOption(this.defaultPT, key), params);
            const merged = mergeProps(self, globalPT);

            return merged;
            /*
             * @todo: The 'class' option in self can always be more powerful to style the component easily.
             *
             * return self && self['class'] ? { ...merged, ...{ class: self['class'] } } : merged;
             */
        },
        ptm(key = '', params = {}) {
            return this.getPTValue(this.pt, key, { props: this.$props, state: this.$data, ...params });
        },
        ptmo(obj = {}, key = '', params = {}) {
            return this.getPTValue(obj, key, params);
        },
        css(key = '', params = {}) {
            return !this.isUnstyled ? ObjectUtils.getItemValue(this.getOption(this.$options.style && this.$options.style.classes, key), { instance: this, props: this.$props, state: this.$data, ...params }) : undefined;
        },
        style(key = '', when = true, params = {}) {
            if (when) {
                const self = ObjectUtils.getItemValue(this.getOption(this.$options.style && this.$options.style.inlineStyles, key), { instance: this, props: this.$props, state: this.$data, ...params });
                const base = ObjectUtils.getItemValue(this.getOption(inlineStyles, key), { instance: this, props: this.$props, state: this.$data, ...params });

                return [base, self];
            }

            return undefined;
        }
    },
    computed: {
        defaultPT() {
            return ObjectUtils.getItemValue(this.getOption(this.$primevue.config.pt, this.$.type.name), this.defaultsParams);
        },
        defaultsParams() {
            return { instance: this };
        },
        isUnstyled() {
            return this.unstyled !== undefined ? this.unstyled : this.$primevue.config.unstyled;
        }
    }
};
</script>
