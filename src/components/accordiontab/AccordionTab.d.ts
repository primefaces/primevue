import { VNode } from 'vue';

interface AccordionTabProps {
    header?: string;
    disabled?: boolean;
}

declare class AccordionTab {
    $props: AccordionTabProps;
    $slot: {
        '': VNode[];
        header: VNode[];
    }
}

export default AccordionTab;
