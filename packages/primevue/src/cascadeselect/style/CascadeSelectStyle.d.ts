/**
 *
 * CascadeSelect is a form component to select a value from a nested structure of options.
 *
 * [Live Demo](https://www.primevue.org/cascadeselect/)
 *
 * @module cascadeselectstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum CascadeSelectClasses {
    /**
     * Class name of the root element
     */
    root = 'p-cascadeselect',
    /**
     * Class name of the label element
     */
    label = 'p-cascadeselect-label',
    /**
     * Class name of the dropdown element
     */
    dropdown = 'p-cascadeselect-dropdown',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-cascadeselect-loading-icon',
    /**
     * Class name of the dropdown icon element
     */
    clearIcon = 'p-cascadeselect-clear-icon',
    /**
     * Class name of the dropdown icon element
     */
    dropdownIcon = 'p-cascadeselect-dropdown-icon',
    /**
     * Class name of the overlay element
     */
    overlay = 'p-cascadeselect-overlay',
    /**
     * Class name of the list container element
     */
    listContainer = 'p-cascadeselect-list-container',
    /**
     * Class name of the list element
     */
    list = 'p-cascadeselect-list',
    /**
     * Class name of the item element
     */
    item = 'p-cascadeselect-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-cascadeselect-item-content',
    /**
     * Class name of the item text element
     */
    itemText = 'p-cascadeselect-item-text',
    /**
     * Class name of the group icon element
     */
    groupIcon = 'p-cascadeselect-group-icon',
    /**
     * Class name of the item list element
     */
    itemList = 'p-cascadeselect-item-list'
}

export interface CascadeSelectStyle extends BaseStyle {}
