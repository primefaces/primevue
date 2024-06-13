<script>
import BaseComponent from '@primevue/core/basecomponent';
import TerminalStyle from 'primevue/terminal/style';

export default {
    name: 'BaseTerminal',
    extends: BaseComponent,
    props: {
        welcomeMessage: {
            type: String,
            default: null
        },
        prompt: {
            type: String,
            default: null
        }
    },
    style: TerminalStyle,
    provide() {
        return {
            $pcTerminal: this,
            $parentInstance: this
        };
    }
};
</script>
