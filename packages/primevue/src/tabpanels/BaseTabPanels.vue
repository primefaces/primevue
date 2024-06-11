<script>
import BaseComponent from '@primevue/core/basecomponent';
import TabPanelsStyle from 'primevue/tabpanels/style';

export default {
    name: 'BaseTabPanels',
    extends: BaseComponent,
    props: {},
    style: TabPanelsStyle,
    provide() {
        return {
            $pcTabPanels: this,
            $parentInstance: this
        };
    }
};
</script>
