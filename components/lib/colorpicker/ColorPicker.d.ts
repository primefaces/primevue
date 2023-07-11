/**
 *
 * ColorPicker groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/colorpicker/)
 *
 * @module colorpicker
 *
 */
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ColorPickerPassThroughOptionType = ColorPickerPassThroughAttributes | ((options: ColorPickerPassThroughMethodOptions) => ColorPickerPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ColorPickerPassThroughMethodOptions {
    instance: any;
    props: ColorPickerProps;
    state: ColorPickerState;
}

/**
 * Custom change event.
 * @see {@link ColorPickerEmits.change}
 */
export interface ColorPickerChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
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
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the input's DOM element.
     */
    input?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the panel's DOM element.
     */
    panel?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the selector's DOM element.
     */
    selector?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the color's DOM element.
     */
    color?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the color handler's DOM element.
     */
    colorHandle?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the hue's DOM element.
     */
    hue?: ColorPickerPassThroughOptionType;
    /**
     * Uses to pass attributes to the hue handler's DOM element.
     */
    hueHandle: ColorPickerPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
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
     * Whether to display as an overlay or not.
     * @defaultValue false
     */
    inline?: boolean | undefined;
    /**
     * Format to use in value binding, supported formats are 'hex', 'rgb' and 'hsb'.
     * @defaultValue hex
     */
    format?: 'hex' | 'rgb' | 'hsb' | undefined;
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
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ColorPickerPassThroughOptions}
     */
    pt?: ColorPickerPassThroughOptions;
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
export interface ColorPickerEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke when a chip is added.
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
declare class ColorPicker extends ClassComponent<ColorPickerProps, ColorPickerSlots, ColorPickerEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ColorPicker: GlobalComponentConstructor<ColorPicker>;
    }
}

export default ColorPicker;
