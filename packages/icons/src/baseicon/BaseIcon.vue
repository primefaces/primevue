<script>
import BaseComponent from '@primevue/core/basecomponent';
import { ObjectUtils } from '@primevue/core/utils';
import BaseIconStyle from '@primevue/icons/baseicon/style';

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
    provide() {
        return {
            $pcIcon: this,
            $parentInstance: this
        };
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
                role: !isLabelEmpty ? 'img' : undefined,
                'aria-label': !isLabelEmpty ? this.label : undefined,
                'aria-hidden': isLabelEmpty
            };
        }
    }
};
</script>
