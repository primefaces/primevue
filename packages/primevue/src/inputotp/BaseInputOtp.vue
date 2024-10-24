<script>
import BaseInput from '@primevue/core/baseinput';
import InputOtpStyle from 'primevue/inputotp/style';

export default {
    name: 'BaseInputOtp',
    extends: BaseInput,
    props: {
        readonly: {
            type: Boolean,
            default: false
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
