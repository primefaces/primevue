<script>
import BaseComponent from 'primevue/basecomponent';
import BaseIconStyle from 'primevue/baseicon/style';
import { ObjectUtils, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'BaseIcon',
    extends: BaseComponent,
    data() {
        return {
            id: this.$attrs.id
        };
    },
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
    mounted() {
        this.id = this.id || UniqueComponentId();
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    methods: {
        pti() {
            const isLabelEmpty = ObjectUtils.isEmpty(this.label);

            return {
                ...(!this.isUnstyled && {
                    class: [
                        'p-icon',
                        {
                            'p-icon-spin': this.spin
                        }
                    ]
                }),
                id: this.id,
                role: !isLabelEmpty ? 'img' : undefined,
                'aria-label': !isLabelEmpty ? this.label : undefined,
                'aria-hidden': isLabelEmpty
            };
        }
    }
};
</script>
