/**
 *
 * Dock is a navigation component consisting of menuitems.
 *
 * [Live Demo](https://www.primevue.org/dock/)
 *
 * @module dockstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum DockClasses {
    /**
     * Class name of the root element
     */
    root = 'p-dock',
    /**
     * Class name of the list container element
     */
    listContainer = 'p-dock-list-container',
    /**
     * Class name of the list element
     */
    list = 'p-dock-list',
    /**
     * Class name of the item element
     */
    item = 'p-dock-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-dock-item-content',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-dock-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-dock-item-icon'
}

export interface DockStyle extends BaseStyle {}
