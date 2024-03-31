/**
 *
 * OverlayPanel is a container component positioned as connected to its target.
 *
 * [Live Demo](https://primevue.org/overlaypanel)
 *
 * @module overlaypanel
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough, HintedString } from '../ts-helpers';

export declare type OverlayPanelPassThroughOptionType = OverlayPanelPassThroughAttributes | ((options: OverlayPanelPassThroughMethodOptions) => OverlayPanelPassThroughAttributes | string) | string | null | undefined;

export declare type OverlayPanelPassThroughTransitionType = TransitionProps | ((options: OverlayPanelPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface OverlayPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: OverlayPanelProps;
    /**
     * Defines current inline state.
     */
    state: OverlayPanelState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link OverlayPanelProps.pt}
 */
export interface OverlayPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OverlayPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: OverlayPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the close button's DOM element.
     */
    closeButton?: OverlayPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the close icon's DOM element.
     */
    closeIcon?: OverlayPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: OverlayPanelPassThroughTransitionType;
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
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {OverlayPanelPassThroughOptions}
     */
    pt?: PassThrough<OverlayPanelPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @defaultValue true
     */
    closeOnEscape?: boolean | undefined;
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
    /**
     * Custom container slot.
     * @param {Object} scope - container slot's params.
     */
    container(scope: {
        /**
         * Close overlay panel function.
         * @deprecated since v3.39.0. Use 'closeCallback' property instead.
         */
        onClose: () => void;
        /**
         * Close button keydown function.
         * @param {Event} event - Browser event
         * @deprecated since v3.39.0. Use 'keydownCallback' property instead.
         */
        onKeydown: (event: Event) => void;
        /**
         * Close overlay panel function.
         */
        closeCallback: () => void;
        /**
         * Close button keydown function.
         * @param {Event} event - Browser event
         */
        keydownCallback: (event: Event) => void;
    }): VNode[];
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
