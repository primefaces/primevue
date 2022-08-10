import { RouteLocationRaw } from "vue-router";

type MenuItemLabelType = string | ((...args: any) => string) | undefined;

type MenuItemDisabledType = boolean | ((...args: any) => boolean) | undefined;

type MenuItemVisibleType = boolean | ((...args: any) => boolean) | undefined;

export interface MenuItemCommandEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Menuitem instance.
     */
    item: MenuItem;
    /**
     * Optional
     */
    [key: string]: any;
}

export interface MenuItem {
    /**
     * Property name or getter function to use as the label of an item.
     */
    label?: MenuItemLabelType;
    /**
     * Icon of the item.
     */
    icon?: string | undefined;
    /**
     * Route configuration such as path, name and parameters.
     */
    to?: RouteLocationRaw | undefined;
    /**
     * Callback to execute when item is clicked.
     * @param {@link MenuItemCommandEvent} event - Custom command event.
     */
    command?: (event: MenuItemCommandEvent) => void;
    /**
     * External link to navigate when item is clicked.
     */
    url?: string | undefined;
    /**
     * 	An array of children menuitems.
     */
    items?: MenuItem[] | undefined;
    /**
     * A boolean or a function to return a boolean to specify if the item is disabled.
     */
    disabled?: MenuItemDisabledType;
    /**
     * A boolean or a function to return a boolean to specify if the item is visible.
     */
    visible?: MenuItemVisibleType;
    /**
     * Specifies where to open the linked document.
     */
    target?: string | undefined;
    /**
     * Defines the item as a separator.
     */
    separator?: boolean | undefined;
    /**
     * Inline style of the menuitem.
     */
    style?: any;
    /**
     * Style class of the menuitem.
     */
    class?: any;
    /**
     * Unique identifier of an item.
     */
    key?: string | undefined
    /**
     * Optional
     */
    [key: string]: any;
}
