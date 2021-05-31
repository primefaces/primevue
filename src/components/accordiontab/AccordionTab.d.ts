import Vue, { VNode } from 'vue';

declare class AccordionTab extends Vue {
    header?: string;
    disabled?: boolean;
    $slot: {
        '': VNode[];
        header: VNode[];
    }
}

export default AccordionTab;