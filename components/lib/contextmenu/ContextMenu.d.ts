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
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough, HintedString } from '../ts-helpers';

export declare type ContextMenuPassThroughOptionType = ContextMenuPassThroughAttributes | ((options: ContextMenuPassThroughMethodOptions) => ContextMenuPassThroughAttributes | string) | string | null | undefined;

export declare type ContextMenuPassThroughTransitionType = TransitionProps | ((options: ContextMenuPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ContextMenuPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ContextMenuProps;
    /**
     * Defines current inline state.
     */
    state: ContextMenuState;
    /**
     * Defines current options.
     */
    context: ContextMenuContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ContextMenuProps.pt}
 */
export interface ContextMenuPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    menu?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu icon's DOM element.
     */
    submenuIcon?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: ContextMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu's DOM element.
     */
    submenu?: ContextMenuPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: ContextMenuPassThroughTransitionType;
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
     * Current menuitem
     */
    item: any;
    /**
     * Index of the menuitem
     */
    index: number;
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
    /**
     * Current disabled state of menuitem as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid router binding props in ContextMenu component.
 */
export interface ContextMenuRouterBindProps {
    /**
     * Action element binding
     */
    action: object;
    /**
     * Icon element binding
     */
    icon: object;
    /**
     * Label element binding
     */
    label: object;
    /**
     * Submenuicon elemnt binding
     */
    submenuicon: object;
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
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
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
     * @deprecated since v3.40.0.
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
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ContextMenuPassThroughOptions}
     */
    pt?: PassThrough<ContextMenuPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
        /**
         * Label property of the menuitem
         */
        label: string | ((...args: any) => string) | undefined;
        /**
         * Whether or not there is a submenu
         */
        hasSubmenu: boolean;
        /**
         * Binding properties of the menuitem
         */
        props: ContextMenuRouterBindProps;
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
     * @param {Object} scope - submenuicon slot's params.
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

declare module 'vue' {
    export interface GlobalComponents {
        ContextMenu: GlobalComponentConstructor<ContextMenu>;
    }
}

export default ContextMenu;
