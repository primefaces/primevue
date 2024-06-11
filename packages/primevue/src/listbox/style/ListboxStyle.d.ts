/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primevue.org/listbox/)
 *
 * @module listboxstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum ListboxClasses {
    /**
     * Class name of the root element
     */
    root = 'p-listbox',
    /**
     * Class name of the header element
     */
    header = 'p-listbox-header',
    /**
     * Class name of the filter element
     */
    pcFilter = 'p-listbox-filter',
    /**
     * Class name of the list container element
     */
    listContainer = 'p-listbox-list-container',
    /**
     * Class name of the list element
     */
    list = 'p-listbox-list',
    /**
     * Class name of the option group element
     */
    optionGroup = 'p-listbox-option-group',
    /**
     * Class name of the option element
     */
    option = 'p-listbox-option',
    /**
     * Class name of the option check icon element
     */
    optionCheckIcon = 'p-listbox-option-check-icon',
    /**
     * Class name of the option blank icon element
     */
    optionBlankIcon = 'p-listbox-option-blank-icon',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-listbox-empty-message'
}

export interface ListboxStyle extends BaseStyle {}
