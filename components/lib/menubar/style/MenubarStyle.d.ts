/**
 *
 * Menubar is a horizontal menu component.
 *
 * [Live Demo](https://www.primevue.org/menubar/)
 *
 * @module menubarstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum MenubarClasses {
    root = 'p-menubar',
    start = 'p-menubar-start',
    button = 'p-menubar-button',
    rootList = 'p-menubar-root-list',
    item = 'p-menubar-item',
    itemContent = 'p-menubar-item-content',
    itemLink = 'p-menubar-item-link',
    itemIcon = 'p-menubar-item-icon',
    itemLabel = 'p-menubar-item-label',
    submenuIcon = 'p-menubar-submenu-icon',
    submenu = 'p-menubar-submenu',
    separator = 'p-menubar-separator',
    end = 'p-menubar-end'
}

export interface MenubarStyle extends BaseStyle {}
