/**
 *
 * OrganizationChart visualizes hierarchical organization data.
 *
 * [Live Demo](https://primevue.org/organizationchart)
 *
 * @module organizationchart
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type OrganizationChartPassThroughOptionType = OrganizationChartPassThroughAttributes | ((options: OrganizationChartPassThroughMethodOptions) => OrganizationChartPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface OrganizationChartPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: OrganizationChartProps;
    /**
     * Defines current inline state.
     */
    state: OrganizationChartState;
    /**
     * Defines current options.
     */
    context: OrganizationChartContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

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
 * Custom passthrough(pt) options.
 * @see {@link OrganizationChartProps.pt}
 */
export interface OrganizationChartPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the table's DOM element.
     */
    table?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the body's DOM element.
     */
    body?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the row' DOM element.
     */
    row?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the cell's DOM element.
     */
    cell?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the node's DOM element.
     */
    node?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the node toggle button's DOM element.
     */
    nodeToggleButton?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the node toggle button icon's DOM element.
     */
    nodeToggleButtonIcon?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the connectors's DOM element.
     */
    connectors?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the lineCell's DOM element.
     */
    lineCell?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the connector down's DOM element.
     */
    connectorDown?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the connector left's DOM element.
     */
    connectorLeft?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the connector right's DOM element.
     */
    connectorRight?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the node children's DOM element.
     */
    nodeChildren?: OrganizationChartPassThroughOptionType;
    /**
     * Used to pass attributes to the nodeCell's DOM element.
     */
    nodeCell?: OrganizationChartPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface OrganizationChartPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in OrganizationChart component.
 */
export interface OrganizationChartState {
    /**
     * Current collapsed keys' state.
     * @defaultValue false
     */
    d_collapsedKeys: OrganizationChartCollapsedKeys;
}

/**
 * Defines current options in OrganizationChart component.
 */
export interface OrganizationChartContext {
    /**
     * Current focus expanded of the node as a boolean.
     * @defaultValue false
     */
    expanded: boolean;
    /**
     * Current selectable state of the node as a boolean.
     * @defaultValue false
     */
    selectable: boolean;
    /**
     * Current selection state of the node as a boolean.
     * @defaultValue false
     */
    selected: boolean;
    /**
     * Current toggleable state of the node as a boolean.
     * @defaultValue false
     */
    toggleable: boolean;
    /**
     * Current active state of the node as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current being top line state of the node as a boolean.
     * @defaultValue false
     */
    lineTop: boolean;
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
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {OrganizationChartPassThroughOptions}
     */
    pt?: PassThrough<OrganizationChartPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in OrganizationChart component.
 */
export interface OrganizationChartSlots {
    /**
     * Custom content template.
     */
    default(scope: {
        /**
         * Current node
         */
        node: any;
    }): VNode[];
    /**
     * Dynamic content template.
     * @todo
     */
    [key: string]: (node: any) => VNode[];
    /**
     * @deprecated since v4.0. Use 'toggleicon' slot instead.
     * Custom toggler icon template.
     * @param {Object} scope - togglericon slot's params.
     */
    togglericon(scope: {
        /**
         * Curent state of the node
         */
        expanded: boolean;
    }): VNode[];
    /**
     * Custom toggler icon template.
     * @param {Object} scope - togglericon slot's params.
     */
    toggleicon(scope: {
        /**
         * Curent state of the node
         */
        expanded: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in OrganizationChart component.
 */
export interface OrganizationChartEmitsOptions {
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

export declare type OrganizationChartEmits = EmitFn<OrganizationChartEmitsOptions>;

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
 *
 */
declare const OrganizationChart: DefineComponent<OrganizationChartProps, OrganizationChartSlots, OrganizationChartEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        OrganizationChart: GlobalComponentConstructor<OrganizationChartProps, OrganizationChartSlots, OrganizationChartEmits>;
    }
}

export default OrganizationChart;
