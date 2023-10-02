<script>
import BaseComponent from 'primevue/basecomponent';
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
            $parentInstance: this
        };
    }
};
</script>
