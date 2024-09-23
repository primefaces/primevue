/**
 *
 * Popover is a container component positioned as connected to its target.
 *
 * [Live Demo](https://primevue.org/popover)
 *
 * @module popover
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type PopoverPassThroughOptionType = PopoverPassThroughAttributes | ((options: PopoverPassThroughMethodOptions) => PopoverPassThroughAttributes | string) | string | null | undefined;

export declare type PopoverPassThroughTransitionType = TransitionProps | ((options: PopoverPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface PopoverPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: PopoverProps;
    /**
     * Defines current inline state.
     */
    state: PopoverState;
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
 * @see {@link PopoverProps.pt}
 */
export interface PopoverPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PopoverPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: PopoverPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface PopoverPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Popover component.
 */
export interface PopoverState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
}

/**
 * Popover breakpoint metadata.
 */
export interface PopoverBreakpoints {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <Popover :breakpoints="{'960px': '75vw', '640px': '100vw'}" ... />
     *
     * Result:
     *
     * @media screen and (max-width: ${breakpoint[key]}) {
     *      .p-popover[attributeSelector] {
     *          width: ${breakpoint[value]} !important;
     *      }
     * }
     */
    [key: string]: string;
}

/**
 * Defines valid properties in Popover component.
 */
export interface PopoverProps {
    /**
     * Enables to hide the overlay when outside is clicked.
     * @defaultValue true
     */
    dismissable?: boolean;
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
    breakpoints?: PopoverBreakpoints;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {PopoverPassThroughOptions}
     */
    pt?: PassThrough<PopoverPassThroughOptions>;
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
 * Defines valid slots in Popover component.
 */
export interface PopoverSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom container slot.
     * @param {Object} scope - container slot's params.
     */
    container(scope: {
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
 * Defines valid emits in Popover component.
 */
export interface PopoverEmitsOptions {
    /**
     * Callback to invoke when the overlay is shown.
     */
    show(): void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    hide(): void;
}

export declare type PopoverEmits = EmitFn<PopoverEmitsOptions>;

export interface PopoverMethods {
    /**
     * Aligns overlay panel based on the current position of the container.
     */
    alignOverlay(): void;
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event.
     * @param {*} [target] - Optional target if event.currentTarget should not be used.
     *
     * @memberof Popover
     */
    toggle(event: Event, target?: any): void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event.
     * @param {*} [target] - Optional target if event.currentTarget should not be used.
     *
     * @memberof Popover
     */
    show(event: Event, target?: any): void;
    /**
     * Hides the overlay.
     *
     * @memberof Popover
     */
    hide(): void;
}

/**
 * **PrimeVue - Popover**
 *
 * _Popover is a container component that can overlay other components on page._
 *
 * [Live Demo](https://www.primevue.org/popover/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Popover: DefineComponent<PopoverProps, PopoverSlots, PopoverEmits, PopoverMethods>;

declare module 'vue' {
    export interface GlobalComponents {
        Popover: GlobalComponentConstructor<PopoverProps, PopoverSlots, PopoverEmits, PopoverMethods>;
    }
}

export default Popover;
