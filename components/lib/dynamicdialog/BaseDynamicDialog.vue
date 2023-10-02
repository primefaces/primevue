<script>
import BaseComponent from 'primevue/basecomponent';
import DynamicDialogStyle from 'primevue/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
