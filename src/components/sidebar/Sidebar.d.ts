import Vue, { VNode } from 'vue';

declare class Sidebar extends Vue {
    visible?: boolean;
    position?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    dismissable?: boolean;
    showCloseIcon?: boolean;
    modal?: boolean;
    ariaCloseLabel?: string;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        '': VNode[];
    }
}

export default Sidebar;