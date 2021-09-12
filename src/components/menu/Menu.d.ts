import { VNode } from 'vue';

interface MenuProps {
    popup?: boolean;
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    exact?: boolean;
}

declare class Menu {
    $props: MenuProps;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
    $slots: {
        item: VNode[];
    }
}

export default Menu;
