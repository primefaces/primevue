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
import type { BaseStyle } from '@primevue/core/base/style';

export enum ContextMenuClasses {
    /**
     * Class name of the root element
     */
    root = 'p-contextmenu',
    /**
     * Class name of the root list element
     */
    rootList = 'p-contextmenu-root-list',
    /**
     * Class name of the item element
     */
    item = 'p-contextmenu-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-contextmenu-item-content',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-contextmenu-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-contextmenu-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-contextmenu-item-label',
    /**
     * Class name of the submenu icon element
     */
    submenuIcon = 'p-contextmenu-submenu-icon',
    /**
     * Class name of the submenu element
     */
    submenu = 'p-contextmenu-submenu',
    /**
     * Class name of the separator element
     */
    separator = 'p-contextmenu-separator'
}

export interface ContextMenuStyle extends BaseStyle {}
