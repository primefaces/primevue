/**
 *
 * InputIcon displays an icon.
 *
 * [Live Demo](https://www.primevue.org/inputgroup/)
 *
 * @module inputicon
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type InputIconPassThroughOptionType = InputIconPassThroughAttributes | ((options: InputIconPassThroughMethodOptions) => InputIconPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputIconPassThroughMethodOptions {
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
 * @see {@link InputIconProps.pt}
 */
export interface InputIconPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputIconPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputIconPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputIcon component.
 */
export interface InputIconProps {
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputIconPassThroughOptions}
     */
    pt?: PassThrough<InputIconPassThroughOptions>;
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
 * Defines valid slots in InputIcon component.
 */
export interface InputIconSlots {
    /**
     * Custom default template.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in InputIcon component.
 */
export interface InputIconEmits {}

/**
 * **PrimeVue - InputIcon**
 *
 * _InputIcon displays text, icon, buttons and other content can be grouped next to an input._
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class InputIcon extends ClassComponent<InputIconProps, InputIconSlots, InputIconEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        InputIcon: GlobalComponentConstructor<InputIcon>;
    }
}

export default InputIcon;
