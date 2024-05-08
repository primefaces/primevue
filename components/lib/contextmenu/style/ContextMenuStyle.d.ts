/**
 *
 * ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu.
 * Refer to documentation of the individual documentation of the with context menu support.
 *
 * [Live Demo](https://www.primevue.org/contextmenu/)
 *
 * @module contextmenustyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ContextMenuClasses {
    root = 'p-contextmenu',
    rootList = 'p-contextmenu-root-list',
    item = 'p-contextmenu-item',
    itemContent = 'p-contextmenu-item-content',
    itemLink = 'p-contextmenu-item-link',
    itemIcon = 'p-contextmenu-item-icon',
    itemLabel = 'p-contextmenu-item-label',
    submenuIcon = 'p-contextmenu-submenu-icon',
    submenu = 'p-contextmenu-submenu',
    separator = 'p-contextmenu-separator'
}

export interface ContextMenuStyle extends BaseStyle {}
