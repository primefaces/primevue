import Vue, { VNode } from 'vue';

export declare class AccordionTab extends Vue {
    header?: string;
    active?: boolean;
    disabled?: boolean;
    $slot: {
        '': VNode[];
        header: VNode[];
    }
}