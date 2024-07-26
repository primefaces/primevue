export * from '@primeuix/utils';

export declare class ConnectedOverlayScrollHandler {
    constructor(element: any, listener?: () => void);
    bindScrollListener(): void;
    unbindScrollListener(): void;
    destroy(): void;
}

export declare class HelperSet {
    constructor(options: { init?: any; type?: string });
    add(instance: any): void;
    update(): void;
    delete(instance: any): void;
    clear(): void;
    get(parentInstance?: any, slots?: any): any[] | null | undefined;
}

export declare function UniqueComponentId(prefix?: string): string;
