import { VNode } from 'vue';

interface MegaMenuProps {
    model?: any[];
    orientation?: string;
    exact?: boolean;
}

interface MegaMenuItemSlotInterface {
    item: any;
}

declare class MegaMenu {
    $props: MegaMenuProps;
    $slots: {
        start: VNode[];
        end: VNode[];
        item: MegaMenuItemSlotInterface;
    }
}

export default MegaMenu;
