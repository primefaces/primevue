<script>
import BaseComponent from 'primevue/basecomponent';
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
            $parentInstance: this
        };
    }
};
</script>
