<script>
import BaseComponent from '@primevue/core/basecomponent';
import InputMaskStyle from 'primevue/inputmask/style';

export default {
    name: 'BaseInputMask',
    extends: BaseComponent,
    props: {
        modelValue: null,
        slotChar: {
            type: String,
            default: '_'
        },
        mask: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        autoClear: {
            type: Boolean,
            default: true
        },
        unmask: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        }
    },
    style: InputMaskStyle,
    provide() {
        return {
            $pcInputMask: this,
            $parentInstance: this
        };
    }
};
</script>
