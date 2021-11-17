import { VNode } from 'vue';

interface SidebarProps {
    visible?: boolean;
    position?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    dismissable?: boolean;
    showCloseIcon?: boolean;
    modal?: boolean;
    ariaCloseLabel?: string;
}

declare class Sidebar {
    $props: SidebarProps;
    $emit(eventName: 'update:modelValue', value: boolean): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        '': VNode[];
    }
}

export default Sidebar;
