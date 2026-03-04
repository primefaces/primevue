/**
 *
 * [Live Demo](https://www.primevue.org/toast/)
 *
 * @module toasteventbus
 *
 */
import type { ToastMessageOptions } from 'primevue/toast';

/**
 * Toast EventBus methods.
 *
 * @group Model
 *
 */
export interface ToastEventBusOptions {
    /**
     * Registers a handler for the 'add' event.
     */
    on(type: 'add', handler: (message: ToastMessageOptions) => void): void;
    /**
     * Registers a handler for the 'remove' event.
     */
    on(type: 'remove', handler: (message: ToastMessageOptions) => void): void;
    /**
     * Registers a handler for the 'remove-group' event.
     */
    on(type: 'remove-group', handler: (group: string) => void): void;
    /**
     * Registers a handler for the 'remove-all-groups' event.
     */
    on(type: 'remove-all-groups', handler: () => void): void;
    /**
     * Removes a handler for the 'add' event.
     */
    off(type: 'add', handler: (message: ToastMessageOptions) => void): void;
    /**
     * Removes a handler for the 'remove' event.
     */
    off(type: 'remove', handler: (message: ToastMessageOptions) => void): void;
    /**
     * Removes a handler for the 'remove-group' event.
     */
    off(type: 'remove-group', handler: (group: string) => void): void;
    /**
     * Removes a handler for the 'remove-all-groups' event.
     */
    off(type: 'remove-all-groups', handler: () => void): void;
    /**
     * Emits an 'add' event with the given message.
     */
    emit(type: 'add', message: ToastMessageOptions): void;
    /**
     * Emits a 'remove' event with the given message.
     */
    emit(type: 'remove', message: ToastMessageOptions): void;
    /**
     * Emits a 'remove-group' event with the given group name.
     */
    emit(type: 'remove-group', group: string): void;
    /**
     * Emits a 'remove-all-groups' event.
     */
    emit(type: 'remove-all-groups'): void;
    /**
     * Removes all handlers.
     */
    clear(): void;
}

declare const ToastEventBus: ToastEventBusOptions;

export default ToastEventBus;
