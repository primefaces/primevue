import Vue, {VNode} from 'vue';

declare class Dialog extends Vue {
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
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        '': VNode[];
        header: VNode[];
        footer: VNode[];
    }
}

export default Dialog;