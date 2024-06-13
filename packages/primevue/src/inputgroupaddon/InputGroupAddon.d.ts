/**
 *
 * InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primevue.org/inputgroup/)
 *
 * @module inputgroupaddon
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type InputGroupAddonPassThroughOptionType = InputGroupAddonPassThroughAttributes | ((options: InputGroupAddonPassThroughMethodOptions) => InputGroupAddonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputGroupAddonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
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
 * @see {@link InputGroupAddonProps.pt}
 */
export interface InputGroupAddonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputGroupAddonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputGroupAddonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputGroupAddon component.
 */
export interface InputGroupAddonProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputGroupAddonPassThroughOptions}
     */
    pt?: PassThrough<InputGroupAddonPassThroughOptions>;
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
 * Defines valid slots in InputGroupAddon component.
 */
export interface InputGroupAddonSlots {
    /**
     * Custom default template.
     */
    default(): VNode[];
    /**
     * Dynamic content template.
     * @todo
     */
    [key: string]: (node: any) => VNode[];
}

/**
 * Defines valid emits in InputGroupAddon component.
 */
export interface InputGroupAddonEmitsOptions {}

export declare type InputGroupAddonEmits = EmitFn<InputGroupAddonEmitsOptions>;

/**
 * **PrimeVue - InputGroupAddon**
 *
 * _InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input._
 *
 * [Live Demo](https://www.primevue.org/inputgroupaddon/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputGroupAddon: DefineComponent<InputGroupAddonProps, InputGroupAddonSlots, InputGroupAddonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputGroupAddon: GlobalComponentConstructor<InputGroupAddonProps, InputGroupAddonSlots, InputGroupAddonEmits>;
    }
}

export default InputGroupAddon;
