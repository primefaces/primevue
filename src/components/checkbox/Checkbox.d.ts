import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
     */
    binary?: boolean;
    /**
     * When present, it specifies that the element should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     */
    readonly?: boolean | undefined;
    /**
     * When present, it specifies that the element is required.
     */
    required?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * Value in checked state.
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     */
    falseValue?: any;
    /**
     * Identifier of the underlying input element.
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
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: HTMLInputElement | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

export interface CheckboxSlots {
}

export declare type CheckboxEmits = {
    /**
     * Emitted when the page changes.
     * @param {*} value - New page value.
     */
    'update:page': (value: any) => void;
    /**
     * Callback to invoke on value click.
     * @param {MouseEvent} event - Browser event.
     */
    'click': (event: MouseEvent) => void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    'change': (event: Event) => void;
    /**
     * Callback to invoke on value change.
     * @param {boolean} value - New value.
     */
    'input': (value: boolean) => void;
}

declare class Checkbox extends ClassComponent<CheckboxProps, CheckboxSlots, CheckboxEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Checkbox: GlobalComponentConstructor<Checkbox>
    }
}

/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * Demos:
 *
 * - [Checkbox](https://www.primefaces.org/primevue/showcase/#/checkbox)
 *
 */
export default Checkbox;
