export interface CustomizerOptions {
    key?: string | undefined;
    to?: object | undefined;
    from?: object | undefined;
    value?: any;
}

export interface usePassThroughOptions {
    merge?: boolean | undefined;
    useMergeProps?: boolean | undefined;
    ignoredKeysOnMerge?: string[] | undefined;
    customizer?: ((options?: CustomizerOptions) => any) | undefined;
}

export declare function usePassThrough(pt1: object, pt2: object, options?: usePassThroughOptions): object;
