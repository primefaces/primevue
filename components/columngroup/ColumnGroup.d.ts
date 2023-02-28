/**
 * @module columngroup
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ColumnGroupProps {
    /**
     * Type of column group
     */
    type?: 'header' | 'footer' | undefined;
}

export interface ColumnGroupSlots {}

/**
 * @todo
 */
export declare type ColumnGroupEmits = {};

declare class ColumnGroup extends ClassComponent<ColumnGroupProps, ColumnGroupSlots, ColumnGroupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ColumnGroup: GlobalComponentConstructor<ColumnGroup>;
    }
}

/**
 *
 * ColumnGroup is a helper component to create grouped header and footer on DataTable.
 *
 * Demos:
 *
 * - [ColumnGroup](https://www.primefaces.org/primevue/datatable/colgroup)
 *
 */
export default ColumnGroup;
