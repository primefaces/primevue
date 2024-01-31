<script>
import BaseComponent from 'primevue/basecomponent';
import TextareaStyle from 'primevue/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseComponent,
    props: {
        modelValue: null,
        autoResize: Boolean,
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: 'outlined'
        }
    },
    style: TextareaStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
