/**
 *
 * Dock is a navigation component consisting of menuitems.
 *
 * [Live Demo](https://www.primevue.org/dock/)
 *
 * @module dockstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum DockClasses {
    root = 'p-dock',
    listContainer = 'p-dock-list-container',
    list = 'p-dock-list',
    item = 'p-dock-item',
    itemContent = 'p-dock-item-content',
    itemLink = 'p-dock-item-link',
    itemIcon = 'p-dock-item-icon'
}

export interface DockStyle extends BaseStyle {}
