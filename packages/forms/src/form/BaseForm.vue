<script>
import BaseComponent from '@primevue/core/basecomponent';
import FormStyle from '@primevue/forms/form/style';

export default {
    name: 'BaseForm',
    extends: BaseComponent,
    style: FormStyle,
    props: {
        resolver: {
            type: Function,
            default: null
        },
        initialValues: {
            type: Object,
            default: null
        },
        validateOnValueUpdate: {
            type: [Boolean, Array],
            default: true
        },
        validateOnBlur: {
            type: [Boolean, Array],
            default: false
        },
        validateOnMount: {
            type: [Boolean, Array],
            default: false
        },
        validateOnSubmit: {
            type: [Boolean, Array],
            default: true
        }
    },
    provide() {
        return {
            $pcForm: this,
            $parentInstance: this
        };
    }
};
</script>
