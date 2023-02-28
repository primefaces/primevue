/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * [Live Demo](https://www.primevue.org/knob/)
 *
 * @module knob
 *
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Knob component. In addition to these, all properties of HTMLDivElement can be used in this component.
 */
export interface KnobProps {
    /**
     * Value of the component.
     */
    modelValue?: number | undefined;
    /**
     * Size of the component in pixels.
     * @defaultValue 100
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
     * @defaultValue 0
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * @defaultValue 100
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
     * @defaultValue 100
     */
    strokeWidth?: number | undefined;
    /**
     * Whether the show the value inside the knob.
     */
    showValue?: boolean | undefined;
    /**
     * Template string of the value.
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

/**
 * Defines valid slots in Knob component.
 */
export interface KnobSlots {}

/**
 * Defines valid emits in Knob component.
 */
export interface KnobEmits {
    /**
     * Emitted when the value changes.
     * @param {number} event - New value.
     */
    'update:modelValue'(value: number): void;
    /**
     * Callback to invoke when the value changes.
     * @param {number} event - New value
     */
    change(value: number): void;
}

/**
 * **PrimeVue - Knob**
 *
 * _Knob groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/knob/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 */
export declare class Knob extends ClassComponent<KnobProps, KnobSlots, KnobEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Knob: GlobalComponentConstructor<Knob>;
    }
}

export default Knob;
