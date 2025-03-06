<script>
import BaseComponent from '@primevue/core/basecomponent';
import DynamicDialogStyle from 'primevue-vaultic/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $pcDynamicDialog: this,
            $parentInstance: this
        };
    }
};
</script>
