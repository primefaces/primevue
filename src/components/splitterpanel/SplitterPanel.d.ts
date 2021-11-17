import { VNode } from 'vue';

interface SplitterPanelProps {
    size?: number;
    minSize?: number;
}

declare class SplitterPanel {
    $props: SplitterPanelProps;
    $slots: {
        '': VNode[];
    }
}

export default SplitterPanel;
