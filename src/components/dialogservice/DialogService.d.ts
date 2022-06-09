import { Plugin } from 'vue';
import { DynamicDialogOptions } from '../dynamicdialogoptions';

declare const plugin: Plugin;
export default plugin;

export interface DialogServiceMethods {
    /**
     * Displays the dialog using the dialog object options.
     * @param {DynamicDialogOptions} options - Dialog Object
     */
    open: (dialog: DynamicDialogOptions) => void;
    /**
     * Hides the dialog.
     */
    close: () => void;
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
