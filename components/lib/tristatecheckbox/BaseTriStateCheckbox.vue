<script>
import BaseComponent from 'primevue/basecomponent';
import TriStateCheckboxStyle from 'primevue/tristatecheckbox/style';

export default {
    name: 'BaseTriStateCheckbox',
    extends: BaseComponent,
    props: {
        modelValue: null,
        inputId: {
            type: String,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
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
    style: TriStateCheckboxStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
