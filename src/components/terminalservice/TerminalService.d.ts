type TerminalServiceActionType = 'command' | 'response';

export interface TerminalServiceOptions {
    on(action: TerminalServiceActionType, fn: any): void;
    emit(action: TerminalServiceActionType, params?: any): void;
    off(action: TerminalServiceActionType, fn: any): void;
}

declare const TerminalService: TerminalServiceOptions;

export default TerminalService;
