/**
 *
 * InputNumber is an input component to provide numerical input.
 *
 * [Live Demo](https://www.primevue.org/inputnumber/)
 *
 * @module inputnumberstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum InputNumberClasses {
    root = 'p-inputnumber',
    pcInput = 'p-inputnumber-input',
    buttonGroup = 'p-inputnumber-button-group',
    incrementButton = 'p-inputnumber-increment-button',
    decrementButton = 'p-inputnumber-decrement-button'
}

export interface InputNumberStyle extends BaseStyle {}
