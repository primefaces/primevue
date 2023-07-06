/**
 *
 * Slider is a component to provide input with a drag handle.
 *
 * [Live Demo](https://www.primevue.org/slider/)
 *
 * @module slider
 *
 */
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type SliderPassThroughOptionType = SliderPassThroughAttributes | ((options: SliderPassThroughMethodOptions) => SliderPassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SliderPassThroughMethodOptions {
    instance: any;
    props: SliderProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SliderProps.pt}
 */
export interface SliderPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: SliderPassThroughOptionType;
    /**
     * Uses to pass attributes to the range's DOM element.
     */
    range?: SliderPassThroughOptionType;
    /**
     * Uses to pass attributes to the handle's DOM element.
     */
    handle?: SliderPassThroughOptionType;
    /**
     * Uses to pass attributes to the start handler's DOM element.
     */
    startHandler?: SliderPassThroughOptionType;
    /**
     * Uses to pass attributes to the end handler's DOM element.
     */
    endHandler?: SliderPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SliderPassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom slide end event.
 * @see {@link SliderEmits.slideend}
 */
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

/**
 * Defines valid properties in Slider component.
 */
export interface SliderProps {
    /**
     * Value of the component.
     */
    modelValue?: number | number[] | undefined;
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
     * Orientation of the slider.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Step factor to increment/decrement the value.
     * @defaultValue 1
     */
    step?: number | undefined;
    /**
     * When speficed, allows two boundary values to be picked.
     * @defaultValue false
     */
    range?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {SliderPassThroughOptions}
     */
    pt?: SliderPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Slider component.
 */
export interface SliderSlots {}

/**
 * Defines valid emits in Slider component.
 */
export interface SliderEmits {
    /**
     * Emitted when the value changes.
     * @param {number | number[]} value - New value.
     */
    'update:modelValue'(value: number | number[]): void;
    /**
     * Callback to invoke on value change.
     * @param {number} value - New value
     */
    change(value: number): void;
    /**
     * Callback to invoke when slide ends.
     * @param {SliderSlideEndEvent} event - Custom slide end event.
     */
    slideend(event: SliderSlideEndEvent): void;
}

/**
 * **PrimeVue - Slider**
 *
 * _Slider is a component to provide input with a drag handle._
 *
 * [Live Demo](https://www.primevue.org/slider/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Slider extends ClassComponent<SliderProps, SliderSlots, SliderEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Slider: GlobalComponentConstructor<Slider>;
    }
}

export default Slider;
