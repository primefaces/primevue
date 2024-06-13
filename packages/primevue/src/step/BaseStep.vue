<script>
import BaseComponent from '@primevue/core/basecomponent';
import StepStyle from 'primevue/step/style';

export default {
    name: 'BaseStep',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        asChild: {
            type: Boolean,
            default: false
        },
        as: {
            type: String,
            default: 'DIV'
        }
    },
    style: StepStyle,
    provide() {
        return {
            $pcStep: this,
            $parentInstance: this
        };
    }
};
</script>
