/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/tree/)
 *
 * @module tree
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type TreePassThroughOptionType = TreePassThroughAttributes | ((options: TreePassThroughMethodOptions) => TreePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TreePassThroughMethodOptions {
    instance: any;
    props: TreeProps;
    state: TreeState;
    context: TreeContext;
}

/**
 * Custom TreeNode metadata.
 */
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
     * @defaultValue false
     */
    selectable?: boolean;
    /**
     * Specifies if the node has children. Used in lazy loading.
     * @defaultValue false
     */
    leaf?: boolean;
    /**
     * Optional
     */
    [key: string]: any;
    /**
     * Icon to use in expanded state.
     */
    expandedIcon?: string;
    /**
     * Icon to use in collapsed state.
     */
    collapsedIcon?: string;
}

/**
 * Custom expanded keys metadata.
 */
export interface TreeExpandedKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

/**
 * Custom selection keys metadata.
 */
export interface TreeSelectionKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TreeProps.pt}
 */
export interface TreePassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the filter container's DOM element.
     */
    filterContainer?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the input's DOM element.
     */
    input?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the search icon's DOM element.
     */
    searchIcon?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the wrapper's DOM element.
     */
    wrapper?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the container's DOM element.
     */
    container?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the node's DOM element.
     */
    node?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the toggler's DOM element.
     */
    toggler?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the toggler icon's DOM element.
     */
    togglerIcon?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox container's DOM element.
     */
    checkboxContainer?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox's DOM element.
     */
    checkbox?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox icon's DOM element.
     */
    checkboxIcon?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the node icon's DOM element.
     */
    nodeIcon?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the subgroup's DOM element.
     */
    subgroup?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the loading overlay's DOM element.
     */
    loadingOverlay?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: TreePassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TreePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Tree component.
 */
export interface TreeState {
    /**
     * Current expanded keys state.
     */
    d_expandedKeys: TreeExpandedKeys;
    /**
     * Current filter value state as a string.
     */
    filterValue: string;
}

/**
 * Defines current options in Tree component.
 */
export interface TreeContext {
    /**
     * Index of the node.
     */
    index: number;
    /**
     * Current expanded state of the node as a boolean.
     * @defaultValue false
     */
    expanded: boolean;
    /**
     * Current selected state of the node as a boolean.
     * @defaultValue false
     */
    selected: boolean;
    /**
     * Current checked state of the node as a boolean.
     * @defaultValue false
     */
    checked: boolean;
    /**
     * Current leaf state of the node as a boolean.
     * @defaultValue false
     */
    leaf: boolean;
}

/**
 * Defines valid properties in Tree component.
 */
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
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue true
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Whether to display loading indicator.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display when tree is loading.
     * @deprecated since v3.27.0. Use 'loadingicon' slot.
     */
    loadingIcon?: string | undefined;
    /**
     * When specified, displays an input field to filter the items.
     * @defaultValue false
     */
    filter?: boolean | undefined;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @defaultValue label
     */
    filterBy?: string | undefined;
    /**
     * Mode for filtering.
     * @defaultValue lenient
     */
    filterMode?: 'lenient' | 'strict' | undefined;
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
     */
    scrollHeight?: 'flex' | string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {TreePassThroughOptions}
     */
    pt?: TreePassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Tree component.
 */
export interface TreeSlots {
    /**
     * Custom loading icon template.
     */
    loadingicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom search icon template.
     */
    searchicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom toggler icon template.
     */
    togglericon(scope: {
        /**
         * Tree node instance
         */
        node: TreeNode;
        /**
         * Expanded state of the node
         */
        expanded: boolean;
    }): VNode[];
    /**
     * Custom checkbox icon
     */
    checkboxicon(scope: {
        /**
         * Check state of the node
         */
        checked: boolean;
        /**
         * Partial check state of the node
         */
        partialChecked: boolean;
    }): VNode[];
    /**
     * Optional slots.
     * @todo
     */

    [key: string]: (node: any) => VNode[];
}

/**
 * Defines valid slots in Tree component.
 */
export interface TreeEmits {
    /**
     * Emitted when the expanded keys change.
     * @param {TreeNode} value - New expanded keys.
     */
    'update:expandedKeys'(value: TreeExpandedKeys): void;
    /**
     * Emitted when the selection keys change.
     * @param {TreeSelectionKeys} value - New selection keys.
     */
    'update:selectionKeys'(event: TreeSelectionKeys): void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeNode} node - Node instance.
     */
    'node-select'(node: TreeNode): void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeNode} node - Node instance.
     */
    'node-unselect'(node: TreeNode): void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeNode} node - Node instance.
     */
    'node-expand'(node: TreeNode): void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeNode} node - Node instance.
     */
    'node-collapse'(node: TreeNode): void;
}

/**
 * **PrimeVue - Tree**
 *
 * _Tree is used to display hierarchical data._
 *
 * [Live Demo](https://www.primevue.org/tree/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Tree extends ClassComponent<TreeProps, TreeSlots, TreeEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Tree: GlobalComponentConstructor<Tree>;
    }
}

export default Tree;
