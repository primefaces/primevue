/**
 *
 * MultiSelect is used to select multiple items from a collection.
 *
 * [Live Demo](https://www.primevue.org/multiselect/)
 *
 * @module multiselectstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum MultiSelectClasses {
    root = 'p-multiselect',
    labelContainer = 'p-multiselect-label-container',
    label = 'p-multiselect-label',
    chip = 'p-multiselect-chip',
    pcChipLabel = 'p-multiselect-chip-label',
    chipIcon = 'p-multiselect-chip-icon',
    dropdown = 'p-multiselect-dropdown',
    loadingIcon = 'p-multiselect-loading-icon',
    dropdownIcon = 'p-multiselect-dropdown-icon',
    overlay = 'p-multiselect-overlay',
    header = 'p-multiselect-header',
    pcFilterContainer = 'p-multiselect-filter-container',
    pcFilter = 'p-multiselect-filter',
    listContainer = 'p-multiselect-list-container',
    list = 'p-multiselect-list',
    optionGroup = 'p-multiselect-option-group',
    option = 'p-multiselect-option',
    emptyMessage = 'p-multiselect-empty-message'
}

export interface MultiSelectStyle extends BaseStyle {}
