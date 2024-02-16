/**
 *
 * A set of Buttons can be displayed together using the ButtonSet component.
 *
 * [Live Demo](https://www.primevue.org/button/)
 *
 * @module buttonset
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ButtonSetPassThroughOptionType = ButtonSetPassThroughAttributes | ((options: ButtonSetPassThroughMethodOptions) => ButtonSetPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ButtonSetPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ButtonSetProps;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ButtonSetProps.pt}
 */
export interface ButtonSetPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ButtonSetPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ButtonSetPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in ButtonSet component.
 */
export interface ButtonSetProps {
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ButtonSetPassThroughOptions}
     */
    pt?: PassThrough<ButtonSetPassThroughOptions>;
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
 * Defines valid slots in ButtonSet component.
 */
export interface ButtonSetSlots {
    /**
     * Default slot to detect Button components.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in ButtonSet component.
 */
export interface ButtonSetEmits {}

/**
 * **PrimeVue - ButtonSet**
 *
 * _A set of Buttons can be displayed together using the ButtonSet component._
 *
 * [Live Demo](https://www.primevue.org/button/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class ButtonSet extends ClassComponent<ButtonSetProps, ButtonSetSlots, ButtonSetEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ButtonSet: GlobalComponentConstructor<ButtonSet>;
    }
}

export default ButtonSet;
