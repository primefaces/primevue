/**
 *
 * ColorPicker groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/colorpicker/)
 *
 * @module colorpickerstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ColorPickerClasses {
    root = 'p-colorpicker',
    preview = 'p-colorpicker-preview',
    panel = 'p-colorpicker-panel',
    colorSelector = 'p-colorpicker-color-selector',
    colorBackground = 'p-colorpicker-color-background',
    colorHandle = 'p-colorpicker-color-handle',
    hue = 'p-colorpicker-hue',
    hueHandle = 'p-colorpicker-hue-handle'
}

export interface ColorPickerStyle extends BaseStyle {}
