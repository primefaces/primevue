declare class TerminalService {
    $on(action: string, fn: any): any;
    $emit(action: string, params?: any): any;
    $off(action: string, id: number): void;
    $subscribed(action: string): boolean;
}

export default TerminalService;