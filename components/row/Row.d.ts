/**
 * Row component is a helper component used to create grouping structures in DataTable.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module row
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Row component.
 */
export interface RowProps {}

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
