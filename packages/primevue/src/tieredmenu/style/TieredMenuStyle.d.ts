/**
 *
 * TieredMenu displays submenus in nested overlays.
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module tieredmenustyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TieredMenuClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tieredmenu',
    /**
     * Class name of the start element
     */
    start = 'p-tieredmenu-start',
    /**
     * Class name of the root list element
     */
    rootList = 'p-tieredmenu-root-list',
    /**
     * Class name of the item element
     */
    item = 'p-tieredmenu-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-tieredmenu-item-content',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-tieredmenu-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-tieredmenu-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-tieredmenu-item-label',
    /**
     * Class name of the submenu icon element
     */
    submenuIcon = 'p-tieredmenu-submenu-icon',
    /**
     * Class name of the submenu element
     */
    submenu = 'p-tieredmenu-submenu',
    /**
     * Class name of the separator element
     */
    separator = 'p-tieredmenu-separator',
    /**
     * Class name of the end element
     */
    end = 'p-tieredmenu-end'
}

export interface TieredMenuStyle extends BaseStyle {}
