/**
 *
 * TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.
 *
 * [Live Demo](https://www.primevue.org/tabmenu/)
 *
 * @module tabmenustyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TabMenuClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tabmenu',
    /**
     * Class name of the tablist element
     */
    tablist = 'p-tabmenu-tablist',
    /**
     * Class name of the item element
     */
    item = 'p-tabmenu-item',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-tabmenu-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-tabmenu-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-tabmenu-item-label',
    /**
     * Class name of the inkbar element
     */
    inkbar = 'p-tabmenu-ink-bar'
}

export interface TabMenuStyle extends BaseStyle {}
