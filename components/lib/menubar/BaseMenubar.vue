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
        buttonProps: {
            type: null,
            default: null
        },
        breakpoint: {
            type: String,
            default: '960px'
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
