import { VNode } from 'vue';

interface OrganizationChartProps {
    value?: any;
    selectionKeys?: any;
    selectionMode?: string;
    collapsedKeys?: any;
    collapsible?: boolean;
}

declare class OrganizationChart {
    $props: OrganizationChartProps;
    $emit(eventName: 'update:selectionKeys', value: any): this;
    $emit(eventName: 'update:collapsedKeys', value: boolean): this;
    $emit(eventName: 'node-select', node: any): this;
    $emit(eventName: 'node-unselect', node: any): this;
    $emit(eventName: 'node-expand', node: any): this;
    $emit(eventName: 'node-collapsed', node: any): this;
    $slots: {
        [key: string]: VNode[];
    }
}

export default OrganizationChart;
