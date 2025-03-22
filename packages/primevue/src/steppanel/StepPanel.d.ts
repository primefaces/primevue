/**
 *
 * StepPanel is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module steppanel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { Component, VNode } from 'vue';

export declare type StepPanelPassThroughOptionType = StepPanelPassThroughAttributes | ((options: StepPanelPassThroughMethodOptions) => StepPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepPanelProps;
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
 * @see {@link StepPanelProps.pt}
 */
export interface StepPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the content DOM element.
     */
    content?: StepPanelPassThroughOptionType;
    /**
     * Used to control Vue Transition API.
     */
    transition?: StepPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface StepPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in StepPanel component.
 */
export interface StepPanelProps {
    /**
     * Value of step.
     */
    value?: string | number | undefined;
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue BUTTON
     */
    as?: string | Component | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepPanelPassThroughOptions}
     */
    pt?: PassThrough<StepPanelPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines valid slots in StepPanel slots.
 */
export interface StepPanelSlots {
    /**
     * Custom content template. Slot attributes can be used when asChild prop is true.
     */
    default(scope: {
        /**
         * Whether the step is active.
         */
        active: boolean;
        /**
         * Value of step.
         */
        value: string | number;
        /**
         * A11t attributes
         */
        a11yAttrs: any;
        /**
         * Click function.
         */
        activateCallback: (value: string | number) => void;
    }): VNode[];
}

export interface StepPanelEmitsOptions {}

export declare type StepPanelEmits = EmitFn<StepPanelEmitsOptions>;

/**
 * **PrimeVue - StepPanel**
 *
 * _StepPanel is a helper component for Stepper component._
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const StepPanel: DefineComponent<StepPanelProps, StepPanelSlots, StepPanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        StepPanel: DefineComponent<StepPanelProps, StepPanelSlots, StepPanelEmits>;
    }
}

export default StepPanel;
