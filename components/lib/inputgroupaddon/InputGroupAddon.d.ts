/**
 *
 * InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primevue.org/inputgroup/)
 *
 * @module inputgroupaddon
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

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
export interface InputGroupAddonEmits {}

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
 */
declare class InputGroupAddon extends ClassComponent<InputGroupAddonProps, InputGroupAddonSlots, InputGroupAddonEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        InputGroupAddon: GlobalComponentConstructor<InputGroupAddon>;
    }
}

export default InputGroupAddon;
