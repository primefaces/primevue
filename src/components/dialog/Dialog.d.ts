import { VNode } from 'vue';

interface DialogProps {
    header?: any;
    footer?: any;
    visible?: boolean;
    modal?: boolean;
    contentStyle?: any;
    contentClass?: string;
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
    breakpoints?: {[key: string]: string};
}

declare class Dialog {
    $props: DialogProps;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $emit(eventName: 'maximize'): this;
    $emit(eventName: 'unmaximize'): this;
    $slots: {
        '': VNode[];
        header: VNode[];
        footer: VNode[];
    }
}

export default Dialog;
