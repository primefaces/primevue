import { VNode } from 'vue';

interface PanelMenuProps {
    model?: any[];
    expandedKeys?: any;
    exact?: boolean;
}

declare class PanelMenu {
    $props: PanelMenuProps;
    $emit(eventName: 'update:expandedKeys', value: any): this;
    $slots: {
        item: VNode[];
    }
}

export default PanelMenu;
