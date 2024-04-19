<script>
import BaseComponent from 'primevue/basecomponent';
import TabPanelsStyle from 'primevue/tabpanels/style';

export default {
    name: 'BaseTabPanels',
    extends: BaseComponent,
    props: {},
    style: TabPanelsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
