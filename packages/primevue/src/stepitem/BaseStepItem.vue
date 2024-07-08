<script>
import BaseComponent from '@primevue/core/basecomponent';
import StepItemStyle from 'primevue/stepitem/style';

export default {
    name: 'BaseStepItem',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        }
    },
    style: StepItemStyle,
    provide() {
        return {
            $pcStepItem: this,
            $parentInstance: this
        };
    }
};
</script>
