/**
 *
 * Tree is used to display hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/tree/)
 *
 * @module tree
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { IconFieldPassThroughOptions } from 'primevue/iconfield';
import type { InputIconPassThroughOptions } from 'primevue/inputicon';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { TreeNode } from 'primevue/treenode';
import { VNode } from 'vue';

export declare type TreePassThroughOptionType<T = any> = TreePassThroughAttributes | ((options: TreePassThroughMethodOptions<T>) => TreePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TreePassThroughMethodOptions<T = any> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TreeProps;
    /**
     * Defines current inline state.
     */
    state: TreeState;
    /**
     * Defines parent instance.
     */
    parent: T;
    /**
     * Defines current options.
     */
    context: TreeContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface TreeSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: TreeProps;
    /**
     * Defines current inline state.
     */
    state: TreeState;
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
 * Custom filter event.
 * @see {@link TreeEmitsOptions.filter}
 */
export interface TreeFilterEvent {
    /**
     * Original event
     */
    originalEvent: Event;
    /**
     * Filter value
     */
    value: string;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TreeProps.pt}
 */
export interface TreePassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the IconField component.
     * @see {@link IconFieldPassThroughOptions}
     */
    pcFilterContainer?: IconFieldPassThroughOptions<TreeSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcFilter?: InputTextPassThroughOptions<TreeSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the InputIcon component.
     * @see {@link InputIconPassThroughOptions}
     */
    pcFilterIconContainer?: InputIconPassThroughOptions<TreeSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the filter icon's DOM element.
     */
    filterIcon?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the wrapper's DOM element.
     */
    wrapper?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the root children's DOM element.
     */
    rootChildren?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the node's DOM element.
     */
    node?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the node content's DOM element.
     */
    nodeContent?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the node toggle button's DOM element.
     */
    nodeToggleButton?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the node toggle icon's DOM element.
     */
    nodeToggleIcon?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the checkbox's DOM element.
     */
    nodeCheckbox?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the node icon's DOM element.
     */
    nodeIcon?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the node label's DOM element.
     */
    nodeLabel?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the node children's DOM element.
     */
    nodeChildren?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: TreePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: TreePassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
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
     * @defaultValue false
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Whether to display loading indicator.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display when tree is loading.
     */
    loadingIcon?: string | undefined;
    /**
     * Loading mode display.
     * @defaultValue mask
     */
    loadingMode?: 'mask' | 'icon' | undefined;
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
     *  Highlights automatically the first item.
     *  @defaultValue false
     */
    highlightOnSelect?: boolean | undefined;
    /**
     * Height of the scroll viewport in fixed units or the 'flex' keyword for a dynamic size.
     */
    scrollHeight?: HintedString<'flex'> | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TreePassThroughOptions}
     */
    pt?: PassThrough<TreePassThroughOptions>;
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
 * Defines valid slots in Tree component.
 */
export interface TreeSlots {
    /**
     * Default content slot.
     */
    default(scope: {
        /**
         * Tree node instance
         */
        node: TreeNode;
        /**
         * Selection state
         */
        selected: boolean;
    }): VNode[];
    /**
     * Custom loading icon template.
     * @param {Object} scope - loadingicon slot's params.
     */
    loadingicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'filtericon' slot instead.
     * Custom search icon template.
     * @param {Object} scope - searchicon slot's params.
     */
    searchicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom search icon template.
     * @param {Object} scope - filtericon slot's params.
     */
    filtericon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'nodetoggleicon' slot instead.
     * Custom toggle icon template.
     * @param {Object} scope - toggleicon slot's params.
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
     * @deprecated since v4.0. Use 'nodetoggleicon' slot instead.
     * Custom node toggle icon template.
     * @param {Object} scope - toggleicon slot's params.
     */
    nodetogglericon(scope: {
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
     * Custom node toggle icon template.
     * @param {Object} scope - toggleicon slot's params.
     */
    nodetoggleicon(scope: {
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
     * Custom node icon template.
     * @param {Object} scope - nodeicon slot's params.
     */
    nodeicon(scope: {
        /**
         * Tree node instance
         */
        node: TreeNode;
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom checkbox icon
     * @param {Object} scope - checkboxicon slot's params.
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
 * Defines valid emits in Tree component.
 */
export interface TreeEmitsOptions {
    /**
     * Emitted when the expanded keys change.
     * @param {TreeNode} value - New expanded keys.
     */
    'update:expandedKeys'(value: TreeExpandedKeys): void;
    /**
     * Emitted when the selection keys change.
     * @param {TreeSelectionKeys} value - New selection keys.
     */
    'update:selectionKeys'(value: TreeSelectionKeys): void;
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
    /**
     * Callback to invoke on filter input.
     * @param {TreeFilterEvent} event - Custom filter event.
     */
    'filter'(event: TreeFilterEvent): void;
}

export declare type TreeEmits = EmitFn<TreeEmitsOptions>;

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
 *
 */
declare const Tree: DefineComponent<TreeProps, TreeSlots, TreeEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Tree: GlobalComponentConstructor<TreeProps, TreeSlots, TreeEmits>;
    }
}

export default Tree;
