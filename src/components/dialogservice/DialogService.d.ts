import { Plugin, VNode } from 'vue';
import { DynamicDialogOptions } from '../dynamicdialogoptions';

declare const plugin: Plugin;
export default plugin;

export interface DialogInstance {
    /**
     * Dynamic component for content template
     */
    content: VNode | undefined;
    /**
     * Instance options
     * @see DynamicDialogOptions
     */
    options: DynamicDialogOptions;
    /**
     * Custom data object
     */
    data: any;
    /**
     * Hides the dialog.
     * @param {*} params - Parameters sent by the user to the root instance
     */
    hide: (params?: any) => void;
}

export interface DialogServiceMethods {
    /**
     * Displays the dialog using the dynamic dialog object options.
     * @param {VNode} content - Dynamic component for content template
     * @param {DynamicDialogOptions} options - DynamicDialog Object
     */
    open(content: VNode, options?: DynamicDialogOptions): DialogInstance;
}

declare module 'vue/types/vue' {
    interface Vue {
        $dialog: DialogServiceMethods;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $dialog: DialogServiceMethods;
    }
}
