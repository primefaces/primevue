import { VNode } from 'vue';

interface ToolbarProps {}

declare class Toolbar {
    $props: ToolbarProps;
    $slots: {
        left: VNode[];
        right: VNode[];
    }
}

export default Toolbar;
