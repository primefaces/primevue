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
import { TreeNode } from '../tree';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
     */
    indicator(): VNode[];
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
