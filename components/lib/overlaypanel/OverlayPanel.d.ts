/**
 *
 * OverlayPanel is a container component positioned as connected to its target.
 *
 * [Live Demo](https://primevue.org/overlaypanel)
 *
 * @module overlaypanel
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * OverlayPanel breakpoint metadata.
 */
export interface OverlayPanelBreakpoints {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <OverlayPanel :breakpoints="{'960px': '75vw', '640px': '100vw'}" ... />
     *
     * Result:
     *
     * @media screen and (max-width: ${breakpoint[key]}) {
     *      .p-overlaypanel[attributeSelector] {
     *          width: ${breakpoint[value]} !important;
     *      }
     * }
     */
    [key: string]: string;
}

/**
 * Defines valid properties in OverlayPanel component.
 */
export interface OverlayPanelProps {
    /**
     * Enables to hide the overlay when outside is clicked.
     * @defaultValue true
     */
    dismissable?: boolean;
    /**
     * When enabled, displays a close icon at top right corner.
     * @defaultValue false
     */
    showCloseIcon?: boolean;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean;
    /**
     * Object literal to define widths per screen size.
     */
    breakpoints?: OverlayPanelBreakpoints;
}

/**
 * Defines valid slots in OverlayPanel component.
 */
export interface OverlayPanelSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in OverlayPanel component.
 */
export interface OverlayPanelEmits {
    /**
     * Callback to invoke when the overlay is shown.
     */
    show(): void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    hide(): void;
}

/**
 * **PrimeVue - OverlayPanel**
 *
 * _OverlayPanel, also known as Popover, is a container component that can overlay other components on page._
 *
 * [Live Demo](https://www.primevue.org/overlaypanel/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class OverlayPanel extends ClassComponent<OverlayPanelProps, OverlayPanelSlots, OverlayPanelEmits> {
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

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        OverlayPanel: GlobalComponentConstructor<OverlayPanel>;
    }
}

export default OverlayPanel;
