<script>
import BaseComponent from 'primevue/basecomponent';
import ToolbarStyle from 'primevue/toolbar/style';

export default {
    name: 'BaseToolbar',
    extends: BaseComponent,
    props: {
        'aria-labelledby': {
            type: String,
            default: null
        }
    },
    style: ToolbarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
