interface TabMenuProps {
    model?: any[];
    exact?: boolean;
    activeIndex?: number;
}

interface TabMenuItemSlotInterface {
    item: any;
}

declare class TabMenu {
    $props: TabMenuProps;
    $slots: {
        item: TabMenuItemSlotInterface;
    }
}

export default TabMenu;
