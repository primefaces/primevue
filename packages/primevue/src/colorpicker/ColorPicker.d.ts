/**
 *
 * ColorPicker groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/colorpicker/)
 *
 * @module colorpicker
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps } from 'vue';

export declare type ColorPickerPassThroughOptionType = ColorPickerPassThroughAttributes | ((options: ColorPickerPassThroughMethodOptions) => ColorPickerPassThroughAttributes | string) | string | null | undefined;

export declare type ColorPickerPassThroughTransitionType = TransitionProps | ((options: ColorPickerPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ColorPickerPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ColorPickerProps;
    /**
     * Defines current inline state.
     */
    state: ColorPickerState;
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
 * Custom change event.
 * @see {@link ColorPickerEmitsOptions.change}
 */
export interface ColorPickerChangeEvent {
    /**
     * Browser event
     */
    event: Event;
    /**
     * Selected color value.
     */
    value: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ColorPickerProps.pt}
 */
export interface ColorPickerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the preview's DOM element.
     */
    preview?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    overlay?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the color selector's DOM element.
     */
    colorSelector?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the color background's DOM element.
     */
    colorBackground?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the color handler's DOM element.
     */
    colorHandle?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the hue's DOM element.
     */
    hue?: ColorPickerPassThroughOptionType;
    /**
     * Used to pass attributes to the hue handler's DOM element.
     */
    hueHandle: ColorPickerPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: ColorPickerPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ColorPickerPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in ColorPicker component.
 */
export interface ColorPickerState {
    /**
     * Current overlay visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
}

/**
 * Defines valid properties in ColorPicker component.
 */
export interface ColorPickerProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * Initial color to display when value is not defined.
     * @defaultValue ff0000
     */
    defaultColor?: any;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: any;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * Whether to display as an overlay or not.
     * @defaultValue false
     */
    inline?: boolean | undefined;
    /**
     * Format to use in value binding, supported formats are 'hex', 'rgb' and 'hsb'.
     * @defaultValue hex
     */
    format?: HintedString<'hex' | 'rgb' | 'hsb'> | undefined;
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
    tabindex?: string | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Identifier of the focus input to match a label defined for the dropdown.
     */
    inputId?: string | undefined;
    /**
     * Style class of the overlay panel.
     * @deprecated since v4.0. Use 'overlayClass' prop instead.
     */
    panelClass?: any;
    /**
     * Style class of the overlay panel.
     */
    overlayClass?: any;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
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
     * @type {ColorPickerPassThroughOptions}
     */
    pt?: PassThrough<ColorPickerPassThroughOptions>;
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

export interface ColorPickerSlots {}

/**
 * Defines valid emits in ColorPicker component.
 */
export interface ColorPickerEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {*} value - New value.
     */
    'value-change'(value: any): void;
    /**
     * Callback to invoke when a color is selected.
     * @param {ColorPickerChangeEvent} event - Custom add event.
     */
    change(event: ColorPickerChangeEvent): void;
    /**
     * Callback to invoke when input is cleared by the user.
     */
    show(): void;
    /**
     * Callback to invoke when input is cleared by the user.
     */
    hide(): void;
}

export declare type ColorPickerEmits = EmitFn<ColorPickerEmitsOptions>;

/**
 * **PrimeVue - ColorPicker**
 *
 * _ColorPicker groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/colorpicker/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ColorPicker: DefineComponent<ColorPickerProps, ColorPickerSlots, ColorPickerEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ColorPicker: DefineComponent<ColorPickerProps, ColorPickerSlots, ColorPickerEmits>;
    }
}

export default ColorPicker;
