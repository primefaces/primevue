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
 * Defines valid properties in Knob component.
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
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the component value cannot be edited.
     * @defaultValue false
     */
    readonly?: boolean | undefined;
    /**
     * Step factor to increment/decrement the value.
     * @defaultValue 1
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
     * @defaultValue var(--primary-color, Black)
     */
    valueColor?: string | undefined;
    /**
     * Background color of the range.
     * @defaultValue var(--surface-border, LightGray)
     */
    rangeColor?: string | undefined;
    /**
     * Color of the value text.
     * @defaultValue var(--text-color-secondary, Black)
     */
    textColor?: string | undefined;
    /**
     * Width of the knob stroke.
     * @defaultValue 14
     */
    strokeWidth?: number | undefined;
    /**
     * Whether the show the value inside the knob.
     * @defaultValue true
     */
    showValue?: boolean | undefined;
    /**
     * Template string of the value.
     * @defaultValue '{value}'
     */
    valueTemplate?: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
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
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 */
declare class Knob extends ClassComponent<KnobProps, KnobSlots, KnobEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Knob: GlobalComponentConstructor<Knob>;
    }
}

export default Knob;
