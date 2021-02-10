interface TieredMenuProps {
    popup?: boolean;
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
}

declare class TieredMenu {
    $props: TieredMenuProps;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
}

export default TieredMenu;
