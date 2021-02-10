import { VNode } from 'vue';

interface DialogProps {
    header?: any;
    footer?: any;
    visible?: boolean;
    modal?: boolean;
    contentStyle?: string;
    rtl?: boolean;
    closable?: boolean;
    dismissableMask?: boolean;
    closeOnEscape?: boolean;
    showHeader?: boolean;
    baseZIndex?: number;
    autoZIndex?: boolean;
    ariaCloseLabel?: string;
    position?: string;
    maximizable?: boolean;
}

declare class Dialog {
    $props: DialogProps;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        '': VNode[];
        header: VNode[];
        footer: VNode[];
    }
}

export default Dialog;
