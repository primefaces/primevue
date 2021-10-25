import { VNode } from 'vue';

interface MenubarProps {
    model?: any[];
    exact?: boolean;
}

interface MenubarItemSlotInterface {
    item: any;
}

declare class Menubar {
    $props: MenubarProps;
    $slots: {
        start: VNode[];
        end: VNode[];
        item: MenubarItemSlotInterface;
    }
}

export default Menubar;
