/**
 *
 * MegaMenu is navigation component that displays submenus together.
 *
 * [Live Demo](https://www.primevue.org/megamenu/)
 *
 * @module megamenustyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum MegaMenuClasses {
    root = 'p-megamenu',
    start = 'p-megamenu-start',
    button = 'p-megamenu-button',
    rootList = 'p-megamenu-root-list',
    submenuItem = 'p-megamenu-submenu-item',
    item = 'p-megamenu-item',
    itemContent = 'p-megamenu-item-content',
    itemLink = 'p-megamenu-item-link',
    itemIcon = 'p-megamenu-item-icon',
    itemLabel = 'p-megamenu-item-label',
    submenuIcon = 'p-megamenu-submenu-icon',
    panel = 'p-megamenu-panel',
    grid = 'p-megamenu-grid',
    submenu = 'p-megamenu-submenu',
    submenuItemLabel = 'p-megamenu-submenu-item-label',
    separator = 'p-megamenu-separator',
    end = 'p-megamenu-end'
}

export interface MegaMenuStyle extends BaseStyle {}
