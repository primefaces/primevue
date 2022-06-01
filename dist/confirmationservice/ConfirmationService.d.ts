import Vue, { Plugin } from 'vue';
import { ConfirmationOptions } from '../confirmationoptions';

declare const plugin: Plugin;
export default plugin;

export interface ConfirmationServiceMethods {
    /**
     * Displays the dialog using the confirmation object options.
     * @param {ConfirmationOptions} options - Confirmation Object
     */
    require(options: ConfirmationOptions): void;
    /**
     * Hides the dialog without invoking accept or reject callbacks.
     */
    close(): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $confirm: ConfirmationServiceMethods;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $confirm: ConfirmationServiceMethods;
    }
}
