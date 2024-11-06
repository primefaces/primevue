/**
 * From primevue/passthrough/index.d.ts
 */
export declare type PassThroughMergePropsType = ((...args: any) => object | undefined) | boolean | undefined;

export interface PassThroughOptions {
    mergeSections?: boolean | undefined;
    mergeProps?: PassThroughMergePropsType;
}
