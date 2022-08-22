import Vue, { VNode } from 'vue';

declare class OverlayPanel extends Vue {
    ismissable?: boolean;
    showCloseIcon?: boolean;
    appendTo?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    ariaCloseLabel?: string;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
    $slots: {
        '': VNode[];
    }
}

export default OverlayPanel;