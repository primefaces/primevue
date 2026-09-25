/**
 *
 * [Live Demo](https://www.primevue.org/toast/)
 *
 * @module toastservice-usetoast
 * @todo 'use' is not a valid name for a module. Next release will change.
 */
import type { ToastMessageOptions } from 'primevue/toast';
import type { App } from 'vue';

export type ToastServiceOptions = Partial<ToastMessageOptions>;

declare const plugin: {
    install(app: App, options?: ToastServiceOptions): void;
};

export default plugin;

/**
 * Toast Service methods.
 *
 * @group Model
 *
 */
export interface ToastServiceMethods {
    /**
     * Displays the message in a suitable Toast component.
     * @param {ToastMessageOptions} message - Message instance.
     */
    add(message: ToastMessageOptions): void;
    /**
     * Clears the message.
     * @param {ToastMessageOptions} message - Message instance.
     */
    remove(message: ToastMessageOptions): void;
    /**
     * Clears the messages that belongs to the group.
     * @param {string} group - Name of the message group.
     */
    removeGroup(group: string): void;
    /**
     * Clears all the messages.
     */
    removeAllGroups(): void;
    /**
     * Sets default options for the toast service.
     * @param {ToastServiceOptions} opts - Options to merge with defaults.
     */
    setOptions(opts: ToastServiceOptions): void;
    /**
     * Returns the current default options.
     */
    getOptions(): ToastServiceOptions;
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $toast: ToastServiceMethods;
    }
}
