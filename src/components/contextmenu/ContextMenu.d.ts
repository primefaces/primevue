import { VNode } from 'vue';

interface ContextMenuProps {
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    global?: boolean;
    exact?: boolean;
}

declare class ContextMenu {
    $props: ContextMenuProps;
    $slots: {
        item: VNode[];
    }
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
}

export default ContextMenu;
