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
     * Style class of the component input field.
     */
    class?: any;
    /**
     * Inline style of the component.
     */
    style?: any;
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
