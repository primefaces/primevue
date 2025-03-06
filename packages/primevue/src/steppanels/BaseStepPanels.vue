<script>
import BaseComponent from '@primevue/core/basecomponent';
import StepPanelsStyle from 'primevue-vaultic/steppanels/style';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
