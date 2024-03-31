/**
 *
 * Divider is used to separate contents.
 *
 * [Live Demo](https://primevue.org/divider)
 *
 * @module divider
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type DividerPassThroughOptionType = DividerPassThroughAttributes | ((options: DividerPassThroughMethodOptions) => DividerPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DividerPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: DividerProps;
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
 * @see {@link DividerProps.pt}
 */
export interface DividerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DividerPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DividerPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DividerPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Divider component.
 */
export interface DividerProps {
    /**
     * Alignment of the content.
     */
    align?: 'left' | 'center' | 'right' | 'top' | 'center' | 'bottom' | undefined;
    /**
     * Specifies the orientation, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    layout?: 'horizontal' | 'vertical' | undefined;
    /**
     * Border style type.
     * @defaultValue solid
     */
    type?: 'solid' | 'dashed' | 'dotted' | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {DividerPassThroughOptions}
     */
    pt?: PassThrough<DividerPassThroughOptions>;
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
 * Defines valid slots in Divider slots.
 */
export interface DividerSlots {
    /**
     * Default content slot.
     */
    default(): VNode[];
}

export interface DividerEmits {}

/**
 * **PrimeVue - Divider**
 *
 * _Divider is used to separate contents._
 *
 * [Live Demo](https://primevue.org/divider)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Divider extends ClassComponent<DividerProps, DividerSlots, DividerEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Divider: GlobalComponentConstructor<Divider>;
    }
}

export default Divider;
