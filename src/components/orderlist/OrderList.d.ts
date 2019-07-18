import Vue, {VNode} from 'vue';

export declare class OrderList extends Vue {
    value?: any[];
    dataKey?: string;
    selection?: any[];
    metaKeySelection?: boolean;
    listStyle?: any;
    $emit(eventName: 'reorder', e: { originalEvent: Event, value: any[]; direction: string}): this;
    $slots: {
        header: VNode[];
        item: VNode[];
    }
}