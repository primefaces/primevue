/**
 *
 * StepPanels is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module steppanels
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../../../core/src/basecomponent';
import { PassThroughOptions } from '../passthrough';
import { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type StepPanelsPassThroughOptionType = StepPanelsPassThroughAttributes | ((options: StepPanelsPassThroughMethodOptions) => StepPanelsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepPanelsPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepPanelsProps;
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
 * @see {@link StepPanelsProps.pt}
 */
export interface StepPanelsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepPanelsPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface StepPanelsPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in StepPanels component.
 */
export interface StepPanelsProps {
    /**
     * Value of step.
     */
    value: string;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepPanelsPassThroughOptions}
     */
    pt?: PassThrough<StepPanelsPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines valid slots in StepPanels slots.
 */
export interface StepPanelsSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface StepPanelsEmitsOptions {}

export declare type StepPanelsEmits = EmitFn<StepPanelsEmitsOptions>;

/**
 * **PrimeVue - StepPanels**
 *
 * _StepPanels is a helper component for Stepper component._
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const StepPanels: DefineComponent<StepPanelsProps, StepPanelsSlots, StepPanelsEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        StepPanels: GlobalComponentConstructor<StepPanelsProps, StepPanelsSlots, StepPanelsEmits>;
    }
}

export default StepPanels;
