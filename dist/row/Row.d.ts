import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface RowProps {
}

export interface RowSlots {
}

export declare type RowEmits = {
}

declare class Row extends ClassComponent<RowProps, RowSlots, RowEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Row: GlobalComponentConstructor<Row>
    }
}

/**
 *
 * Row is a helper component to create column group.
 *
 * Demos:
 *
 * - [DataTable](https://www.primefaces.org/primevue/showcase/#/datatable/colgroup)
 *
 */
export default Row;
