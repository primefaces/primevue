/**
 *
 * ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu.
 * Refer to documentation of the individual documentation of the with context menu support.
 *
 * [Live Demo](https://www.primevue.org/contextmenu/)
 *
 * @module contextmenu
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ContextMenuPassThroughOptionType = ContextMenuPassThroughAttributes | ((options: ContextMenuPassThroughMethodOptions) => ContextMenuPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ContextMenuPassThroughMethodOptions {
    instance: any;
    props: ContextMenuProps;
    state: ContextMenuState;
    context: ContextMenuContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ContextMenuProps.pt}
 */
export interface ContextMenuPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the submenu icon's DOM element.
     */
    submenuIcon?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the separator's DOM element.
     */
    separator?: ContextMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the submenu's DOM element.
     */
    submenu?: ContextMenuPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ContextMenuPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines focused item info
 */
export interface ContextMenuFocusedItemInfo {
    /**
     * Active item index
     */
    index: number;
    /**
     * Active item level
     */
    level: number;
    /**
     * Parent key info
     */
    parentKey: string;
}

/**
 * Defines current inline state in ContextMenu component.
 */
export interface ContextMenuState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused item info.
     * @type {ContextMenuFocusedItemInfo}
     */
    focusedItemInfo: ContextMenuFocusedItemInfo;
    /**
     * Active item path.
     * @type {ContextMenuFocusedItemInfo}
     */
    activeItemPath: ContextMenuFocusedItemInfo[];
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
    /**
     * Current submenu visible state as a boolean.
     * @defaultValue false
     */
    submenuVisible: boolean;
}

/**
 * Defines current options in ContextMenu component.
 */
export interface ContextMenuContext {
    /**
     * Current active state of menuitem as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current focused state of menuitem as a boolean.
     * @defaultValue false
     */
    focused: boolean;
}

/**
 * Defines valid properties in ContextMenu component.
 */
export interface ContextMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Attaches the menu to document instead of a particular item.
     * @defaultValue false
     */
    global?: boolean | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ContextMenuPassThroughOptions}
     */
    pt?: ContextMenuPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in ContextMenu component.
 */
export interface ContextMenuSlots {
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
    }): VNode[];
    /**
     * Custom item icon template.
     * @param {Object} scope - item icon slot's params.
     */
    itemicon(scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
        /**
         * Style class of the item icon element.
         */
        class: any;
    }): VNode[];
    /**
     * Custom submenu icon template.
     */
    submenuicon(scope: {
        /**
         * Whether item is active
         */
        active: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in ContextMenu component.
 */
export interface ContextMenuEmits {
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
    /**
     * Callback to invoke before the popup is shown.
     */
    'before-show'(): void;
    /**
     * Callback to invoke before the popup is hidden.
     */
    'before-hide'(): void;
    /**
     * Callback to invoke when the popup is shown.
     */
    show(): void;
    /**
     * Callback to invoke when the popup is hidden.
     */
    hide(): void;
}

/**
 * **PrimeVue - ContextMenu**
 *
 * _ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu.
 * Refer to documentation of the individual documentation of the with context menu support._
 *
 * [Live Demo](https://www.primevue.org/contextmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class ContextMenu extends ClassComponent<ContextMenuProps, ContextMenuSlots, ContextMenuEmits> {
    /**
     * Toggles the visibility of the menu.
     * @param {Event} event - Browser event.
     *
     * @memberof ContextMenu
     */
    toggle(event: Event): void;
    /**
     * Shows the menu.
     * @param {Event} event - Browser event.
     *
     * @memberof ContextMenu
     */
    show(event: Event): void;
    /**
     * Hides the menu.
     *
     * @memberof ContextMenu
     */
    hide(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ContextMenu: GlobalComponentConstructor<ContextMenu>;
    }
}

export default ContextMenu;
