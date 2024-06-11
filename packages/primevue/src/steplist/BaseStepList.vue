<script>
import BaseComponent from '@primevue/core/basecomponent';
import StepListStyle from 'primevue/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        }
    },
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
