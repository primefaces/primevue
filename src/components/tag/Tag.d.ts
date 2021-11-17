import { VNode } from 'vue';

interface TagProps {
    value?: any;
    severity?: string;
    rounded?: boolean;
    icon?: string;
}

declare class Tag {
    $props: TagProps;
    $slots: {
        '': VNode[];
    }
}

export default Tag;
