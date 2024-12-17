<script>
import BaseInput from '@primevue/core/baseinput';
import CheckboxStyle from 'primevue/checkbox/style';

export default {
    name: 'BaseCheckbox',
    extends: BaseInput,
    props: {
        value: null,
        binary: Boolean,
        indeterminate: {
            type: Boolean,
            default: false
        },
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
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
    style: CheckboxStyle,
    provide() {
        return {
            $pcCheckbox: this,
            $parentInstance: this
        };
    }
};
</script>
