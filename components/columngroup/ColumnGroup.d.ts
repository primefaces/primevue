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

export interface ColumnGroupEmits {}

declare class ColumnGroup extends ClassComponent<ColumnGroupProps, ColumnGroupSlots, ColumnGroupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ColumnGroup: GlobalComponentConstructor<ColumnGroup>;
    }
}

export default ColumnGroup;
