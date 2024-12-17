<script>
import BaseInput from '@primevue/core/baseinput';
import InputMaskStyle from 'primevue/inputmask/style';

export default {
    name: 'BaseInputMask',
    extends: BaseInput,
    props: {
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
