<script>
import BaseComponent from '@primevue/core/basecomponent';
import PasswordStyle from 'primevue/password/style';

export default {
    name: 'BasePassword',
    extends: BaseComponent,
    props: {
        modelValue: String,
        promptLabel: {
            type: String,
            default: null
        },
        mediumRegex: {
            type: [String, RegExp],
            default: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})' // eslint-disable-line
        },
        strongRegex: {
            type: [String, RegExp],
            default: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})' // eslint-disable-line
        },
        weakLabel: {
            type: String,
            default: null
        },
        mediumLabel: {
            type: String,
            default: null
        },
        strongLabel: {
            type: String,
            default: null
        },
        feedback: {
            type: Boolean,
            default: true
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        toggleMask: {
            type: Boolean,
            default: false
        },
        hideIcon: {
            type: String,
            default: undefined
        },
        maskIcon: {
            type: String,
            default: undefined
        },
        showIcon: {
            type: String,
            default: undefined
        },
        unmaskIcon: {
            type: String,
            default: undefined
        },
        variant: {
            type: String,
            default: null
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        },
        fluid: {
            type: Boolean,
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
        inputProps: {
            type: null,
            default: null
        },
        panelId: {
            type: String,
            default: null
        },
        panelClass: {
            type: [String, Object],
            default: null
        },
        panelStyle: {
            type: Object,
            default: null
        },
        panelProps: {
            type: null,
            default: null
        },
        overlayId: {
            type: String,
            default: null
        },
        overlayClass: {
            type: [String, Object],
            default: null
        },
        overlayStyle: {
            type: Object,
            default: null
        },
        overlayProps: {
            type: null,
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
    style: PasswordStyle,
    provide() {
        return {
            $pcPassword: this,
            $parentInstance: this
        };
    }
};
</script>
