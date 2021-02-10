import { VNode } from 'vue';

interface ScrollPanelProps {}

declare class ScrollPanel {
    $props: ScrollPanelProps;
    $slots: {
        '': VNode[];
    }
}

export default ScrollPanel;
