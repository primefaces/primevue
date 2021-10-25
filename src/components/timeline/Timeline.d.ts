import { VNode } from 'vue';

interface TimelineProps {
    value?: any[];
    align?: string;
    layout?: string;
    dataKey?: string;
}

interface TimelineSlotInterface {
    item: any;
    index: number;
}

declare class Timeline {
    $props: TimelineProps;
    $slots: {
        content: TimelineSlotInterface;
        opposite: TimelineSlotInterface;
        marker: TimelineSlotInterface;
        connector: VNode[];
    }
}

export default Timeline;
