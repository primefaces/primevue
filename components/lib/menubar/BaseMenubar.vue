<script>
import BaseComponent from 'primevue/basecomponent';
import MenubarStyle from 'primevue/menubar/style';

export default {
    name: 'BaseMenubar',
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
        buttonProps: {
            type: null,
            default: null
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
    style: MenubarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
