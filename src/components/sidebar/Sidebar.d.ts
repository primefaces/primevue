import Vue, { VNode } from 'vue';

export declare class Sidebar extends Vue {
    visible?: boolean;
    position?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    dismissable?: boolean;
    showCloseIcon?: boolean;
    modal?: boolean;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        '': VNode[];
    }
}