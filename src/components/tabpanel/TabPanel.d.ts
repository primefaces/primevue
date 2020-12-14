import Vue, { VNode } from 'vue';

declare class TabPanel extends Vue {
    header?: any;
    active?: boolean;
    disabled?: boolean;
    $slots: {
        '': VNode[];
    }
}

export default TabPanel;