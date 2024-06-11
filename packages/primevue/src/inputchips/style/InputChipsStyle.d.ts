/**
 *
 * InputChips groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/inputchips/)
 *
 * @module inputchipsstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum InputChipsClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inputchips',
    /**
     * Class name of the input element
     */
    input = 'p-inputchips-input',
    /**
     * Class name of the chip item element
     */
    chipItem = 'p-inputchips-chip-item',
    /**
     * Class name of the chip element
     */
    pcChip = 'p-inputchips-chip-label',
    /**
     * Class name of the chip icon element
     */
    chipIcon = 'p-inputchips-chip-icon',
    /**
     * Class name of the input item element
     */
    inputItem = 'p-inputchips-input-item'
}

export interface InputChipsStyle extends BaseStyle {}
