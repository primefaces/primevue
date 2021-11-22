import Vue, { VNode } from 'vue';

declare class Message extends Vue {
    severity?: string;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
    icon?: string;
    $slots: {
        '': VNode[];
    }
}

export default Message;