import { VNode } from 'vue';

interface TabMenuProps {
    model?: any[];
    exact?: boolean;
    activeIndex?: number;
}

declare class TabMenu {
    $props: TabMenuProps;
    $slots: {
        item: VNode[];
    }
}

export default TabMenu;
