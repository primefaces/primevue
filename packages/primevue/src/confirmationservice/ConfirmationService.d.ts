/**
 *
 * [Live Demo](https://www.primevue.org/confirmdialog/)
 *
 * @module confirmationservice-useconfirm
 *
 */
import type { ConfirmationOptions } from 'primevue/confirmationoptions';
import { Plugin } from 'vue';

declare const plugin: Plugin;
export default plugin;

/**
 * Confirmation Service methods.
 * @group Model
 */
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

declare module 'vue' {
    interface ComponentCustomProperties {
        $confirm: ConfirmationServiceMethods;
    }
}
