<script>
import BaseComponent from 'primevue/basecomponent';
import TieredMenuStyle from 'primevue/tieredmenu/style';

export default {
    name: 'BaseTieredMenu',
    extends: BaseComponent,
    props: {
        popup: {
            type: Boolean,
            default: false
        },
        model: {
            type: Array,
            default: null
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
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
    style: TieredMenuStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
