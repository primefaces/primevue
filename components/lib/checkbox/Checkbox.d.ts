/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 *
 * @module checkbox
 *
 */
import { InputHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type CheckboxPassThroughOptionType = CheckboxPassThroughAttributes | ((options: CheckboxPassThroughMethodOptions) => CheckboxPassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CheckboxPassThroughMethodOptions {
    props: CheckboxProps;
    state: CheckboxState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link CheckboxProps.pt}
 */
export interface CheckboxPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: CheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the input's DOM element.
     */
    input?: CheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: CheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input wrapper's DOM element.
     */
    hiddenInputWrapper?: CheckboxPassThroughOptionType;
    /**
     * Uses to pass attributes to the hidden input's DOM element.
     */
    hiddenInput?: CheckboxPassThroughOptionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CheckboxPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Checkbox component.
 */
export interface CheckboxState {
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
}

/**
 * Defines valid properties in Checkbox component.
 */
export interface CheckboxProps {
    /**
     * Value of the checkbox.
     */
    value?: any;
    /**
     * Value binding of the checkbox.
     */
    modelValue?: any;
    /**
     * Name of the input element.
     */
    name?: string | undefined;
    /**
     * Allows to select a boolean value instead of multiple values.
     * @default false
     */
    binary?: boolean;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * When present, it specifies that the element is required.
     * @default false
     */
    required?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * Value in checked state.
     * @default true
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     * @default false
     */
    falseValue?: any;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: object | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: string | object | undefined;
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
     * @type {CheckboxPassThroughOptions}
     */
    pt?: CheckboxPassThroughOptions;
}

export interface CheckboxSlots {
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * State of the checkbox.
         */
        checked: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in Checkbox component.
 */
export interface CheckboxEmits {
    /**
     * Emitted when the page changes.
     * @param {*} value - New page value.
     */
    'update:page'(value: any): void;
    /**
     * Callback to invoke on value click.
     * @param {MouseEvent} event - Browser event.
     */
    click(event: MouseEvent): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
    /**
     * Callback to invoke on value change.
     * @param {boolean} value - New value.
     */
    input(value: boolean): void;
}

/**
 * **PrimeVue - Checkbox**
 *
 * _Accordion groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Checkbox extends ClassComponent<CheckboxProps, CheckboxSlots, CheckboxEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Checkbox: GlobalComponentConstructor<Checkbox>;
    }
}

export default Checkbox;
