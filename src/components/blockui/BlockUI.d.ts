import { VNode } from 'vue';

interface BlockUIProps {
    blocked?: boolean;
    fullScreen?: boolean;
    baseZIndex?: number;
    autoZIndex?: boolean;
}

declare class BlockUI {
    $props: BlockUIProps;
    $emit(eventName: 'block'): this;
    $emit(eventName: 'unblock'): this;
    $slots: {
        '': VNode[];
    }
}

export default BlockUI;
