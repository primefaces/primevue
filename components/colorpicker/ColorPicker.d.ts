import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type ColorPickerFormatType = 'hex' | 'rgb' | 'hsb' | undefined;

type ColorPickerAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

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

export interface ColorPickerProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * Initial color to display when value is not defined.
     * Default value is ff0000.
     */
    defaultColor?: any;
    /**
     * Whether to display as an overlay or not.
     */
    inline?: boolean | undefined;
    /**
     * Format to use in value binding, supported formats are 'hex', 'rgb' and 'hsb'.
     * @see ColorPickerFormatType
     * Default value is 'hex'.
     */
    format?: ColorPickerFormatType;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see ColorPickerAppendToType
     * Default value is 'body'.
     */
    appendTo?: ColorPickerAppendToType;
}

export interface ColorPickerSlots {
}

export declare type ColorPickerEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: any) => void;
    /**
      * Callback to invoke when a chip is added.
      * @param {ColorPickerChangeEvent} event - Custom add event.
      */
    'change': (event: ColorPickerChangeEvent) => void;
    /**
     * Callback to invoke when input is cleared by the user.
     */
    'show': () => void;
    /**
     * Callback to invoke when input is cleared by the user.
     */
    'hide': () => void;
}

declare class ColorPicker extends ClassComponent<ColorPickerProps, ColorPickerSlots, ColorPickerEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ColorPicker: GlobalComponentConstructor<ColorPicker>
    }
}

/**
 *
 * ColorPicker is an input component to select a color.
 *
 * Demos:
 *
 * - [ColorPicker](https://www.primefaces.org/primevue/showcase/#/colorpicker)
 *
 */
export default ColorPicker;
