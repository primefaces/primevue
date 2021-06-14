import { VNode } from 'vue';

interface MessageProps {
    severity?: string;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
}

declare class Message {
    $props: MessageProps;
    $emit(eventName: 'close', event: Event): this;
    $slots: {
        '': VNode[];
    }
}

export default Message;
