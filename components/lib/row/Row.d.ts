/**
 * Row component is a helper component used to create grouping structures in DataTable.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module row
 */
import { ColumnGroupPassThroughOptions } from '../columngroup';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type RowPassThroughOptionType = RowPassThroughAttributes | ((options: RowPassThroughMethodOptions) => RowPassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface RowPassThroughMethodOptions {
    props: RowProps;
    parent: ColumnGroupPassThroughOptions;
    context: RowContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link RowProps.pt}
 */
export interface RowPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: RowPassThroughOptionType;
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
export interface RowEmits {}

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
 */
declare class Row extends ClassComponent<RowProps, RowSlots, RowEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Row: GlobalComponentConstructor<Row>;
    }
}

export default Row;
