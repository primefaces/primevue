<script>
import BaseComponent from 'primevue/basecomponent';
import TabMenuStyle from 'primevue/tabmenu/style';

export default {
    name: 'BaseTabMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        activeIndex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    style: TabMenuStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
