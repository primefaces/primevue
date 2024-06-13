<script>
import BaseComponent from '@primevue/core/basecomponent';
import ColumnGroupStyle from 'primevue/columngroup/style';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $pcColumnGroup: this,
            $parentInstance: this
        };
    }
};
</script>
