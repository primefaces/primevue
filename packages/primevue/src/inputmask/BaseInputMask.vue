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
        id: {
            type: String,
            default: null
        },
        class: {
            type: [String, Object],
            default: null
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
        name: {
            type: String,
            default: null
        },
        variant: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
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
