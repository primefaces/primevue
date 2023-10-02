<script>
import BaseComponent from 'primevue/basecomponent';
import RadioButtonStyle from 'primevue/radiobutton/style';

export default {
    name: 'BaseRadioButton',
    extends: BaseComponent,
    props: {
        value: null,
        modelValue: null,
        name: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
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
        inputProps: {
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
    style: RadioButtonStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
