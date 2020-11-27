import Vue, { VNode } from 'vue';

declare class Message extends Vue {
    severity?: string;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
    $slots: {
        '': VNode[];
    }
}

export default Message;