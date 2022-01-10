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
     * Allows to select a boolean value instead of multiple values.
     */
    binary?: boolean;
    /**
     * Style class of the component input field.
     */
    class?: any;
    /**
     * Inline style of the component.
     */
    style?: any;
    /**
     * Value in checked state.
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     */
    falseValue?: any;
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
