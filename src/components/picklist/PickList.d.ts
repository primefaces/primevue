import { VNode } from 'vue';

interface PickListProps {
    modelValue?: any[][];
    selection?: any[][];
    dataKey?: string;
    metaKeySelection?: boolean;
    listStyle?: any;
    responsive?: boolean;
    breakpoint?: string;
}

declare class PickList {
    $props: PickListProps;
    $emit(eventName: 'update:modelValue', value: any[]): this;
    $emit(eventName: 'update:selection', value: any[]): this;
    $emit(eventName: 'reorder', e: { originalEvent: Event, value: any[]; direction: string, listIndex: number}): this;
    $emit(eventName: 'selection-change', e: { originalEvent: Event, value: any[]}): this;
    $emit(eventName: 'move-to-target', e: { originalEvent: Event, items: [] }): this;
    $emit(eventName: 'move-all-to-target', e: { originalEvent: Event, items: [] }): this;
    $emit(eventName: 'move-to-source', e: { originalEvent: Event, items: [] }): this;
    $emit(eventName: 'move-all-tou-source', e: { originalEvent: Event, items: [] }): this;
    $slots: {
        header: VNode[];
        item: VNode[];
        sourceHeader: VNode[];
        targetHeader: VNode[];
    }
}

export default PickList;
