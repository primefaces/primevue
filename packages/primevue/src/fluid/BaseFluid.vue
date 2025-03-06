<script>
import BaseComponent from '@primevue/core/basecomponent';
import FluidStyle from 'primevue-vaultic/fluid/style';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
