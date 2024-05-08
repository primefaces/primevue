/**
 *
 * PanelMenu is a hybrid of Accordion and Tree components.
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 *
 * @module panelmenustyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum PanelMenuClasses {
    root = 'p-panelmenu',
    panel = 'p-panelmenu-panel',
    header = 'p-panelmenu-header',
    headerContent = 'p-panelmenu-header-content',
    headerLink = 'p-panelmenu-header-link',
    headerIcon = 'p-panelmenu-header-icon',
    headerLabel = 'p-panelmenu-header-label',
    contentContainer = 'p-panelmenu-content-container',
    content = 'p-panelmenu-content',
    rootList = 'p-panelmenu-root-list',
    item = 'p-panelmenu-item',
    itemContent = 'p-panelmenu-item-content',
    itemLink = 'p-panelmenu-item-link',
    itemIcon = 'p-panelmenu-item-icon',
    itemLabel = 'p-panelmenu-item-label',
    submenuIcon = 'p-panelmenu-submenu-icon',
    submenu = 'p-panelmenu-submenu',
    separator = 'p-menuitem-separator'
}

export interface PanelMenuStyle extends BaseStyle {}
