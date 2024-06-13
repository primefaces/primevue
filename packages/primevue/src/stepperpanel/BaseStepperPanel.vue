<script>
import BaseComponent from '@primevue/core/basecomponent';
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
            $pcStepperPanel: this,
            $parentInstance: this
        };
    }
};
</script>
