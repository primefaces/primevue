import Vue from 'vue';

declare class ContextMenu extends Vue {
    model?: any[];
    appendTo?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    global?: boolean;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
}

export default ContextMenu;