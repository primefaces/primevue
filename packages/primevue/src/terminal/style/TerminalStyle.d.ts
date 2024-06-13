/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primevue.org/terminal)
 *
 * @module terminalstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TerminalClasses {
    /**
     * Class name of the root element
     */
    root = 'p-terminal',
    /**
     * Class name of the welcome message element
     */
    welcomeMessage = 'p-terminal-welcome-message',
    /**
     * Class name of the command list element
     */
    commandList = 'p-terminal-command-list',
    /**
     * Class name of the command element
     */
    command = 'p-terminal-command',
    /**
     * Class name of the command value element
     */
    commandValue = 'p-terminal-command-value',
    /**
     * Class name of the command response element
     */
    commandResponse = 'p-terminal-command-response',
    /**
     * Class name of the prompt element
     */
    prompt = 'p-terminal-prompt',
    /**
     * Class name of the prompt label element
     */
    promptLabel = 'p-terminal-prompt-label',
    /**
     * Class name of the prompt value element
     */
    promptValue = 'p-terminal-prompt-value'
}

export interface TerminalStyle extends BaseStyle {}
