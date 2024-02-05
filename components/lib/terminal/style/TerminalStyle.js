import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-terminal p-component',
    content: 'p-terminal-content',
    prompt: 'p-terminal-prompt',
    command: 'p-terminal-command',
    response: 'p-terminal-response',
    container: 'p-terminal-prompt-container',
    commandText: 'p-terminal-input'
};

export default BaseStyle.extend({
    name: 'terminal',
    classes
});
