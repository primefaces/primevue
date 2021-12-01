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
