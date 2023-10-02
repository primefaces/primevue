<script>
import BaseComponent from 'primevue/basecomponent';
import InputSwitchStyle from 'primevue/inputswitch/style';

export default {
    name: 'BaseInputSwitch',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: null,
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
    style: InputSwitchStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
