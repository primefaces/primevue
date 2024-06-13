/**
 *
 * Columns can be grouped at header and footer sections by defining a ColumnGroup component.
 * It is a helper component for DataTable.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 * @module columngroup
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';

export declare type ColumnGroupPassThroughOptionType = ColumnGroupPassThroughAttributes | ((options: ColumnGroupPassThroughMethodOptions) => ColumnGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ColumnGroupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ColumnGroupProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines current options.
     */
    context: ColumnGroupContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ColumnGroupProps.pt}
 */
export interface ColumnGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColumnGroupPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ColumnGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in ColumnGroup component.
 */
export interface ColumnGroupProps {
    /**
     * Type of column group
     */
    type?: 'header' | 'footer' | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ColumnGroupPassThroughOptions}
     */
    pt?: PassThrough<ColumnGroupPassThroughOptions>;
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
 * Defines current options in ColumnGroup component.
 */
export interface ColumnGroupContext {
    /**
     * Current type of the column group.
     */
    type: string;
    /**
     * Current scrollable state of column group as a boolean.
     * @defaultValue false
     */
    scrollable: boolean;
}

/**
 * Defines valid slots in ColumnGroup component.
 */
export interface ColumnGroupSlots {}

/**
 * Defines valid emits in ColumnGroup component.
 */
export interface ColumnGroupEmitsOptions {}

export declare type ColumnGroupEmits = EmitFn<ColumnGroupEmitsOptions>;

/**
 * **PrimeVue - ColumnGroup**
 *
 * _It is a helper component for DataTable._
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ColumnGroup: DefineComponent<ColumnGroupProps, ColumnGroupSlots, ColumnGroupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ColumnGroup: GlobalComponentConstructor<ColumnGroupProps, ColumnGroupSlots, ColumnGroupEmits>;
    }
}

export default ColumnGroup;
