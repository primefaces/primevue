/**
 *
 * @module overlayeventbus
 *
 */

/**
 * Event payload for the 'overlay-click' event.
 *
 * @group Model
 *
 */
export interface OverlayEventBusClickEvent {
    /**
     * The original browser event.
     */
    originalEvent: Event;
    /**
     * The target element of the overlay.
     */
    target: HTMLElement;
}

/**
 * Overlay EventBus methods.
 *
 * @group Model
 *
 */
export interface OverlayEventBusOptions {
    /**
     * Registers a handler for the 'overlay-click' event.
     */
    on(type: 'overlay-click', handler: (event: OverlayEventBusClickEvent) => void): void;
    /**
     * Removes a handler for the 'overlay-click' event.
     */
    off(type: 'overlay-click', handler: (event: OverlayEventBusClickEvent) => void): void;
    /**
     * Emits an 'overlay-click' event with the given event payload.
     */
    emit(type: 'overlay-click', event: OverlayEventBusClickEvent): void;
    /**
     * Removes all handlers.
     */
    clear(): void;
}

declare const OverlayEventBus: OverlayEventBusOptions;

export default OverlayEventBus;
