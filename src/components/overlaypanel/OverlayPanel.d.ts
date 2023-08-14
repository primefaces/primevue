import Vue, { VNode } from 'vue';

declare class OverlayPanel extends Vue {
    dismissable?: boolean;
    showCloseIcon?: boolean;
    appendTo?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    ariaCloseLabel?: string;
    toggle(event: Event): void;
    show(event: Event, target?: any): void;
    hide(): void;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        '': VNode[];
    }
}

export default OverlayPanel;