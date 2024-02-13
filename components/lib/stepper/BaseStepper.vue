<script>
import BaseComponent from 'primevue/basecomponent';
import StepperStyle from 'primevue/stepper/style';

export default {
    name: 'BaseStepper',
    extends: BaseComponent,
    props: {
        activeStep: {
            type: Number,
            default: 0
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        linear: {
            type: Boolean,
            default: false
        }
    },
    style: StepperStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
