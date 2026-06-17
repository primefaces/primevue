/**
 *
 * @module dynamicdialogeventbus
 *
 */
import type { DynamicDialogInstance } from 'primevue/dynamicdialogoptions';

/**
 * Event payload for the 'open' event.
 *
 * @group Model
 *
 */
export interface DynamicDialogEventBusOpenEvent {
    /**
     * The dialog instance being opened.
     */
    instance: DynamicDialogInstance;
}

/**
 * Event payload for the 'close' event.
 *
 * @group Model
 *
 */
export interface DynamicDialogEventBusCloseEvent {
    /**
     * The dialog instance being closed.
     */
    instance: DynamicDialogInstance;
    /**
     * Optional parameters passed to the close method.
     */
    params?: any;
}

/**
 * DynamicDialog EventBus methods.
 *
 * @group Model
 *
 */
export interface DynamicDialogEventBusOptions {
    /**
     * Registers a handler for the 'open' event.
     */
    on(type: 'open', handler: (event: DynamicDialogEventBusOpenEvent) => void): void;
    /**
     * Registers a handler for the 'close' event.
     */
    on(type: 'close', handler: (event: DynamicDialogEventBusCloseEvent) => void): void;
    /**
     * Removes a handler for the 'open' event.
     */
    off(type: 'open', handler: (event: DynamicDialogEventBusOpenEvent) => void): void;
    /**
     * Removes a handler for the 'close' event.
     */
    off(type: 'close', handler: (event: DynamicDialogEventBusCloseEvent) => void): void;
    /**
     * Emits an 'open' event with the given event payload.
     */
    emit(type: 'open', event: DynamicDialogEventBusOpenEvent): void;
    /**
     * Emits a 'close' event with the given event payload.
     */
    emit(type: 'close', event: DynamicDialogEventBusCloseEvent): void;
    /**
     * Removes all handlers.
     */
    clear(): void;
}

declare const DynamicDialogEventBus: DynamicDialogEventBusOptions;

export default DynamicDialogEventBus;
