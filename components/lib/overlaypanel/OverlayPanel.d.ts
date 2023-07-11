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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type OverlayPanelPassThroughOptionType = OverlayPanelPassThroughAttributes | ((options: OverlayPanelPassThroughMethodOptions) => OverlayPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface OverlayPanelPassThroughMethodOptions {
    instance: any;
    props: OverlayPanelProps;
    state: OverlayPanelState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link OverlayPanelProps.pt}
 */
export interface OverlayPanelPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: OverlayPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: OverlayPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the close button's DOM element.
     */
    closeButton?: OverlayPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the close icon's DOM element.
     */
    closeIcon?: OverlayPanelPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface OverlayPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in OverlayPanel component.
 */
export interface OverlayPanelState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
}

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
    /**
     * Icon to display in the overlaypanel close button.
     * @deprecated since v3.27.0. Use 'closeicon' slot.
     */
    closeIcon?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {OverlayPanelPassThroughOptions}
     */
    pt?: OverlayPanelPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in OverlayPanel component.
 */
export interface OverlayPanelSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom close icon template.
     */
    closeicon(): VNode[];
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
