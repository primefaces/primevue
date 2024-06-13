<script>
import BaseComponent from '@primevue/core/basecomponent';
import ToolbarStyle from 'primevue/toolbar/style';

export default {
    name: 'BaseToolbar',
    extends: BaseComponent,
    props: {
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: ToolbarStyle,
    provide() {
        return {
            $pcToolbar: this,
            $parentInstance: this
        };
    }
};
</script>
