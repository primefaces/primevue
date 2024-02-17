/**
 *
 * A set of Buttons can be displayed together using the ButtonGroup component.
 *
 * [Live Demo](https://www.primevue.org/button/)
 *
 * @module buttongroup
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent/BaseComponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

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
export interface ButtonGroupEmits {}

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
 */
declare class ButtonGroup extends ClassComponent<ButtonGroupProps, ButtonGroupSlots, ButtonGroupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ButtonGroup: GlobalComponentConstructor<ButtonGroup>;
    }
}

export default ButtonGroup;
