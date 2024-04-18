/**
 *
 * OverlayPanel is a container component positioned as connected to its target.
 *
 * [Live Demo](https://primevue.org/popover)
 *
 * @module overlaypanel
 *
 */
import 'vue';
import * as Popover from '../popover';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom passthrough(pt) option method.
 */
export interface OverlayPanelPassThroughMethodOptions extends Popover.PopoverPassThroughMethodOptions {}

/**
 * Custom passthrough(pt) options.
 * @see {@link OverlayPanelProps.pt}
 */
export interface OverlayPanelPassThroughOptions extends Popover.PopoverPassThroughOptions {}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface OverlayPanelPassThroughAttributes extends Popover.PopoverPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in OverlayPanel component.
 */
export interface OverlayPanelState extends Popover.PopoverState {}

/**
 * OverlayPanel breakpoint metadata.
 */
export interface OverlayPanelBreakpoints extends Popover.PopoverBreakpoints {}

/**
 * Defines valid properties in OverlayPanel component.
 */
export interface OverlayPanelProps extends Popover.PopoverProps {}

/**
 * Defines valid slots in OverlayPanel component.
 */
export interface OverlayPanelSlots extends Popover.PopoverSlots {}

/**
 * Defines valid emits in OverlayPanel component.
 */
export interface OverlayPanelEmits extends Popover.PopoverEmits {}

/**
 * @deprecated Deprecated since v4. Use Popover component instead.
 *
 * **PrimeVue - OverlayPanel**
 *
 * _OverlayPanel, also known as Popover, is a container component that can overlay other components on page._
 *
 * [Live Demo](https://www.primevue.org/popover/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class OverlayPanel extends ClassComponent<OverlayPanelProps, OverlayPanelSlots, OverlayPanelEmits> {
    /**
     * Aligns overlay panel based on the current position of the container.
     */
    alignOverlay(): void;
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event.
     * @param {*} [target] - Optional target if event.currentTarget should not be used.
     *
     * @memberof OverlayPanel
     */
    toggle(event: Event, target?: any): void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event.
     * @param {*} [target] - Optional target if event.currentTarget should not be used.
     *
     * @memberof OverlayPanel
     */
    show(event: Event, target?: any): void;
    /**
     * Hides the overlay.
     *
     * @memberof OverlayPanel
     */
    hide(): void;
}

declare module 'vue' {
    export interface GlobalComponents {
        OverlayPanel: GlobalComponentConstructor<OverlayPanel>;
    }
}

export default OverlayPanel;
