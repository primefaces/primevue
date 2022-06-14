import { VNode } from 'vue';
import { DynamicDialogOptions, DynamicDialogInstance } from '../dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: VNode, options?: DynamicDialogOptions) => DynamicDialogInstance;
}
