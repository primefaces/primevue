export interface usePassThroughOptions {
    merge?: boolean | undefined;
    useMergeProps?: boolean | undefined;
}

export declare function usePassThrough(pt1: object, pt2: object, options?: usePassThroughOptions): object;
