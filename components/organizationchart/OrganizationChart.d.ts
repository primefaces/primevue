/**
 *
 * OrganizationChart visualizes hierarchical organization data.
 *
 * [Live Demo](https://primevue.org/organizationchart)
 *
 * @module organizationchart
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in OrganizationChartNode.
 */
export interface OrganizationChartNode {
    /**
     * Unique identifier of the node. (required)
     */
    key: any;
    /**
     * Type of the node to match a template.
     */
    type?: string;
    /**
     * Style class of the node content.
     */
    styleClass?: string;
    /**
     * Data represented by the node.
     */
    data?: any;
    /**
     * Whether node is selectable when selection is enabled.
     * @defaultValue true
     */
    selectable?: boolean;
    /**
     * Whether node is collapsible when node expansion is enabled.
     * @defaultValue true
     */
    collapsible?: boolean;
    /**
     * Children nodes array.
     */
    children?: OrganizationChartNode[];
    /**
     * Optional keys
     */
    [key: string]: any;
}

export interface OrganizationChartSelectionKeys {
    /**
     * Optional keys
     */
    [key: string]: any;
}

export interface OrganizationChartCollapsedKeys {
    /**
     * Optional keys
     */
    [key: string]: any;
}

/**
 * Defines valid properties in OrganizationChart component.
 */
export interface OrganizationChartProps {
    /**
     * Value of the component.
     */
    value?: OrganizationChartNode;
    /**
     * A map instance of key-value pairs to represented the selected nodes.
     */
    selectionKeys?: OrganizationChartSelectionKeys;
    /**
     * Type of the selection.
     */
    selectionMode?: 'single' | 'multiple' | undefined;
    /**
     * A map instance of key-value pairs to represented the collapsed nodes.
     */
    collapsedKeys?: OrganizationChartCollapsedKeys;
    /**
     * Whether the nodes can be expanded or toggled.
     * @defaultValue false
     */
    collapsible?: boolean;
}

/**
 * Defines valid slots in OrganizationChart component.
 */
export interface OrganizationChartSlots {
    /**
     * Custom content template.
     */
    default(node: any): VNode[];
    /**
     * Dynamic content template.
     * @todo
     */
    [key: string]: (node: any) => VNode[];
}

/**
 * Defines valid emits in OrganizationChart component.
 */
export interface OrganizationChartEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:selectionKeys'(value: any): void;
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:collapsedKeys'(value: boolean): void;
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {OrganizationChartNode} node - Node instance.
     */
    'node-select'(node: OrganizationChartNode): void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {OrganizationChartNode} node - Node instance.
     */
    'node-unselect'(node: OrganizationChartNode): void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {OrganizationChartNode} node - Node instance.
     */
    'node-expand'(node: OrganizationChartNode): void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {OrganizationChartNode} node - Node instance.
     */
    'node-collapsed'(node: OrganizationChartNode): void;
}

/**
 * **PrimeVue - OrganizationChart**
 *
 * _OrganizationChart visualizes hierarchical organization data._
 *
 * [Live Demo](https://www.primevue.org/organizationchart/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class OrganizationChart extends ClassComponent<OrganizationChartProps, OrganizationChartSlots, OrganizationChartEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        OrganizationChart: GlobalComponentConstructor<OrganizationChart>;
    }
}

export default OrganizationChart;
