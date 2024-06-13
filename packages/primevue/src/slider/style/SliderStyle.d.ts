/**
 *
 * Slider is a component to provide input with a drag handle.
 *
 * [Live Demo](https://www.primevue.org/slider/)
 *
 * @module sliderstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum SliderClasses {
    /**
     * Class name of the root element
     */
    root = 'p-slider',
    /**
     * Class name of the range element
     */
    range = 'p-slider-range',
    /**
     * Class name of the handle element
     */
    handle = 'p-slider-handle'
}

export interface SliderStyle extends BaseStyle {}
