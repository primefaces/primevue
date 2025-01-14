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

/**
 * @deprecated since v4.3.0. Use `uuid` from @primeuix/utils instead.
 * @param {string} prefix
 * @return {string}
 */
export declare function UniqueComponentId(prefix?: string): string;
