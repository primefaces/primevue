import { VNode } from 'vue';

interface MessageProps {
    severity?: string;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
}

declare class Message {
    $props: MessageProps;
    $slots: {
        '': VNode[];
    }
}

export default Message;
