import { VNode } from 'vue';

interface OverlayPanelProps {
    dismissable?: boolean;
    showCloseIcon?: boolean;
    appendTo?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    ariaCloseLabel?: string;
    breakpoints?: {[key: string]: string};
}

declare class OverlayPanel {
    $props: OverlayPanelProps;
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
