/**
 *
 * TreeSelect is a form component to choose from hierarchical data.
 *
 * [Live Demo](https://www.primevue.org/treeselect/)
 *
 * @module treeselect
 *
 */
import { InputHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { TreeExpandedKeys, TreeNode, TreePassThroughOptionType } from '../tree';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type TreeSelectPassThroughOptionType = TreeSelectPassThroughAttributes | ((options: TreeSelectPassThroughMethodOptions) => TreeSelectPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TreeSelectPassThroughMethodOptions {
    instance: any;
    props: TreeSelectProps;
    state: TreeSelectState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TreeSelectProps.pt}
 */
export interface TreeSelectPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the label container's DOM element.
     */
    labelContainer?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the token's DOM element.
     */
    token?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the token label's DOM element.
     */
    tokenLabel?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the trigger's DOM element.
     */
    trigger?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the trigger icon's DOM element.
     */
    triggerIcon?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the panel's DOM element.
     */
    panel?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the wrapper's DOM element.
     */
    wrapper?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to Tree component.
     * @see {@link TreePassThroughOptionType}
     */
    tree?: TreePassThroughOptionType;
    /**
     * Uses to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input wrapper's DOM element.
     */
    hiddenInputWrapper?: TreeSelectPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: TreeSelectPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
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
     * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
     * @defaultValue 200px
     */
    scrollHeight?: string | undefined;
    /**
     * Label to display when there are no selections.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * Defines the selection mode.
     */
    selectionMode?: 'single' | 'multiple' | 'checkbox' | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.
     * @defaultValue No results found
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
     * @defaultValue true
     */
    metaKeySelection?: boolean | undefined;
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
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {TreeSelectPassThroughOptions}
     */
    pt?: TreeSelectPassThroughOptions;
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
     * Custom indicator template.
     * @deprecated since v3.27.0. Use 'triggericon' slot.
     */
    indicator(): VNode[];
    /**
     * Custom indicator template.
     */
    triggericon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
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
export interface TreeSelectEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
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
 */
declare class TreeSelect extends ClassComponent<TreeSelectProps, TreeSelectSlots, TreeSelectEmits> {
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

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TreeSelect: GlobalComponentConstructor<TreeSelect>;
    }
}

export default TreeSelect;
