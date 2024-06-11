<script>
import BaseComponent from '@primevue/core/basecomponent';
import TabMenuStyle from 'primevue/tabmenu/style';

export default {
    name: 'BaseTabMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        activeIndex: {
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
    style: TabMenuStyle,
    provide() {
        return {
            $pcTabMenu: this,
            $parentInstance: this
        };
    }
};
</script>
