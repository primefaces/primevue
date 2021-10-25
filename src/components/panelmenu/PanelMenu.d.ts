interface PanelMenuProps {
    model?: any[];
    expandedKeys?: any;
    exact?: boolean;
}

interface PanelMenuItemSlotInterface {
    item: any;
}

declare class PanelMenu {
    $props: PanelMenuProps;
    $emit(eventName: 'update:expandedKeys', value: any): this;
    $slots: {
        item: PanelMenuItemSlotInterface;
    }
}

export default PanelMenu;
