import { VNode } from 'vue';

interface MenubarProps {
    model?: any[];
}

declare class Menubar {
    $props: MenubarProps;
    $slots: {
        start: VNode[];
        end: VNode[];
        item: VNode[];
    }
}

export default Menubar;
