/**
 *
 * MegaMenu is navigation component that displays submenus together.
 *
 * [Live Demo](https://www.primevue.org/megamenu/)
 *
 * @module megamenustyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum MegaMenuClasses {
    /**
     * Class name of the root element
     */
    root = 'p-megamenu',
    /**
     * Class name of the start element
     */
    start = 'p-megamenu-start',
    /**
     * Class name of the button element
     */
    button = 'p-megamenu-button',
    /**
     * Class name of the root list element
     */
    rootList = 'p-megamenu-root-list',
    /**
     * Class name of the submenu item element
     */
    submenuItem = 'p-megamenu-submenu-item',
    /**
     * Class name of the item element
     */
    item = 'p-megamenu-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-megamenu-item-content',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-megamenu-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-megamenu-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-megamenu-item-label',
    /**
     * Class name of the submenu icon element
     */
    submenuIcon = 'p-megamenu-submenu-icon',
    /**
     * Class name of the panel element
     */
    panel = 'p-megamenu-panel',
    /**
     * Class name of the grid element
     */
    grid = 'p-megamenu-grid',
    /**
     * Class name of the submenu element
     */
    submenu = 'p-megamenu-submenu',
    /**
     * Class name of the submenu item label element
     */
    submenuItemLabel = 'p-megamenu-submenu-item-label',
    /**
     * Class name of the separator element
     */
    separator = 'p-megamenu-separator',
    /**
     * Class name of the end element
     */
    end = 'p-megamenu-end'
}

export interface MegaMenuStyle extends BaseStyle {}
