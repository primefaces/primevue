import Vue, { VNode } from 'vue';

export declare class Message extends Vue {
    severity?: string;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
    $slots: {
        '': VNode[];
    }
}