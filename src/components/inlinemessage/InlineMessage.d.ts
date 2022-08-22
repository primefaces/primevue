import Vue, { VNode } from 'vue';

declare class InlineMessage extends Vue {
    severity?: string;
    $slots: {
        '': VNode[];
    }
}

export default InlineMessage;