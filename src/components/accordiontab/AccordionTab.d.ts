import Vue, { VNode } from 'vue';

declare class AccordionTab extends Vue {
    header?: string;
    active?: boolean;
    disabled?: boolean;
    $slot: {
        '': VNode[];
        header: VNode[];
    }
}

export default AccordionTab;