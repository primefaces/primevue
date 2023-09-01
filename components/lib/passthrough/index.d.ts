export interface usePassThroughOptions {
    mergeSections?: boolean | undefined;
    mergeProps?: boolean | undefined;
}

export declare function usePassThrough(pt1: object, pt2: object, options?: usePassThroughOptions): object;
