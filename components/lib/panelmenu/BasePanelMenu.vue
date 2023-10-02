<script>
import BaseComponent from 'primevue/basecomponent';
import PanelMenuStyle from 'primevue/panelmenu/style';

export default {
    name: 'BasePanelMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        expandedKeys: {
            type: Object,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        }
    },
    style: PanelMenuStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
