/**
 * Confirmation Service methods.
 *
 * @group Interfaces
 *
 */
export interface TerminalServiceOptions {
    on: (action: 'command' | 'response' | undefined, fn: any) => void;
    emit: (action: 'command' | 'response' | undefined, params?: any) => void;
    off: (action: 'command' | 'response' | undefined, fn: any) => void;
}

declare const TerminalService: TerminalServiceOptions;

/**
 * [Live Demo](https://www.primevue.org/terminal/)
 *
 * @module terminalservice
 *
 */
export default TerminalService;
