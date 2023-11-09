<script>
import BaseComponent from 'primevue/basecomponent';
import BaseIconStyle from 'primevue/baseicon/style';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'BaseIcon',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: undefined
        },
        spin: {
            type: Boolean,
            default: false
        }
    },
    style: BaseIconStyle,
    beforeMount() {
        BaseIconStyle.loadStyle({ nonce: this.$config?.csp?.nonce });
    },
    methods: {
        pti() {
            const isLabelEmpty = ObjectUtils.isEmpty(this.label);

            return {
                class: [
                    'p-icon',
                    {
                        'p-icon-spin': this.spin
                    }
                ],
                role: !isLabelEmpty ? 'img' : undefined,
                'aria-label': !isLabelEmpty ? this.label : undefined,
                'aria-hidden': isLabelEmpty
            };
        }
    },
    computed: {
        $config() {
            return this.$primevue?.config;
        }
    }
};
</script>
