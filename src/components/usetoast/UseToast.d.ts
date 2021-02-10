export declare function useToast(): {
    add(args:{ severity?: string, summary?: string, detail?: string, life?: number, closable?: boolean, group?: string }): void;
    removeGroup(group: string): void;
    removeAllGroups(): void;
}
