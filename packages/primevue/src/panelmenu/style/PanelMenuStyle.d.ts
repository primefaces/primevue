/**
 *
 * PanelMenu is a hybrid of Accordion and Tree components.
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 *
 * @module panelmenustyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum PanelMenuClasses {
    /**
     * Class name of the root element
     */
    root = 'p-panelmenu',
    /**
     * Class name of the panel element
     */
    panel = 'p-panelmenu-panel',
    /**
     * Class name of the header element
     */
    header = 'p-panelmenu-header',
    /**
     * Class name of the header content element
     */
    headerContent = 'p-panelmenu-header-content',
    /**
     * Class name of the header link element
     */
    headerLink = 'p-panelmenu-header-link',
    /**
     * Class name of the header icon element
     */
    headerIcon = 'p-panelmenu-header-icon',
    /**
     * Class name of the header label element
     */
    headerLabel = 'p-panelmenu-header-label',
    /**
     * Class name of the content container element
     */
    contentContainer = 'p-panelmenu-content-container',
    /**
     * Class name of the content element
     */
    content = 'p-panelmenu-content',
    /**
     * Class name of the root list element
     */
    rootList = 'p-panelmenu-root-list',
    /**
     * Class name of the item element
     */
    item = 'p-panelmenu-item',
    /**
     * Class name of the item content element
     */
    itemContent = 'p-panelmenu-item-content',
    /**
     * Class name of the item link element
     */
    itemLink = 'p-panelmenu-item-link',
    /**
     * Class name of the item icon element
     */
    itemIcon = 'p-panelmenu-item-icon',
    /**
     * Class name of the item label element
     */
    itemLabel = 'p-panelmenu-item-label',
    /**
     * Class name of the submenu icon element
     */
    submenuIcon = 'p-panelmenu-submenu-icon',
    /**
     * Class name of the submenu element
     */
    submenu = 'p-panelmenu-submenu',
    separator = 'p-menuitem-separator'
}

export interface PanelMenuStyle extends BaseStyle {}
