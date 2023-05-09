/**
 *
 * TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value.
 *
 * [Live Demo](https://www.primevue.org/tristatecheckbox/)
 *
 * @module tristatecheckbox
 *
 */
import { InputHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

export declare type TriStateCheckboxPassThroughOptionType = TriStateCheckboxPassThroughAttributes | ((options: TriStateCheckboxPassThroughMethodOptions) => TriStateCheckboxPassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TriStateCheckboxPassThroughMethodOptions {
    props: TriStateCheckboxProps;
    state: TriStateCheckboxState;
    context: TriStateCheckboxContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TriStateCheckboxProps.pt}
 */
export interface TriStateCheckboxPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the checkbox box's DOM element.
     */
    checbox?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the check icon's DOM element.
     */
    checkIcon?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the uncheck icon's DOM element.
     */
    uncheckIcon?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the nullable icon's DOM element.
     */
    nullableIcon?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input wrapper's DOM element.
     */
    hiddenInputWrapper?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the sr only aria's DOM element.
     */
    srOnlyAria?: TriStateCheckboxPassThroughOptionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TriStateCheckboxPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in TriStateCheckbox component.
 */
export interface TriStateCheckboxState {
    /**
     * Focused state as a boolean.
     */
    focused: boolean;
}

/**
 * Defines current options in TriStateCheckbox component.
 */
export interface TriStateCheckboxContext {
    /**
     * Current active state as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current disabled state as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid properties in TriStateCheckbox component.
 */
export interface TriStateCheckboxProps {
    /**
     * Value of the component.
     * @defaultValue null
     */
    modelValue?: Nullable<boolean>;
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
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     * @deprecated since v3.26.0. Use 'pt' property.
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
     * @type {TriStateCheckboxPassThroughOptions}
     */
    pt?: TriStateCheckboxPassThroughOptions;
}

/**
 * Defines valid slots in TriStateCheckbox component.
 */
export interface TriStateCheckboxSlots {
    /**
     * Custom check icon template.
     */
    checkicon(): VNode[];
    /**
     * Custom uncheck icon template.
     */
    uncheckicon(): VNode[];
    /**
     * Custom nullable icon template.
     */
    nullableicon(): VNode[];
}

/**
 * Defines valid emits in TriStateCheckbox component.
 */
export interface TriStateCheckboxEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean|null|undefined} value - New value.
     */
    'update:modelValue'(value: Nullable<boolean>): void;
}

/**
 * **PrimeVue - TriStateCheckbox**
 *
 * _TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value._
 *
 * [Live Demo](https://www.primevue.org/tristatecheckbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TriStateCheckbox extends ClassComponent<TriStateCheckboxProps, TriStateCheckboxSlots, TriStateCheckboxEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TriStateCheckbox: GlobalComponentConstructor<TriStateCheckbox>;
    }
}

export default TriStateCheckbox;
