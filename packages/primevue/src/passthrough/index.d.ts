export declare type PassThroughMergePropsType = ((...args: any) => object | undefined) | boolean | undefined;

export interface PassThroughOptions {
    mergeSections?: boolean | undefined;
    mergeProps?: PassThroughMergePropsType;
}

export declare function usePassThrough(pt1: object, pt2: object, options?: PassThroughOptions): object;
