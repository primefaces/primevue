import Vue, {VNode} from 'vue';

declare class PickList extends Vue {
    value?: any[][];
    selection?: any[][];
    dataKey?: string;
    metaKeySelection?: boolean;
    listStyle?: any;
    stripedRows?: boolean;
    $emit(eventName: 'reorder', e: { originalEvent: Event, value: any[]; direction: string}): this;
    $emit(eventName: 'move-to-target', e: { originalEvent: Event, items: [] }): this;
    $emit(eventName: 'move-all-to-target', e: { originalEvent: Event, items: [] }): this;
    $emit(eventName: 'move-to-source', e: { originalEvent: Event, items: [] }): this;
    $emit(eventName: 'move-all-tou-source', e: { originalEvent: Event, items: [] }): this;
    $slots: {
        header: VNode[];
        item: VNode[];
        sourceheader: VNode[];
        targetheader: VNode[];
        sourcecontrolsstart: VNode[];
        sourcecontrolsend: VNode[];
        movecontrolsstart: VNode[];
        movecontrolsend: VNode[];
        targetcontrolsstart: VNode[];
        targetcontrolsend: VNode[];
    }
}

export default PickList;