<script>
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'ComponentBase',
    props: {
        pt: {
            type: Object,
            value: {}
        }
    },
    methods: {
        ptm(key = '', params = {}) {
            return ObjectUtils.getItemValue((this.pt || {})[key.toLowerCase()], { props: this.$props, state: this.$data, ...params });
        },
        ptmo(obj = {}, key = '', params = {}) {
            return ObjectUtils.getItemValue(obj[key.toLowerCase()], params);
        }
    }
};
</script>
