import Vue, { VNode } from 'vue';

declare class TabPanel extends Vue {
    header?: any;
    disabled?: boolean;
    $slots: {
        '': VNode[];
    }
}

export default TabPanel;