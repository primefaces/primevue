/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * [Live Demo](https://www.primevue.org/knob/)
 *
 * @module knob
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';

export declare type KnobPassThroughOptionType = KnobPassThroughAttributes | ((options: KnobPassThroughMethodOptions) => KnobPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface KnobPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: KnobProps;
    /**
     * Defines current inline state.
     */
    state: KnobState;
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
 * @see {@link KnobProps.pt}
 */
export interface KnobPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: KnobPassThroughOptionType;
    /**
     * Used to pass attributes to the svg's DOM element.
     */
    svg?: KnobPassThroughOptionType;
    /**
     * Used to pass attributes to the range's DOM element.
     */
    range?: KnobPassThroughOptionType;
    /**
     * Used to pass attributes to the value' DOM element.
     */
    value?: KnobPassThroughOptionType;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: KnobPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface KnobPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Knob component.
 */
export interface KnobState {
    /**
     * Current radius state as a number.
     * @defaultValue 40
     */
    radius: number;
    /**
     * Current middle x axis state as a number.
     * @defaultValue 50
     */
    midX: number;
    /**
     * Current middle y axis state as a number.
     * @defaultValue 50
     */
    midY: number;
    /**
     * Current minimum radian state as a number.
     */
    minRadians: number;
    /**
     * Current maximum radian state as a number.
     */
    maxRadians: number;
}

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
     * @defaultValue $dt('knob.value.background')
     */
    valueColor?: string | undefined;
    /**
     * Background color of the range.
     * @defaultValue $dt('knob.range.background')
     */
    rangeColor?: string | undefined;
    /**
     * Color of the value text.
     * @defaultValue $dt('knob.text.color')
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
    valueTemplate?: (val: number) => string | string | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {KnobPassThroughOptions}
     */
    pt?: PassThrough<KnobPassThroughOptions>;
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
 * Defines valid slots in Knob component.
 */
export interface KnobSlots {}

/**
 * Defines valid emits in Knob component.
 */
export interface KnobEmitsOptions {
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

export declare type KnobEmits = EmitFn<KnobEmitsOptions>;

/**
 * **PrimeVue - Knob**
 *
 * _Knob groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/knob/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Knob: DefineComponent<KnobProps, KnobSlots, KnobEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Knob: GlobalComponentConstructor<KnobProps, KnobSlots, KnobEmits>;
    }
}

export default Knob;
