<script>
import BaseComponent from 'primevue/basecomponent';
import StepperPanelStyle from 'primevue/stepperpanel/style';

export default {
    name: 'BaseStepperPanel',
    extends: BaseComponent,
    props: {
        header: null
    },
    style: StepperPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
