<script>
import BaseComponent from '@primevue/core/basecomponent';
import InputOtpStyle from 'primevue/inputotp/style';

export default {
    name: 'BaseInputOtp',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: null,
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
        readonly: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: null
        },
        length: {
            type: Number,
            default: 4
        },
        mask: {
            type: Boolean,
            default: false
        },
        integerOnly: {
            type: Boolean,
            default: false
        }
    },
    style: InputOtpStyle,
    provide() {
        return {
            $pcInputOtp: this,
            $parentInstance: this
        };
    }
};
</script>
