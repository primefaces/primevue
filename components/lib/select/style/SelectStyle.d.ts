/**
 *
 * Select also known as Select, is used to choose an item from a collection of options.
 *
 * [Live Demo](https://www.primevue.org/select/)
 *
 * @module selectstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum SelectClasses {
    root = 'p-select',
    label = 'p-select-label',
    clearIcon = 'p-select-clear-icon',
    dropdown = 'p-select-dropdown',
    loadingicon = 'p-select-loading-icon',
    dropdownIcon = 'p-select-dropdown-icon',
    overlay = 'p-select-overlay',
    header = 'p-select-header',
    pcFilter = 'p-select-filter',
    listContainer = 'p-select-list-container',
    list = 'p-select-list',
    optionGroup = 'p-select-option-group',
    optionGroupLabel = 'p-select-option-group-label',
    option = 'p-select-option',
    optionLabel = 'p-select-option-label',
    optionCheckIcon = 'p-select-option-check-icon',
    optionBlankIcon = 'p-select-option-blank-icon',
    emptyMessage = 'p-select-empty-message'
}

export interface SelectStyle extends BaseStyle {}
