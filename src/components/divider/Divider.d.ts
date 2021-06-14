import { VNode } from 'vue';

interface DividerProps {
    align?: string;
    layout?: string;
    type?: string;
}

declare class Divider {
    $props: DividerProps;
    $slots: {
        '': VNode[];
    }
}

export default Divider;
