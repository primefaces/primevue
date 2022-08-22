import Vue, { VNode } from 'vue';

declare class Timeline extends Vue {
    value?: any[];
    align?: string;
    layout?: string;
    dataKey?: string;
    $slots: {
        content: VNode[];
        opposite: VNode[];
        marker: VNode[];
    }
}

export default Timeline;