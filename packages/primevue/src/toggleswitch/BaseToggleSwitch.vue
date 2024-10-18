<script>
import BaseEditableHolder from '@primevue/core/baseeditableholder';
import ToggleSwitchStyle from 'primevue/toggleswitch/style';

export default {
    name: 'BaseToggleSwitch',
    extends: BaseEditableHolder,
    props: {
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
