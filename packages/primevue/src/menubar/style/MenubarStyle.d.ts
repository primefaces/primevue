/**
 *
 * Menubar is a horizontal menu component.
 *
 * [Live Demo](https://www.primevue.org/menubar/)
 *
 * @module menubarstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum MenubarClasses {
    /**
     * Class name of the root element
     */
    root = 'p-menubar',
    /**
     * Class name of the start element
     */
    start = 'p-menubar-start',
    /**
     * Class name of the button element
     */
    button = 'p-menubar-button',
    /**
     * Class name of the root list element
     */
    rootList = 'p-menubar-root-list',
    /**
     * Class name of the item element
     */
    item = 'p-menubar-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-menubar-item-content',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-menubar-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-menubar-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-menubar-item-label',
    /**
     * Class name of the submenu icon element
     */
    submenuIcon = 'p-menubar-submenu-icon',
    /**
     * Class name of the submenu element
     */
    submenu = 'p-menubar-submenu',
    /**
     * Class name of the separator element
     */
    separator = 'p-menubar-separator',
    /**
     * Class name of the end element
     */
    end = 'p-menubar-end'
}

export interface MenubarStyle extends BaseStyle {}
