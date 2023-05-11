<script>
import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';

export default {
    name: 'BaseComponent',
    props: {
        pt: {
            type: Object,
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
        }
    },
    computed: {
        defaultPT() {
            return ObjectUtils.getItemValue(this.getOption(this.$primevue.config.pt, this.$.type.name), this.defaultsParams);
        },
        defaultsParams() {
            return { instance: this.$ };
        }
    }
};
</script>
