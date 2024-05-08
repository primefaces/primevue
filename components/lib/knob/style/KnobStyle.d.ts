/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * [Live Demo](https://www.primevue.org/knob/)
 *
 * @module knobstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum KnobClasses {
    root = 'p-knob',
    range = 'p-knob-range',
    value = 'p-knob-value',
    text = 'p-knob-text'
}

export interface KnobStyle extends BaseStyle {}
