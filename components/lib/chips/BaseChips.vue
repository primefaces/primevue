<script>
import BaseComponent from 'primevue/basecomponent';
import ChipsStyle from 'primevue/chips/style';

export default {
    name: 'BaseChips',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Array,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        separator: {
            type: [String, Object],
            default: null
        },
        addOnBlur: {
            type: Boolean,
            default: null
        },
        allowDuplicate: {
            type: Boolean,
            default: true
        },
        placeholder: {
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
        removeTokenIcon: {
            type: String,
            default: undefined
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
    style: ChipsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
