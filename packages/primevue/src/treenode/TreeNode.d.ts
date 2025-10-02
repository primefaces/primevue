/**
 *
 * PrimeVue tree components share a common api to specify the node.
 *
 * @module treenode
 *
 */

/**
 * Custom TreeNode metadata.
 */
export interface TreeNode {
    /**
     * Mandatory unique key of the node.
     */
    key: string;
    /**
     * Label of the node.
     */
    label?: string;
    /**
     * Data represented by the node.
     */
    data?: any;
    /**
     * Type of the node to match a template.
     */
    type?: string;
    /**
     * Icon of the node to display next to content.
     */
    icon?: string;
    /**
     * An array of treenodes as children.
     */
    children?: TreeNode[];
    /**
     * Inline style of the node.
     */
    style?: any;
    /**
     * Style class of the node.
     */
    styleClass?: string;
    /**
     * Whether the node is selectable when selection mode is enabled.
     * @defaultValue null
     */
    selectable?: boolean;
    /**
     * Specifies if the node has children. Used in lazy loading.
     * @defaultValue false
     */
    leaf?: boolean;
    /**
     * Specifies the node loading. Used in Tree and TreeTable.
     */
    loading?: boolean;
    /**
     * Icon to use in expanded state.
     */
    expandedIcon?: string;
    /**
     * Icon to use in collapsed state.
     */
    collapsedIcon?: string;
    /**
     * Specifies if the node is draggable.
     * Available only for Tree component.
     * @defaultValue null
     */
    draggable?: boolean;
    /**
     * Specifies if the node is droppable.
     * Available only for Tree component.
     * @defaultValue null
     */
    droppable?: boolean;
    /**
     * Optional
     */
    [key: string]: any;
}
