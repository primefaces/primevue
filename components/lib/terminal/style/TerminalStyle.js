import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-terminal p-component',
    content: 'p-terminal-commands-container',
    prompt: 'p-terminal-prompt',
    command: 'p-terminal-command-value',
    response: 'p-terminal-command-response',
    container: 'p-terminal-prompt-container',
    commandText: 'p-terminal-input'
};

export default BaseStyle.extend({
    name: 'terminal',
    classes
});
