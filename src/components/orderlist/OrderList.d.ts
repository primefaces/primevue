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
    $emit(eventName: 'reorder', e: { originalEvent: Event, value: any[]; direction: string}): this;
    $slots: {
        header: VNode[];
        item: VNode[];
    }
}

export default OrderList;
