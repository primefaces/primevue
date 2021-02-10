import { VNode } from 'vue';

interface InlineMessageProps {
    severity?: string;
}

declare class InlineMessage {
    $props: InlineMessageProps;
    $slots: {
        '': VNode[];
    }
}

export default InlineMessage;
