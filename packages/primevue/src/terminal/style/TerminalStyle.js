import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-terminal {
    height: ${dt('terminal.height')};
    overflow: auto;
    background: ${dt('terminal.background')};
    color: ${dt('terminal.color')};
    border: 1px solid ${dt('terminal.border.color')};
    padding: ${dt('terminal.padding')};
    border-radius: ${dt('terminal.border.radius')};
}

.p-terminal-prompt {
    display: flex;
    align-items: center;
}

.p-terminal-prompt-value {
    flex: 1 1 auto;
    border: 0 none;
    background: transparent;
    color: inherit;
    padding: 0;
    outline: 0 none;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
}

.p-terminal-prompt-label {
    margin-right: ${dt('terminal.prompt.gap')};
}

.p-terminal-input::-ms-clear {
    display: none;
}

.p-terminal-command-response {
    margin: ${dt('terminal.command.response.margin')};
}
`;

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
    theme,
    classes
});
