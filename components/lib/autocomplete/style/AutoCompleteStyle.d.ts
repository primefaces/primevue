/**
 *
 * AutoComplete is an input component that provides real-time suggestions while being typed.
 *
 * [Live Demo](https://www.primevue.org/autocomplete/)
 *
 * @module autocompletestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum AutoCompleteClasses {
    root = 'p-autocomplete',
    pcInput = 'p-autocomplete-input',
    inputMultiple = 'p-autocomplete-input-multiple',
    chipItem = 'p-autocomplete-chip-item',
    pcChip = 'p-autocomplete-chip',
    chipIcon = 'p-autocomplete-chip-icon',
    inputChip = 'p-autocomplete-input-chip',
    loader = 'p-autocomplete-loader',
    dropdown = 'p-autocomplete-dropdown',
    panel = 'p-autocomplete-overlay',
    list = 'p-autocomplete-list',
    optionGroup = 'p-autocomplete-option-group',
    option = 'p-autocomplete-option',
    emptyMessage = 'p-autocomplete-empty-message'
}

export interface AutoCompleteStyle extends BaseStyle {}
