/**
 *
 * A set of Buttons can be displayed together using the ButtonGroup component.
 *
 * [Live Demo](https://www.primevue.org/button/)
 *
 * @module buttongroup
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type ButtonGroupPassThroughOptionType = ButtonGroupPassThroughAttributes | ((options: ButtonGroupPassThroughMethodOptions) => ButtonGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ButtonGroupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ButtonGroupProps;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ButtonGroupProps.pt}
 */
export interface ButtonGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ButtonGroupPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ButtonGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in ButtonGroup component.
 */
export interface ButtonGroupProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ButtonGroupPassThroughOptions}
     */
    pt?: PassThrough<ButtonGroupPassThroughOptions>;
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
 * Defines valid slots in ButtonGroup component.
 */
export interface ButtonGroupSlots {
    /**
     * Default slot to detect Button components.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in ButtonGroup component.
 */
export interface ButtonGroupEmitsOptions {}

export declare type ButtonGroupEmits = EmitFn<ButtonGroupEmitsOptions>;

/**
 * **PrimeVue - ButtonGroup**
 *
 * _A set of Buttons can be displayed together using the ButtonGroup component._
 *
 * [Live Demo](https://www.primevue.org/button/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ButtonGroup: DefineComponent<ButtonGroupProps, ButtonGroupSlots, ButtonGroupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ButtonGroup: DefineComponent<ButtonGroupProps, ButtonGroupSlots, ButtonGroupEmits>;
    }
}

export default ButtonGroup;
