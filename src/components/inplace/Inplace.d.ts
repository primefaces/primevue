import { VNode } from 'vue';

interface InplaceProps {
    closable?: boolean;
    active?: boolean;
}

declare class Inplace {
    $props: InplaceProps;
    $slots: {
        display: VNode[];
        content: VNode[];
    }
}

export default Inplace;
