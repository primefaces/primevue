/**
 *
 * Slider is a component to provide input with a drag handle.
 *
 * [Live Demo](https://www.primevue.org/slider/)
 *
 * @module slider
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';

export declare type SliderPassThroughOptionType = SliderPassThroughAttributes | ((options: SliderPassThroughMethodOptions) => SliderPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SliderPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SliderProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SliderProps.pt}
 */
export interface SliderPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SliderPassThroughOptionType;
    /**
     * Used to pass attributes to the range's DOM element.
     */
    range?: SliderPassThroughOptionType;
    /**
     * Used to pass attributes to the handle's DOM element.
     */
    handle?: SliderPassThroughOptionType;
    /**
     * Used to pass attributes to the start handler's DOM element.
     */
    startHandler?: SliderPassThroughOptionType;
    /**
     * Used to pass attributes to the end handler's DOM element.
     */
    endHandler?: SliderPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
 * @see {@link SliderEmitsOptions.slideend}
 */
export interface SliderSlideEndEvent {
    /**
     * Original event
     */
    originalEvent: Event;
    /**
     * New value.
     */
    value: number | number[];
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
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: number | number[] | undefined;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
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
    orientation?: HintedString<'horizontal' | 'vertical'> | undefined;
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
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
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
    ariaLabelledby?: string | undefined;
    /**
     * Used to define a string that labels the element.
     */
    ariaLabel?: string | undefined;
    /**
     * Form control object, typically used for handling validation and form state.
     */
    formControl?: Record<string, any> | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {SliderPassThroughOptions}
     */
    pt?: PassThrough<SliderPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
export interface SliderEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {number | number[]} value - New value.
     */
    'update:modelValue'(value: number | number[]): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {number | number[]} value - New value.
     */
    'value-change'(value: number | number[]): void;
    /**
     * Callback to invoke on value change.
     * @param {number | number[]} value - New value
     */
    change(value: number | number[]): void;
    /**
     * Callback to invoke when slide ends.
     * @param {SliderSlideEndEvent} event - Custom slide end event.
     */
    slideend(event: SliderSlideEndEvent): void;
}

export declare type SliderEmits = EmitFn<SliderEmitsOptions>;

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
declare const Slider: DefineComponent<SliderProps, SliderSlots, SliderEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Slider: DefineComponent<SliderProps, SliderSlots, SliderEmits>;
    }
}

export default Slider;
