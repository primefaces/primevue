/**
 *
 * Select also known as Select, is used to choose an item from a collection of options.
 *
 * [Live Demo](https://www.primevue.org/select/)
 *
 * @module selectstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum SelectClasses {
    /**
     * Class name of the root element
     */
    root = 'p-select',
    /**
     * Class name of the label element
     */
    label = 'p-select-label',
    /**
     * Class name of the clear icon element
     */
    clearIcon = 'p-select-clear-icon',
    /**
     * Class name of the dropdown element
     */
    dropdown = 'p-select-dropdown',
    /**
     * Class name of the loadingicon element
     */
    loadingicon = 'p-select-loading-icon',
    /**
     * Class name of the dropdown icon element
     */
    dropdownIcon = 'p-select-dropdown-icon',
    /**
     * Class name of the overlay element
     */
    overlay = 'p-select-overlay',
    /**
     * Class name of the header element
     */
    header = 'p-select-header',
    /**
     * Class name of the filter element
     */
    pcFilter = 'p-select-filter',
    /**
     * Class name of the list container element
     */
    listContainer = 'p-select-list-container',
    /**
     * Class name of the list element
     */
    list = 'p-select-list',
    /**
     * Class name of the option group element
     */
    optionGroup = 'p-select-option-group',
    /**
     * Class name of the option group label element
     */
    optionGroupLabel = 'p-select-option-group-label',
    /**
     * Class name of the option element
     */
    option = 'p-select-option',
    /**
     * Class name of the option label element
     */
    optionLabel = 'p-select-option-label',
    /**
     * Class name of the option check icon element
     */
    optionCheckIcon = 'p-select-option-check-icon',
    /**
     * Class name of the option blank icon element
     */
    optionBlankIcon = 'p-select-option-blank-icon',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-select-empty-message'
}

export interface SelectStyle extends BaseStyle {}
