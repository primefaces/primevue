import { VNode } from 'vue';

interface TimelineProps {
    value?: any[];
    align?: string;
    layout?: string;
    dataKey?: string;
}

declare class Timeline {
    $props: TimelineProps;
    $slots: {
        content: VNode[];
        opposite: VNode[];
        marker: VNode[];
        connector: VNode[];
    }
}

export default Timeline;
