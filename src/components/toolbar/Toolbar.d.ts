import { VNode } from 'vue';

interface ToolbarProps {}

declare class Toolbar {
    $props: ToolbarProps;
    $slots: {
        start: VNode[];
        end: VNode[];
    }
}

export default Toolbar;
