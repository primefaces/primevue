import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface TreeNode {
    /**
     * Mandatory unique key of the node.
     */
    key?: string;
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
     */
    selectable?: boolean;
    /**
     * Specifies if the node has children. Used in lazy loading.
     */
    leaf?: boolean;
    /**
     * Optional
     */
    [key: string]: any;
}

type TreeSelectionModeType = 'single' | 'multiple' | 'checkbox' | undefined;

type TreeFilterModeType = 'lenient' | 'strict' | undefined;

type TreeScrollHeightType = 'flex' | string | undefined;

export interface TreeExpandedKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

export interface TreeSelectionKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

export interface TreeProps {
    /**
     * An array of treenodes.
     */
    value?: TreeNode[] | undefined;
    /**
     * A map of keys to represent the expansion state in controlled mode.
     */
    expandedKeys?: TreeExpandedKeys;
    /**
     * A map of keys to control the selection state.
     */
    selectionKeys?: TreeSelectionKeys;
    /**
     * Defines the selection mode.
     */
    selectionMode?: TreeSelectionModeType;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
     * Default value is true.
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Whether to display loading indicator.
     */
    loading?: boolean | undefined;
    /**
     * Icon to display when tree is loading.
     * Default value is 'pi pi-spin'.
     */
    loadingIcon?: string | undefined;
    /**
     * When specified, displays an input field to filter the items.
     */
    filter?: boolean | undefined;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * Default valye is 'label'.
     */
    filterBy?: string | undefined;
    /**
     * Mode for filtering.
     * @see TreeFilterModeType
     * Default value is 'lenient'.
     */
    filterMode?: TreeFilterModeType;
    /**
     * Placeholder text to show when filter input is empty.
     */
    filterPlaceholder?: string | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     */
    filterLocale?: string | undefined;
    /**
     * Height of the scroll viewport in fixed units or the 'flex' keyword for a dynamic size.
     * @see TreeScrollHeightType
     */
    scrollHeight?: TreeScrollHeightType;
}

export interface TreeSlots {
    /**
     * Optional slots.
     */
    [key: string]: (scope: {
        /**
         * Tree node instance
         */
        node: TreeNode;
    }) => VNode[];
}

export declare type TreeEmits = {
    /**
     * Emitted when the expanded keys change.
     * @param {TreeNode} value - New expanded keys.
     */
    'update:expandedKeys': (value: TreeExpandedKeys) => void;
    /**
      * Emitted when the selection keys change.
      * @param {TreeSelectionKeys} value - New selection keys.
      */
    'update:selectionKeys': (event: TreeSelectionKeys) => void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeNode} node - Node instance.
     */
    'node-select': (node: TreeNode) => void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeNode} node - Node instance.
     */
    'node-unselect': (node: TreeNode) => void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeNode} node - Node instance.
     */
    'node-expand': (node: TreeNode) => void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeNode} node - Node instance.
     */
    'node-collapse': (node: TreeNode) => void;
}

declare class Tree extends ClassComponent<TreeProps, TreeSlots, TreeEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Tree: GlobalComponentConstructor<Tree>
    }
}

/**
 *
 * Tree is used to display hierarchical data.
 *
 * Helper API:
 *
 * - TreeNode
 *
 * Demos:
 *
 * - [Tree](https://www.primefaces.org/primevue/showcase/#/tree)
 *
 */
export default Tree;
