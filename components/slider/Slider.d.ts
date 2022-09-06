import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type SliderOrientationType = 'horizontal' | 'vertical' | undefined;

export interface SliderSlideEndEvent {
    /**
     * Original event
     */
    originalEvent: Event;
    /**
     * New value.
     */
    value: number;
}

export interface SliderProps {
    /**
     * Value of the component.
     * Default value is 0.
     */
    modelValue?: number | number[] | undefined;
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
     * Orientation of the slider.
     * @see SliderOrientationType
     * Default value is 'horizontal'.
     */
    orientation?: SliderOrientationType;
    /**
     * Step factor to increment/decrement the value.
     * Default value is 1.
     */
    step?: number | undefined;
    /**
     * When speficed, allows two boundary values to be picked.
     */
    range?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
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

export interface SliderSlots {
}

export declare type SliderEmits = {
    /**
     * Emitted when the value changes.
     * @param {number | number[]} value - New value.
     */
    'update:modelValue': (value: number | number[]) => void;
    /**
     * Callback to invoke on value change.
     * @param {number} value - New value
     */
    'change': (value: number) => void;
    /**
     * Callback to invoke when slide ends.
     * @param {SliderSlideEndEvent} event - Custom slide end event.
     */
    'slideend': (event: SliderSlideEndEvent) => void;
}

declare class Slider extends ClassComponent<SliderProps, SliderSlots, SliderEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Slider: GlobalComponentConstructor<Slider>
    }
}

/**
 *
 * Slider is an input component to provide a numerical input.
 *
 * Demos:
 *
 * - [Slider](https://www.primefaces.org/primevue/showcase/#/slider)
 *
 */
export default Slider;
