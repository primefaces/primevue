/**
 * Columns can be grouped at header and footer sections by defining a ColumnGroup component.
 * It is a helper component for DataTable.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 * @module columngroup
 */
import { DataTablePassThroughOptions } from '../datatable';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ColumnGroupPassThroughOptionType = ColumnGroupPassThroughAttributes | ((options: ColumnGroupPassThroughMethodOptions) => ColumnGroupPassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ColumnGroupPassThroughMethodOptions {
    props: ColumnGroupProps;
    parent: DataTablePassThroughOptions;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ColumnGroupProps.pt}
 */
export interface ColumnGroupPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ColumnGroupPassThroughOptionType;
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
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ColumnGroupPassThroughOptions}
     */
    pt?: ColumnGroupPassThroughOptions;
}

/**
 * Defines valid slots in ColumnGroup component.
 */
export interface ColumnGroupSlots {}

/**
 * Defines valid emits in ColumnGroup component.
 */
export interface ColumnGroupEmits {}

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
 */
declare class ColumnGroup extends ClassComponent<ColumnGroupProps, ColumnGroupSlots, ColumnGroupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ColumnGroup: GlobalComponentConstructor<ColumnGroup>;
    }
}

export default ColumnGroup;
