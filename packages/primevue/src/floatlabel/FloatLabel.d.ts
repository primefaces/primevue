/**
 *
 * FloatLabel visually integrates a label with its form element.
 *
 * [Live Demo](https://www.primevue.org/floatlabel/)
 *
 * @module floatlabel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type FloatLabelPassThroughOptionType = FloatLabelPassThroughAttributes | ((options: FloatLabelPassThroughMethodOptions) => FloatLabelPassThroughAttributes | string) | string | null | undefined;

export declare type FloatLabelPassThroughTransitionType = TransitionProps | ((options: FloatLabelPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FloatLabelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FloatLabelProps;
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
 * @see {@link FloatLabelProps.pt}
 */
export interface FloatLabelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FloatLabelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FloatLabelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in FloatLabel component.
 */
export interface FloatLabelProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FloatLabelPassThroughOptions}
     */
    pt?: PassThrough<FloatLabelPassThroughOptions>;
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
     * Defines the positioning of the label relative to the input.
     * @defaultValue false
     */
    variant?: 'over' | 'in' | 'on' | undefined;
}

/**
 * Defines valid slots in FloatLabel component.
 */
export interface FloatLabelSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

/**
 * Defines valid emits in FloatLabel component.
 */
export interface FloatLabelEmitsOptions {}

export declare type FloatLabelEmits = EmitFn<FloatLabelEmitsOptions>;

/**
 * **PrimeVue - FloatLabel**
 *
 * _FloatLabel visually integrates a label with its form element._
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const FloatLabel: DefineComponent<FloatLabelProps, FloatLabelSlots, FloatLabelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        FloatLabel: DefineComponent<FloatLabelProps, FloatLabelSlots, FloatLabelEmits>;
    }
}

export default FloatLabel;
