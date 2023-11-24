<script>
import BaseComponent from 'primevue/basecomponent';
import MegaMenuStyle from 'primevue/megamenu/style';

export default {
    name: 'BaseMegaMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: MegaMenuStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
