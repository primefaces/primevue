import Vue, {VNode} from 'vue';

declare class OrganizationChart extends Vue {
    value?: any;
    selectionKeys?: any;
    selectionMode?: string;
    collapsedKeys?: any;
    collapsible?: boolean;
    $emit(eventName: 'node-select', node: any): this;
    $emit(eventName: 'node-unselect', node: any): this;
    $emit(eventName: 'node-expand', node: any): this;
    $emit(eventName: 'node-collapsed', node: any): this;
    $slots: {
        [key: string]: VNode[];
    }
}

export default OrganizationChart;