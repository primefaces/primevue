<script>
import BaseComponent from '@primevue/core/basecomponent';
import StepperStyle from 'primevue/stepper/style';

export default {
    name: 'BaseStepper',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        linear: {
            type: Boolean,
            default: false
        }
    },
    style: StepperStyle,
    provide() {
        return {
            $pcStepper: this,
            $parentInstance: this
        };
    }
};
</script>
