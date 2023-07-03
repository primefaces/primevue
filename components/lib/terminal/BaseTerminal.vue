<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-terminal {
    height: 18rem;
    overflow: auto;
}

.p-terminal-prompt-container {
    display: flex;
    align-items: center;
}

.p-terminal-input {
    flex: 1 1 auto;
    border: 0 none;
    background-color: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
}

.p-terminal-input::-ms-clear {
    display: none;
}
`;

const classes = {
    root: 'p-terminal p-component',
    content: 'p-terminal-content',
    prompt: 'p-terminal-prompt',
    command: 'p-terminal-command',
    response: 'p-terminal-response',
    container: 'p-terminal-prompt-container',
    commandText: 'p-terminal-input'
};

const { load: loadStyle } = useStyle(styles, { name: 'terminal', manual: true });

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
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
