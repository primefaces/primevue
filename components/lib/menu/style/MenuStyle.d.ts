/**
 *
 * Menu is a navigation / command component that supports dynamic and static positioning.
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module menustyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum MenuClasses {
    root = 'p-menu',
    start = 'p-menu-start',
    list = 'p-menu-list',
    submenuItem = 'p-menu-submenu-item',
    separator = 'p-menu-separator',
    end = 'p-menu-end',
    item = 'p-menu-item',
    itemContent = 'p-menu-item-content',
    itemLink = 'p-menu-item-link',
    itemIcon = 'p-menu-item-icon',
    itemLabel = 'p-menu-item-label'
}

export interface MenuStyle extends BaseStyle {}
