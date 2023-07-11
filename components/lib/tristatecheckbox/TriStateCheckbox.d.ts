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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

export declare type TriStateCheckboxPassThroughOptionType = TriStateCheckboxPassThroughAttributes | ((options: TriStateCheckboxPassThroughMethodOptions) => TriStateCheckboxPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TriStateCheckboxPassThroughMethodOptions {
    instance: any;
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
    checkbox?: TriStateCheckboxPassThroughOptionType;
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
     * Uses to pass attributes to the hidden value label's DOM element.
     */
    hiddenValueLabel?: TriStateCheckboxPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
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
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in TriStateCheckbox component.
 */
export interface TriStateCheckboxSlots {
    /**
     * Custom check icon template.
     */
    checkicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom uncheck icon template.
     */
    uncheckicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom nullable icon template.
     */
    nullableicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
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
