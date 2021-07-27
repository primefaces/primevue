import { VNode } from 'vue';

interface DockProps {
    position?: string;
    model?: any[];
    class?: string;
    style?: any;
}

declare class Dock {
    $props: DockProps;
    $slots: {
        'item': VNode[];
    }
}

export default Dock;
