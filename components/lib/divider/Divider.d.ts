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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type DividerPassThroughOptionType = DividerPassThroughAttributes | ((options: DividerPassThroughMethodOptions) => DividerPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DividerPassThroughMethodOptions {
    instance: any;
    props: DividerProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link DividerProps.pt}
 */
export interface DividerPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: DividerPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: DividerPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     * Uses to pass attributes to DOM elements inside the component.
     * @type {DividerPassThroughOptions}
     */
    pt?: DividerPassThroughOptions;
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

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Divider: GlobalComponentConstructor<Divider>;
    }
}

export default Divider;
