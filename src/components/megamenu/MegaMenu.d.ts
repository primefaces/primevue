import { VNode } from 'vue';

interface MegaMenuProps {
    model?: any[];
    orientation?: string;
    exact?: boolean;
}

declare class MegaMenu {
    $props: MegaMenuProps;
    $slots: {
        start: VNode[];
        end: VNode[];
        item: VNode[];
    }
}

export default MegaMenu;
