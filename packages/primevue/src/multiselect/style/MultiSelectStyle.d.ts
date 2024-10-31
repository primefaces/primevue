/**
 *
 * MultiSelect is used to select multiple items from a collection.
 *
 * [Live Demo](https://www.primevue.org/multiselect/)
 *
 * @module multiselectstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum MultiSelectClasses {
    /**
     * Class name of the root element
     */
    root = 'p-multiselect',
    /**
     * Class name of the label container element
     */
    labelContainer = 'p-multiselect-label-container',
    /**
     * Class name of the label element
     */
    label = 'p-multiselect-label',
    /**
     * Class name of the clear icon element
     */
    clearIcon = 'p-multiselect-clear-icon',
    /**
     * Class name of the chip item element
     */
    chipItem = 'p-multiselect-chip-item',
    /**
     * Class name of the chip element
     */
    pcChip = 'p-multiselect-chip',
    /**
     * Class name of the chip icon element
     */
    chipIcon = 'p-multiselect-chip-icon',
    /**
     * Class name of the dropdown element
     */
    dropdown = 'p-multiselect-dropdown',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-multiselect-loading-icon',
    /**
     * Class name of the dropdown icon element
     */
    dropdownIcon = 'p-multiselect-dropdown-icon',
    /**
     * Class name of the overlay element
     */
    overlay = 'p-multiselect-overlay',
    /**
     * Class name of the header element
     */
    header = 'p-multiselect-header',
    /**
     * Class name of the filter container element
     */
    pcFilterContainer = 'p-multiselect-filter-container',
    /**
     * Class name of the filter element
     */
    pcFilter = 'p-multiselect-filter',
    /**
     * Class name of the list container element
     */
    listContainer = 'p-multiselect-list-container',
    /**
     * Class name of the list element
     */
    list = 'p-multiselect-list',
    /**
     * Class name of the option group element
     */
    optionGroup = 'p-multiselect-option-group',
    /**
     * Class name of the option element
     */
    option = 'p-multiselect-option',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-multiselect-empty-message'
}

export interface MultiSelectStyle extends BaseStyle {}
