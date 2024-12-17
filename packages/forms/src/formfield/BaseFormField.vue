<script>
import BaseComponent from '@primevue/core/basecomponent';
import FormFieldStyle from '@primevue/forms/formfield/style';

export default {
    name: 'BaseFormField',
    extends: BaseComponent,
    style: FormFieldStyle,
    props: {
        name: {
            type: String,
            default: undefined
        },
        resolver: {
            type: Function,
            default: undefined
        },
        initialValue: {
            type: null,
            default: undefined
        },
        validateOnValueUpdate: {
            type: Boolean,
            default: undefined
        },
        validateOnBlur: {
            type: Boolean,
            default: undefined
        },
        validateOnMount: {
            type: Boolean,
            default: undefined
        },
        validateOnSubmit: {
            type: Boolean,
            default: undefined
        },
        as: {
            type: [String, Object],
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    provide() {
        return {
            $pcFormField: this,
            $parentInstance: this
        };
    }
};
</script>
