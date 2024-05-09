/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primevue.org/listbox/)
 *
 * @module listboxstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ListboxClasses {
    root = 'p-listbox',
    header = 'p-listbox-header',
    pcFilter = 'p-listbox-filter',
    listContainer = 'p-listbox-list-container',
    list = 'p-listbox-list',
    optionGroup = 'p-listbox-option-group',
    option = 'p-listbox-option',
    optionCheckIcon = 'p-listbox-option-check-icon',
    optionBlankIcon = 'p-listbox-option-blank-icon',
    emptyMessage = 'p-listbox-empty-message'
}

export interface ListboxStyle extends BaseStyle {}
