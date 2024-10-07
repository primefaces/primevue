/**
 *
 * TreeSelect is a form component to choose from hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/treeselect/)
 *
 * @module treeselect
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ChipPassThroughOptions } from 'primevue/chip';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { TreeExpandedKeys, TreePassThroughOptions } from 'primevue/tree';
import type { TreeNode } from 'primevue/treenode';
import { InputHTMLAttributes, TransitionProps, VNode } from 'vue';

export declare type TreeSelectPassThroughOptionType = TreeSelectPassThroughAttributes | ((options: TreeSelectPassThroughMethodOptions) => TreeSelectPassThroughAttributes | string) | string | null | undefined;

export declare type TreeSelectPassThroughTransitionType = TransitionProps | ((options: TreeSelectPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TreeSelectPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TreeSelectProps;
    /**
     * Defines current inline state.
     */
    state: TreeSelectState;
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
 * Custom shared passthrough(pt) option method.
 */
export interface TreeSelectSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: TreeSelectProps;
    /**
     * Defines current inline state.
     */
    state: TreeSelectState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TreeSelectProps.pt}
 */
export interface TreeSelectPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the label container's DOM element.
     */
    labelContainer?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the chip's DOM element.
     */
    chipItem?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the Chip.
     * @see {@link ChipPassThroughOptions}
     */
    pcChip?: ChipPassThroughOptions<TreeSelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the dropdown's DOM element.
     */
    dropdown?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown icon's DOM element.
     */
    dropdownIcon?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the tree container's DOM element.
     */
    treeContainer?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to Tree component.
     * @see {@link TreePassThroughOptions}
     */
    pcTree?: TreePassThroughOptions<TreeSelectSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input container's DOM element.
     */
    hiddenInputContainer?: TreeSelectPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: TreeSelectPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: TreeSelectPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TreeSelectPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in TreeSelect component.
 */
export interface TreeSelectState {
    /**
     * Current id state as a string.
     * @defaultValue null
     */
    id: string;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current overlay visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
    /**
     * Current expanded keys state.
     */
    expandedKeys: TreeExpandedKeys;
}

/**
 * Defines valid properties in TreeSelect component.
 */
export interface TreeSelectProps {
    /**
     * Value of the component.
     */
    modelValue?: TreeNode | any;
    /**
     * An array of treenodes.
     */
    options?: TreeNode[] | undefined;
    /**
     * A map of keys to represent the expansion state in controlled mode.
     */
    expandedKeys?: TreeExpandedKeys;
    /**
     * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
     * @defaultValue 20rem
     */
    scrollHeight?: string | undefined;
    /**
     * Label to display when there are no selections.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * Defines the selection mode.
     */
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No available options
     */
    emptyMessage?: string | undefined;
    /**
     * Defines how the selected items are displayed.
     * @defaultValue comma
     */
    display?: 'comma' | 'chip' | undefined;
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
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. A callable taking a TreeNode can be provided instead of a list of field names.
     * @defaultValue label
     */
    filterBy?: string | ((node: TreeNode) => string) | undefined;
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
     * 	Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TreeSelectPassThroughOptions}
     */
    pt?: PassThrough<TreeSelectPassThroughOptions>;
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
 * Defines valid slots in TreeSelect component.
 */
export interface TreeSelectSlots {
    /**
     * Custom value template.
     * @param {Object} scope - value slot's params.
     */
    value(scope: {
        /**
         * Selected value
         */
        value: TreeNode | any;
        /**
         * Placeholder
         */
        placeholder: string;
    }): VNode[];
    /**
     * Custom option template.
     * @param {Object} scope - option slot's params.
     */
    option(scope: {
        /**
         * Current node
         */
        node: TreeNode | any;
        /**
         * Selection state
         */
        selected: boolean;
        /**
         * Expanded state
         */
        expanded: boolean;
    }): VNode[];
    /**
     * Custom header template.
     * @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Selected value
         */
        value: TreeNode | any;
        /**
         * An array of treenodes.
         */
        options: TreeNode[];
    }): VNode[];
    /**
     * Custom footer template.
     * @param {Object} scope - footer slot's params.
     */
    footer(scope: {
        /**
         * Selected value
         */
        value: TreeNode | any;
        /**
         * An array of treenodes.
         */
        options: TreeNode[];
    }): VNode[];
    /**
     * Custom empty template.
     */
    empty(): VNode[];
    /**
     * @deprecated since v4.0. use 'dropdownicon' slot instead.
     * Custom indicator template.
     * @param {Object} scope - dropdownicon slot's params.
     */
    triggericon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom indicator template.
     * @param {Object} scope - dropdownicon slot's params.
     */
    dropdownicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use 'itemtoggleicon' slot instead.
     * Custom item toggler icon template.
     * @param {Object} scope - item toggler icon slot's params.
     */
    itemtogglericon(scope: {
        /**
         * Node instance
         */
        node: TreeNode | any;
        /**
         * Expanded state of the node
         */
        expanded: TreeNode[];
    }): VNode[];
    /**
     * Custom item toggle icon template.
     * @param {Object} scope - item toggle icon slot's params.
     */
    itemtoggleicon(scope: {
        /**
         * Node instance
         */
        node: TreeNode | any;
        /**
         * Expanded state of the node
         */
        expanded: TreeNode[];
    }): VNode[];
    /**
     * Custom item checkbox icon template.
     * @param {Object} scope - item checkbox icon slot's params.
     */
    itemcheckboxicon(scope: {
        /**
         * Check state of the node
         */
        checked: boolean;
        /**
         * Partial check state of the node
         */
        partialChecked: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in TreeSelect component.
 */
export interface TreeSelectEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Emitted when the expanded keys change.
     * @param {TreeNode} value - New expanded keys.
     */
    'update:expandedKeys'(value: TreeExpandedKeys): void;
    /**
     * Callback to invoke on value change.
     * @param {*} value - Selected node keys
     */
    change(value: string[]): void;
    /**
     * Callback to invoke before the overlay is shown.
     */
    'before-show'(): void;
    /**
     * Callback to invoke before the overlay is hidden.
     */
    'before-hide'(): void;
    /**
     * Callback to invoke when the overlay is shown.
     */
    show(): void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    hide(): void;
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

export declare type TreeSelectEmits = EmitFn<TreeSelectEmitsOptions>;

export interface TreeSelectMethods {
    /**
     * Shows the overlay.
     *
     * @memberof TreeSelect
     */
    show: () => void;
    /**
     * Hides the overlay.
     *
     * @memberof TreeSelect
     */
    hide: () => void;
}

/**
 * **PrimeVue - TreeSelect**
 *
 * _TreeSelect is a form component to choose from hierarchical data._
 *
 * [Live Demo](https://www.primevue.org/treeselect/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const TreeSelect: DefineComponent<TreeSelectProps, TreeSelectSlots, TreeSelectEmits, TreeSelectMethods>;

declare module 'vue' {
    export interface GlobalComponents {
        TreeSelect: GlobalComponentConstructor<TreeSelectProps, TreeSelectSlots, TreeSelectEmits, TreeSelectMethods>;
    }
}

export default TreeSelect;
