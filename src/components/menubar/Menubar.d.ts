import { VNode } from 'vue';

interface MenubarProps {
    model?: any[];
    exact?: boolean;
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
