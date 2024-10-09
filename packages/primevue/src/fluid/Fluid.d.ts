/**
 *
 * Fluid is a layout component to make descendant components span full width of their container.
 *
 * [Live Demo](https://www.primevue.org/fluid/)
 *
 * @module fluid
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type FluidPassThroughOptionType = FluidPassThroughAttributes | ((options: FluidPassThroughMethodOptions) => FluidPassThroughAttributes | string) | string | null | undefined;

export declare type FluidPassThroughTransitionType = TransitionProps | ((options: FluidPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FluidPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FluidProps;
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
 * @see {@link FluidProps.pt}
 */
export interface FluidPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FluidPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FluidPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Fluid component.
 */
export interface FluidProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FluidPassThroughOptions}
     */
    pt?: PassThrough<FluidPassThroughOptions>;
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
 * Defines valid slots in Fluid component.
 */
export interface FluidSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

/**
 * Defines valid emits in Fluid component.
 */
export interface FluidEmitsOptions {}

export declare type FluidEmits = EmitFn<FluidEmitsOptions>;

/**
 * **PrimeVue - Fluid**
 *
 * _Fluid is a layout component to make descendant components span full width of their container._
 *
 * [Live Demo](https://www.primevue.org/fluid/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Fluid: DefineComponent<FluidProps, FluidSlots, FluidEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Fluid: DefineComponent<FluidProps, FluidSlots, FluidEmits>;
    }
}

export default Fluid;
