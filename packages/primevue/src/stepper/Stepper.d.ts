/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module stepper
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type StepperPassThroughOptionType = StepperPassThroughAttributes | ((options: StepperPassThroughMethodOptions) => StepperPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepperPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepperProps;
    /**
     * Defines current inline state.
     */
    state: StepperState;
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
 * @see {@link StepperProps.pt}
 */
export interface StepperPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface StepperPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Stepper component.
 */
export interface StepperState {
    /**
     * Current active value state.
     */
    d_value: any;
    /**
     * Unique id for the Stepper component.
     */
    id: string;
}

/**
 * Defines valid properties in Stepper component.
 */
export interface StepperProps {
    /**
     * Active value of stepper.
     * @defaultValue null
     */
    value?: string | number | undefined;
    /**
     * Whether the steps are clickable or not.
     * @defaultValue false
     */
    linear?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepperPassThroughOptions}
     */
    pt?: PassThrough<StepperPassThroughOptions>;
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
 * Defines valid slots in Stepper component.
 */
export interface StepperSlots {
    /**
     * Custom default template.
     */
    default(): VNode[];
    /**
     * Custom start template.
     */
    start(): VNode[];
    /**
     * Custom end template.
     */
    end(): VNode[];
}

/**
 * Defines valid emits in Stepper component.
 */
export interface StepperEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {any} value - New value.
     */
    'update:value'(value: any): void;
}

export declare type StepperEmits = EmitFn<StepperEmitsOptions>;

/**
 * **PrimeVue - Stepper**
 *
 * _Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process._
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Stepper: DefineComponent<StepperProps, StepperSlots, StepperEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Stepper: DefineComponent<StepperProps, StepperSlots, StepperEmits>;
    }
}

export default Stepper;
