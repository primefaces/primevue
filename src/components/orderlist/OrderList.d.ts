import { VNode } from 'vue';

interface OrderListProps {
    modelValue?: any[];
    dataKey?: string;
    selection?: any[];
    selectionMode?: string;
    metaKeySelection?: boolean;
    listStyle?: any;
    responsive?: boolean;
    breakpoint?: string;
}

interface OrderListItemSlotInterface {
    item: any;
    index: number;
}

declare class OrderList {
    $props: OrderListProps;
    $emit(eventName: 'update:modelValue', value: any[]): this;
    $emit(eventName: 'update:selection', value: any[]): this;
    $emit(eventName: 'reorder', e: { originalEvent: Event, value: any[]; direction: string}): this;
    $emit(eventName: 'selection-change', e: { originalEvent: Event, value: any[]}): this;
    $slots: {
        header: VNode[];
        item: OrderListItemSlotInterface;
        controlsstart: VNode[];
        controlsend: VNode[];
    }
}

export default OrderList;
