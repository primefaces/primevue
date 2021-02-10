import { VNode } from 'vue';

interface DeferredContentProps {}

declare class DeferredContent {
    $props: DeferredContentProps;
    $emit(eventName: 'load'): this;
    $slots: {
        '': VNode[];
    }
}

export default DeferredContent;
