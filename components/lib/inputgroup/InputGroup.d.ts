/**
 *
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primevue.org/inputgroup/)
 *
 * @module inputgroup
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type InputGroupPassThroughOptionType = InputGroupPassThroughAttributes | ((options: InputGroupPassThroughMethodOptions) => InputGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputGroupPassThroughMethodOptions {
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
 * @see {@link InputGroupProps.pt}
 */
export interface InputGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputGroupPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputGroup component.
 */
export interface InputGroupProps {
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputGroupPassThroughOptions}
     */
    pt?: PassThrough<InputGroupPassThroughOptions>;
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
 * Defines valid slots in InputGroup component.
 */
export interface InputGroupSlots {
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
 * Defines valid emits in InputGroup component.
 */
export interface InputGroupEmits {}

/**
 * **PrimeVue - InputGroup**
 *
 * _InputGroup displays text, icon, buttons and other content can be grouped next to an input._
 *
 * [Live Demo](https://www.primevue.org/inputgroup/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class InputGroup extends ClassComponent<InputGroupProps, InputGroupSlots, InputGroupEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        InputGroup: GlobalComponentConstructor<InputGroup>;
    }
}

export default InputGroup;
