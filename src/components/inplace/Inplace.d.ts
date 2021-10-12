import { VNode } from 'vue';

interface InplaceProps {
    closable?: boolean;
    active?: boolean;
    disabled?: boolean;
}

declare class Inplace {
    $props: InplaceProps;
    $emit(eventName: 'update:active', value: boolean): this;
    $emit(eventName: 'open', e: Event): this;
    $emit(eventName: 'close', e: Event): this;
    $slots: {
        display: VNode[];
        content: VNode[];
    }
}

export default Inplace;
