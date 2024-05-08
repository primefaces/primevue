/**
 *
 * TieredMenu displays submenus in nested overlays.
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module tieredmenustyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TieredMenuClasses {
    root = 'p-tieredmenu',
    start = 'p-tieredmenu-start',
    rootList = 'p-tieredmenu-root-list',
    item = 'p-tieredmenu-item',
    itemContent = 'p-tieredmenu-item-content',
    itemLink = 'p-tieredmenu-item-link',
    itemIcon = 'p-tieredmenu-item-icon',
    itemLabel = 'p-tieredmenu-item-label',
    submenuIcon = 'p-tieredmenu-submenu-icon',
    submenu = 'p-tieredmenu-submenu',
    separator = 'p-tieredmenu-separator',
    end = 'p-tieredmenu-end'
}

export interface TieredMenuStyle extends BaseStyle {}
