<script>
import BaseComponent from 'primevue/basecomponent';
import InplaceStyle from 'primevue/inplace/style';

export default {
    name: 'BaseInplace',
    extends: BaseComponent,
    props: {
        closable: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        displayProps: {
            type: null,
            default: null
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    style: InplaceStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
