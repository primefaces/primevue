/**
 *
 * ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.
 *
 * [Live Demo](https://www.primevue.org/scrolltop/)
 *
 * @module scrolltop
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions, ButtonProps } from 'primevue/button';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type ScrollTopPassThroughOptionType = ScrollTopPassThroughAttributes | ((options: ScrollTopPassThroughMethodOptions) => ScrollTopPassThroughAttributes | string) | string | null | undefined;

export declare type ScrollTopPassThroughTransitionType = TransitionProps | ((options: ScrollTopPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ScrollTopPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ScrollTopProps;
    /**
     * Defines current inline state.
     */
    state: ScrollTopState;
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
 * Custom shared passthrough(pt) option method.
 */
export interface ScrollTopSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: ScrollTopProps;
    /**
     * Defines current inline state.
     */
    state: ScrollTopState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ScrollTopProps.pt}
 */
export interface ScrollTopPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    root?: ButtonPassThroughOptions<ScrollTopSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: ScrollTopPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ScrollTopPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in ScrollTop component.
 */
export interface ScrollTopState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
}

/**
 * Defines valid properties in ScrollTop component.
 */
export interface ScrollTopProps {
    /**
     * Target of the ScrollTop.
     * @defaultValue window
     */
    target?: 'window' | 'parent' | undefined;
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * @defaultValue 400
     */
    threshold?: number | undefined;
    /**
     * Icon to display.
     */
    icon?: string | undefined;
    /**
     * Defines the scrolling behaviour, 'smooth' adds an animation and 'auto' scrolls with a jump.
     * @defaultValue smooth
     */
    behavior?: string | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the Button component.
     * @type {ButtonProps}
     * @defaultValue { rounded: true }
     */
    buttonProps?: object | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ScrollTopPassThroughOptions}
     */
    pt?: PassThrough<ScrollTopPassThroughOptions>;
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
}

/**
 * Defines valid slots in ScrollTop component.
 */
export interface ScrollTopSlots {
    /**
     * Custom scrolltop icon template.
     */
    icon(): VNode[];
}

/**
 * Defines valid emits in ScrollTop component.
 */
export interface ScrollTopEmitsOptions {}

export declare type ScrollTopEmits = EmitFn<ScrollTopEmitsOptions>;

/**
 * **PrimeVue - ScrollTop**
 *
 * _ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly._
 *
 * [Live Demo](https://www.primevue.org/scrolltop/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ScrollTop: DefineComponent<ScrollTopProps, ScrollTopSlots, ScrollTopEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ScrollTop: GlobalComponentConstructor<ScrollTopProps, ScrollTopSlots, ScrollTopEmits>;
    }
}

export default ScrollTop;
