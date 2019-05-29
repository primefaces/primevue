import Vue, {VNode} from 'vue';

export declare class Panel extends Vue {
    header?: string;
    toggleable?: boolean;
    collapsed?: boolean;
    $emit(eventName: 'toggle', e: { originalEvent: Event, value: boolean; }): this;
    $slots: {
        '': VNode[];
        header: VNode[];
    }
}