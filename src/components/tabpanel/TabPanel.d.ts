import { VNode } from 'vue';

interface TabPanelProps {
    header?: any;
    disabled?: boolean;
}

declare class TabPanel {
    $props: TabPanelProps;
    $slots: {
        '': VNode[];
    }
}

export default TabPanel;
