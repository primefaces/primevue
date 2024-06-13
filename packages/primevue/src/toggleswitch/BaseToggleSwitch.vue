<script>
import BaseComponent from '@primevue/core/basecomponent';
import ToggleSwitchStyle from 'primevue/toggleswitch/style';

export default {
    name: 'BaseToggleSwitch',
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
    style: ToggleSwitchStyle,
    provide() {
        return {
            $pcToggleSwitch: this,
            $parentInstance: this
        };
    }
};
</script>
