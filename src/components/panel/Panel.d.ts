import { VNode } from 'vue';

interface PanelProps {
    header?: string;
    toggleable?: boolean;
    collapsed?: boolean;
}

declare class Panel {
    $props: PanelProps;
    $emit(eventName: 'update:collapsed', value: boolean): this;
    $emit(eventName: 'toggle', e: { originalEvent: Event, value: boolean; }): this;
    $slots: {
        '': VNode[];
        header: VNode[];
    }
}

export default Panel;
