import { style } from '@primeuix/styles/terminal';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-terminal p-component',
    welcomeMessage: 'p-terminal-welcome-message',
    commandList: 'p-terminal-command-list',
    command: 'p-terminal-command',
    commandValue: 'p-terminal-command-value',
    commandResponse: 'p-terminal-command-response',
    prompt: 'p-terminal-prompt',
    promptLabel: 'p-terminal-prompt-label',
    promptValue: 'p-terminal-prompt-value'
};

export default BaseStyle.extend({
    name: 'terminal',
    style,
    classes
});
