/**
 *
 * @module confirmationeventbus
 *
 */
import type { ConfirmationOptions } from 'primevue/confirmationoptions';

/**
 * Confirmation EventBus methods.
 *
 * @group Model
 *
 */
export interface ConfirmationEventBusOptions {
    /**
     * Registers a handler for the 'confirm' event.
     */
    on(type: 'confirm', handler: (options: ConfirmationOptions) => void): void;
    /**
     * Registers a handler for the 'close' event.
     */
    on(type: 'close', handler: () => void): void;
    /**
     * Removes a handler for the 'confirm' event.
     */
    off(type: 'confirm', handler: (options: ConfirmationOptions) => void): void;
    /**
     * Removes a handler for the 'close' event.
     */
    off(type: 'close', handler: () => void): void;
    /**
     * Emits a 'confirm' event with the given options.
     */
    emit(type: 'confirm', options: ConfirmationOptions): void;
    /**
     * Emits a 'close' event.
     */
    emit(type: 'close'): void;
    /**
     * Removes all handlers.
     */
    clear(): void;
}

declare const ConfirmationEventBus: ConfirmationEventBusOptions;

export default ConfirmationEventBus;
