/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primevue.org/terminal)
 *
 * @module terminalstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TerminalClasses {
    root = 'p-terminal',
    welcomeMessage = 'p-terminal-welcome-message',
    commandList = 'p-terminal-command-list',
    command = 'p-terminal-command',
    commandValue = 'p-terminal-command-value',
    commandResponse = 'p-terminal-command-response',
    prompt = 'p-terminal-prompt',
    promptLabel = 'p-terminal-prompt-label',
    promptValue = 'p-terminal-prompt-value'
}

export interface TerminalStyle extends BaseStyle {}
