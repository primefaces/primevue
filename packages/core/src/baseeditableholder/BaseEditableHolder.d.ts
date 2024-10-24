/**
 *
 * [Live Demo](https://primevue.org/)
 *
 * @module baseeditableholder
 *
 */
export interface BaseEditableHolderProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: any;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * Disables the element, making it non-interactive and unclickable.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Form control object, typically used for handling validation and form state.
     */
    formControl?: Record<string, any> | undefined;
}

export interface BaseEditableHolderEmitsOptions {
    /**
     * Emitted when the value changes in controlled mode.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {*} value - New value.
     */
    'value-change'(value: any): void;
}
