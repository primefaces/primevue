/**
 *
 * Menu is a navigation / command component that supports dynamic and static positioning.
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module menustyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum MenuClasses {
    /**
     * Class name of the root element
     */
    root = 'p-menu',
    /**
     * Class name of the start element
     */
    start = 'p-menu-start',
    /**
     * Class name of the list element
     */
    list = 'p-menu-list',
    /**
     * Class name of the submenu item element
     */
    submenuItem = 'p-menu-submenu-item',
    /**
     * Class name of the separator element
     */
    separator = 'p-menu-separator',
    /**
     * Class name of the end element
     */
    end = 'p-menu-end',
    /**
     * Class name of the item element
     */
    item = 'p-menu-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-menu-item-content',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-menu-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-menu-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-menu-item-label'
}

export interface MenuStyle extends BaseStyle {}
