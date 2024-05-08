/**
 *
 * CascadeSelect is a form component to select a value from a nested structure of options.
 *
 * [Live Demo](https://www.primevue.org/cascadeselect/)
 *
 * @module cascadeselectstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum CascadeSelectClasses {
    root = 'p-cascadeselect',
    label = 'p-cascadeselect-label',
    dropdown = 'p-cascadeselect-dropdown',
    loadingIcon = 'p-cascadeselect-loading-icon',
    dropdownIcon = 'p-cascadeselect-dropdown-icon',
    overlay = 'p-cascadeselect-overlay',
    listContainer = 'p-cascadeselect-list-container',
    list = 'p-cascadeselect-list',
    item = 'p-cascadeselect-item',
    itemContent = 'p-cascadeselect-item-content',
    itemText = 'p-cascadeselect-item-text',
    groupIcon = 'p-cascadeselect-group-icon',
    itemList = 'p-cascadeselect-item-list'
}

export interface CascadeSelectStyle extends BaseStyle {}
