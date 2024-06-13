/**
 *
 * InputNumber is an input component to provide numerical input.
 *
 * [Live Demo](https://www.primevue.org/inputnumber/)
 *
 * @module inputnumberstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum InputNumberClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inputnumber',
    /**
     * Class name of the input element
     */
    pcInput = 'p-inputnumber-input',
    /**
     * Class name of the button group element
     */
    buttonGroup = 'p-inputnumber-button-group',
    /**
     * Class name of the increment button element
     */
    incrementButton = 'p-inputnumber-increment-button',
    /**
     * Class name of the decrement button element
     */
    decrementButton = 'p-inputnumber-decrement-button'
}

export interface InputNumberStyle extends BaseStyle {}
