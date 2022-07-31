import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface KnobProps {
    /**
     * Value of the component.
     */
    modelValue?: number | undefined;
    /**
     * Size of the component in pixels.
     * Default value is 100.
     */
    size?: number | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the component value cannot be edited.
     */
    readonly?: boolean | undefined;
    /**
     * Step factor to increment/decrement the value.
     */
    step?: number | undefined;
    /**
     * Mininum boundary value.
     * Default value is 0.
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * Default value is 100.
     */
    max?: number | undefined;
    /**
     * Background of the value.
     */
    valueColor?: string | undefined;
    /**
     * Background color of the range.
     */
    rangeColor?: string | undefined;
    /**
     * Color of the value text.
     */
    textColor?: string | undefined;
    /**
     * Width of the knob stroke.
     * Default value is 14.
     */
    strokeWidth?: number | undefined;
    /**
     * Whether the show the value inside the knob.
     * Default value is true.
     */
    showValue?: boolean | undefined;
    /**
     * Template string of the value.
     * Default value is '{value}'.
     */
    valueTemplate?: string | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
       * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
       */
    'aria-labelledby'?: string | undefined;
    /**
       * Used to define a string that labels the element.
       */
    'aria-label'?: string | undefined;
}

export interface KnobSlots {
}

export declare type KnobEmits = {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue': (value: number) => void;
    /**
     * Callback to invoke when the value changes.
     * @param {number} value - New value
     */
    'change': (value: number) => void;
}

declare class Knob extends ClassComponent<KnobProps, KnobSlots, KnobEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Knob: GlobalComponentConstructor<Knob>
    }
}

/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * Demos:
 *
 * - [Knob](https://www.primefaces.org/primevue/showcase/#/knob)
 *
 */
export default Knob;
