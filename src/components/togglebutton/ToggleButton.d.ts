import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type ToggleButtonType = 'left' | 'right' | undefined;

export interface ToggleButtonProps {
    /**
     * Value of the component.
     */
    modelValue?: boolean | undefined;
    /**
     * Icon for the on state.
     */
    onIcon?: string | undefined;
    /**
     * Icon for the off state.
     */
    offIcon?: string | undefined;
    /**
     * Label for the on state.
     * Default value is 'yes'.
     */
    onLabel?: string | undefined;
    /**
     * Label for the off state.
     * Default value is 'no'.
     */
    offLabel?: string | undefined;
    /**
     * Position of the icon.
     * @see ToggleButtonType
     * Default value is 'left'.
     */
    iconPos?: ToggleButtonType;
    /**
     * When present, it specifies that the element should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * 	Identifier of the focus input to match a label defined for the chips.
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

export interface ToggleButtonSlots {
}

export declare type ToggleButtonEmits = {
    /**
     * Emitted when the value changes.
     * @param {boolean} value - New value.
     */
    'update:modelValue': (value: boolean) => void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    'change': (event: Event) => void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    'focus': (event: Event) => void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    'blur': (event: Event) => void;
}

declare class ToggleButton extends ClassComponent<ToggleButtonProps, ToggleButtonSlots, ToggleButtonEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ToggleButton: GlobalComponentConstructor<ToggleButton>
    }
}

/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * Demos:
 *
 * - [ToggleButton](https://www.primefaces.org/primevue/showcase/#/togglebutton)
 *
 */
export default ToggleButton;
