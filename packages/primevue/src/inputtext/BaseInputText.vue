<script>
import BaseComponent from '@primevue/core/basecomponent';
import InputTextStyle from 'primevue/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseComponent,
    props: {
        modelValue: null,
        size: {
            type: String,
            default: null
        },
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: null
        }
    },
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>
