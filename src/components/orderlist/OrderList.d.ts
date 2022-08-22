import Vue, {VNode} from 'vue';

declare class OrderList extends Vue {
    value?: any[];
    dataKey?: string;
    selection?: any[];
    metaKeySelection?: boolean;
    listStyle?: any;
    stripedRows?: boolean;
    $emit(eventName: 'reorder', e: { originalEvent: Event, value: any[]; direction: string}): this;
    $slots: {
        header: VNode[];
        item: VNode[];
        controlsstart: VNode[];
        controlsend: VNode[];
    }
}

export default OrderList;