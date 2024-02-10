/**
 *
 * FloatLabel appears on top of the input field when focused.
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 *
 * @module floatlabel
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type FloatLabelPassThroughOptionType = FloatLabelPassThroughAttributes | ((options: FloatLabelPassThroughMethodOptions) => FloatLabelPassThroughAttributes | string) | string | null | undefined;

export declare type FloatLabelPassThroughTransitionType = TransitionProps | ((options: FloatLabelPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FloatLabelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FloatLabelProps;
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
 * @see {@link FloatLabelProps.pt}
 */
export interface FloatLabelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FloatLabelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FloatLabelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in FloatLabel component.
 */
export interface FloatLabelProps {
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FloatLabelPassThroughOptions}
     */
    pt?: PassThrough<FloatLabelPassThroughOptions>;
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
 * Defines valid slots in FloatLabel component.
 */
export interface FloatLabelSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
}

/**
 * Defines valid emits in FloatLabel component.
 */
export interface FloatLabelEmits {}

/**
 * **PrimeVue - FloatLabel**
 *
 * _FloatLabel appears on top of the input field when focused._
 *
 * [Live Demo](https://www.primevue.org/inputtext/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class FloatLabel extends ClassComponent<FloatLabelProps, FloatLabelSlots, FloatLabelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FloatLabel: GlobalComponentConstructor<FloatLabel>;
    }
}

export default FloatLabel;
