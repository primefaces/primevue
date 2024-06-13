/**
 *
 * [Live Demo](https://www.primevue.org/dynamicdialog/)
 *
 * @module dialogservice-usedialog
 */
import type { DynamicDialogInstance, DynamicDialogOptions } from 'primevue/dynamicdialogoptions';
import { Plugin } from 'vue';

declare const plugin: Plugin;
export default plugin;

/**
 * Dynamic Dialog components methods.
 *
 * @group Model
 *
 */
export interface DialogServiceMethods {
    /**
     * Displays the dialog using the dynamic dialog object options.
     * @param {*} content - Dynamic component for content template
     * @param {DynamicDialogOptions} options - DynamicDialog Object
     * @return {@link DynamicDialogInstance}
     */
    open(content: any, options?: DynamicDialogOptions): DynamicDialogInstance;
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
