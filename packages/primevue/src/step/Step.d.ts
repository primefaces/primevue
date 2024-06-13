/**
 *
 * Step is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module step
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type StepPassThroughOptionType = StepPassThroughAttributes | ((options: StepPassThroughMethodOptions) => StepPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepProps;
    /**
     * Defines current options.
     */
    context: StepContext;
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
 * @see {@link StepProps.pt}
 */
export interface StepPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: StepPassThroughOptionType;
    /**
     * Used to pass attributes to the number's DOM element.
     */
    number?: StepPassThroughOptionType;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: StepPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface StepPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Step component.
 */
export interface StepProps {
    /**
     * Value of step.
     */
    value?: string | number | undefined;
    /**
     * Whether the step is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue BUTTON
     */
    as?: string | undefined;
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
     * @type {StepPassThroughOptions}
     */
    pt?: PassThrough<StepPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in Step component.
 */
export interface StepContext {
    /**
     * Whether the step is active.
     */
    active: boolean;
    /**
     * Whether the step is disabled.
     */
    disabled: boolean;
}

/**
 * Defines valid slots in Step slots.
 */
export interface StepSlots {
    /**
     * Custom content template. Slot attributes can be used when asChild prop is true.
     */
    default(scope: {
        /**
         * Style class of the loader.
         */
        class: string;
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
        activateCallback: () => void;
    }): VNode[];
}

export interface StepEmitsOptions {}

export declare type StepEmits = EmitFn<StepEmitsOptions>;

/**
 * **PrimeVue - Step**
 *
 * _Step is a helper component for Stepper component._
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Step: DefineComponent<StepProps, StepSlots, StepEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Step: GlobalComponentConstructor<StepProps, StepSlots, StepEmits>;
    }
}

export default Step;
