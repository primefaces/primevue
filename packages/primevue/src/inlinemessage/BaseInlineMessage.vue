<script>
import BaseComponent from '@primevue/core/basecomponent';
import InlineMessageStyle from 'primevue/inlinemessage/style';

export default {
    name: 'BaseInlineMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    style: InlineMessageStyle,
    provide() {
        return {
            $pcInlineMessage: this,
            $parentInstance: this
        };
    }
};
</script>
