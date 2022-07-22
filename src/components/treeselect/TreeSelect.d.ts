import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { TreeNode } from '../tree';

type TreeSelectSelectionModeType = 'single' | 'multiple' | 'checkbox' | undefined;

type TreeSelectAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

type TreeSelectDisplayType = 'comma' | 'chip' | undefined;

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
     * Default value is '200px'.
     */
    scrollHeight?: string | undefined;
    /**
     * Label to display when there are no selections.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * Defines the selection mode.
     * @see TreeSelectSelectionModeType
     */
    selectionMode?: TreeSelectSelectionModeType;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see TreeSelectAppendToType
     * Default value is 'body'.
     */
    appendTo?: TreeSelectAppendToType;
    /**
     * Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.
     * Default value is 'No results found'.
     */
    emptyMessage?: string | undefined;
    /**
     * Defines how the selected items are displayed.
     * @see TreeSelectDisplayType
     * Default value is 'comma'.
     */
    display?: TreeSelectDisplayType;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
     * Default value is true.
     */
    metaKeySelection?: boolean | undefined;
    /**
     * 	Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: any | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any | undefined;
    /**
     * 
     */
    inputProps?: object | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
      * Establishes a string value that labels the component.
      */
    'aria-label'?: string | undefined;
}

export interface TreeSelectSlots {
    /**
     * Custom value template.
     * @param {Object} scope - value slot's params.
     */
    value: (scope: {
        /**
         * Selected value
         */
        value: TreeNode | any;
        /**
         * Placeholder
         */
        placeholder: string;
    }) => VNode[];
    /**
     * Custom header template.
     * @param {Object} scope - header slot's params.
     */
    header: (scope: {
        /**
         * Selected value
         */
        value: TreeNode | any;
        /**
         * An array of treenodes.
         */
        options: TreeNode[];
    }) => VNode[];
    /**
     * Custom footer template.
     * @param {Object} scope - footer slot's params.
     */
    footer: (scope: {
        /**
         * Selected value
         */
        value: TreeNode | any;
        /**
         * An array of treenodes.
         */
        options: TreeNode[];
    }) => VNode[];
    /**
     * Custom empty template.
     */
    empty: () => VNode[];
    /**
     * Custom indicator template.
     */
    indicator: () => VNode[];
}

export declare type TreeSelectEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
     * Callback to invoke on value change.
     * @param {*} value - Selected node keys
     */
    'change': (value: string[]) => void;
    /**
     * Callback to invoke before the overlay is shown.
     */
    'before-show': () => void;
    /**
     * Callback to invoke before the overlay is hidden.
     */
    'before-hide': () => void;
    /**
     * Callback to invoke when the overlay is shown.
     */
    'show': () => void;
    /**
     * Callback to invoke when the overlay is hidden.
     */
    'hide': () => void;
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
        TreeSelect: GlobalComponentConstructor<TreeSelect>
    }
}

/**
 *
 * TreeSelect is a form component to choose from hierarchical data.
 *
 * Helper API:
 *
 * - TreeNode
 *
 * Demos:
 *
 * - [TreeSelect](https://www.primefaces.org/primevue/showcase/#/treeselect)
 *
 */
export default TreeSelect;
