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
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
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
