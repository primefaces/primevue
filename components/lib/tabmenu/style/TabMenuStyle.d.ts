/**
 *
 * TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.
 *
 * [Live Demo](https://www.primevue.org/tabmenu/)
 *
 * @module tabmenustyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TabMenuClasses {
    root = 'p-tabmenu',
    tablist = 'p-tabmenu-tablist',
    item = 'p-tabmenu-item',
    itemLink = 'p-tabmenu-item-link',
    itemIcon = 'p-tabmenu-item-icon',
    itemLabel = 'p-tabmenu-item-label',
    inkbar = 'p-tabmenu-ink-bar'
}

export interface TabMenuStyle extends BaseStyle {}
