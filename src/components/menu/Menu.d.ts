import Vue from 'vue';

declare class Menu extends Vue {
    popup?: boolean;
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
}

export default Menu;