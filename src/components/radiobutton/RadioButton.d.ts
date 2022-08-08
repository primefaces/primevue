import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface RadioButtonProps {
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
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any;
    /**
     * Style class of the input field.
     */
    inputClass?: any;
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

export interface RadioButtonSlots {
}

export declare type RadioButtonEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
     * Callback to invoke on radio button click.
     * @param {Event} event - Browser event.
     */
    'click': (event: Event) => void;
    /**
     * Callback to invoke on radio button value change.
     * @param {Event} event - Browser event.
     */
    'change': (event: Event) => void;
}

declare class RadioButton extends ClassComponent<RadioButtonProps, RadioButtonSlots, RadioButtonEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        RadioButton: GlobalComponentConstructor<RadioButton>
    }
}

/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * Demos:
 *
 * - [RadioButton](https://www.primefaces.org/primevue/showcase/#/radiobutton)
 *
 */
export default RadioButton;
