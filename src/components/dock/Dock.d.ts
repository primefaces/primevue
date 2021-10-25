import { VNode } from 'vue';

interface DockProps {
    position?: string;
    model?: any[];
    class?: string;
    style?: any;
    exact?: boolean;
    tooltipOptions?: any;
}

interface DockItemSlotInterface {
    item: any;
}

interface DockIconSlotInterface {
    item: any;
}

declare class Dock {
    $props: DockProps;
    $slots: {
        item: DockItemSlotInterface;
        icon: DockIconSlotInterface;
    }
}

export default Dock;
