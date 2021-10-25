interface TieredMenuProps {
    popup?: boolean;
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    exact?: boolean;
}

interface TieredMenuItemSlotInterface {
    item: any;
}

declare class TieredMenu {
    $props: TieredMenuProps;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
    $slots: {
        item: TieredMenuItemSlotInterface;
    }
}

export default TieredMenu;
