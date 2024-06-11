/**
 *
 * Row component is a helper component used to create grouping structures in DataTable.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module row
 *
 */
import type { DefineComponent, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';

export declare type RowPassThroughOptionType<T = any> = RowPassThroughAttributes | ((options: RowPassThroughMethodOptions<T>) => RowPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface RowPassThroughMethodOptions<T = any> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: RowProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: T;
    /**
     * Defines current options.
     */
    context: RowContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link RowProps.pt}
 */
export interface RowPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RowPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface RowPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Row component.
 */
export interface RowProps {
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ButtonPassThroughOptions}
     */
    pt?: PassThrough<RowPassThroughOptions<any>>;
}

/**
 * Defines current options in Row component.
 */
export interface RowContext {
    /**
     * Current index of the row.
     */
    index: number;
}

/**
 * Defines valid slots in Row component.
 */
export interface RowSlots {}

/**
 * Defines valid emits in Row component.
 */
export interface RowEmitsOptions {}

export declare type RowEmits = EmitFn<RowEmitsOptions>;

/**
 * **PrimeVue - Row**
 *
 * _Row component is a helper component used to create grouping structures in DataTable._
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Row: DefineComponent<RowProps, RowSlots, RowEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Row: GlobalComponentConstructor<RowProps, RowSlots, RowEmits>;
    }
}

export default Row;
