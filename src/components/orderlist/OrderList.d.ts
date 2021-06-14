import { VNode } from 'vue';

interface OrderListProps {
    modelValue?: any[];
    dataKey?: string;
    selection?: any[];
    metaKeySelection?: boolean;
    listStyle?: any;
    responsive?: boolean;
    breakpoint?: string;
}

declare class OrderList {
    $props: OrderListProps;
    $emit(eventName: 'update:modelValue', value: any[]): this;
    $emit(eventName: 'update:selection', value: any[]): this;
    $emit(eventName: 'reorder', e: { originalEvent: Event, value: any[]; direction: string}): this;
    $emit(eventName: 'selection-change', e: { originalEvent: Event, value: any[]}): this;
    $slots: {
        header: VNode[];
        item: VNode[];
    }
}

export default OrderList;
