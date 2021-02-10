interface ContextMenuProps {
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    global?: boolean;
}

declare class ContextMenu {
    $props: ContextMenuProps;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
}

export default ContextMenu;
