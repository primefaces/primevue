import { VNode } from 'vue';

interface DockProps {
    position?: string;
    model?: any[];
    class?: string;
    style?: any;
    exact?: boolean;
    tooltipOptions?: any;
}

declare class Dock {
    $props: DockProps;
    $slots: {
        'item': VNode[];
        'icon': VNode[];
    }
}

export default Dock;
