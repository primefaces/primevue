import Vue, { VNode } from 'vue';

declare class BlockUI extends Vue {
    blocked?: boolean;
    fullScreen?: boolean;
    baseZIndex?: number;
    autoZIndex?: boolean;
    $emit(eventName: 'block'): this;
    $emit(eventName: 'unblock'): this;
    $slots: {
        '': VNode[];
    }
}

export default BlockUI;