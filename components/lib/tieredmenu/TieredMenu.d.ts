/**
 *
 * TieredMenu displays submenus in nested overlays.
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module tieredmenu
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough, HintedString } from '../ts-helpers';

export declare type TieredMenuPassThroughOptionType<T = any> = TieredMenuPassThroughAttributes | ((options: TieredMenuPassThroughMethodOptions<T>) => TieredMenuPassThroughAttributes | string) | string | null | undefined;

export declare type TieredMenuPassThroughTransitionType<T = any> = TransitionProps | ((options: TieredMenuPassThroughMethodOptions<T>) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TieredMenuPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TieredMenuProps;
    /**
     * Defines current inline state.
     */
    state: TieredMenuState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent instance.
     */
    parent: T;
    /**
     * Defines current options.
     */
    context: TieredMenuContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TieredMenuProps.pt}
 */
export interface TieredMenuPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    menu?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the submenu icon's DOM element.
     */
    submenuIcon?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the submenu's DOM element.
     */
    submenu?: TieredMenuPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: TieredMenuPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TieredMenuPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines focused item info
 */
export interface TieredMenuFocusedItemInfo {
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
 * Defines current inline state in TieredMenu component.
 */
export interface TieredMenuState {
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
     * @type {TieredMenuFocusedItemInfo}
     */
    focusedItemInfo: TieredMenuFocusedItemInfo;
    /**
     * Active item path.
     * @type {TieredMenuFocusedItemInfo}
     */
    activeItemPath: TieredMenuFocusedItemInfo[];
    /**
     * Current visible state as a boolean.
     * @defaultValue true
     */
    visible: boolean;
}

/**
 * Defines current options in TieredMenu component.
 */
export interface TieredMenuContext {
    /**
     * Current menuitem
     */
    item: any;
    /**
     * Index of the menuitem.
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
 * Defines valid router binding props in TieredMenu component.
 */
export interface TieredMenuRouterBindProps {
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
 * Defines valid properties in TieredMenuMenu component.
 */
export interface TieredMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Defines if menu would displayed as a popup.
     * @defaultValue false
     */
    popup?: boolean | undefined;
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @deprecated since v3.40.0.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
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
     * @type {TieredMenuPassThroughOptions}
     */
    pt?: PassThrough<TieredMenuPassThroughOptions>;
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
 * Defines valid slots in TieredMenuMenu component.
 */
export interface TieredMenuSlots {
    /**
     * Custom content for each item.
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
         * Binding properties of the menuitem
         */
        props: TieredMenuRouterBindProps;
        /**
         * Whether or not there is a submenu
         */
        hasSubmenu: boolean;
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
     * Custom start template.
     */
    start(): VNode[];
    /**
     * Custom end template.
     */
    end(): VNode[];
}

/**
 * Defines valid emits in TieredMenuMenu component.
 */
export interface TieredMenuEmits {
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
 * **PrimeVue - TieredMenu**
 *
 * _TieredMenu displays submenus in nested overlays._
 *
 * [Live Demo](https://www.primevue.org/tieredmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TieredMenu extends ClassComponent<TieredMenuProps, TieredMenuSlots, TieredMenuEmits> {
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event
     *
     * @memberof TieredMenu
     */
    toggle: (event: Event) => void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event
     *
     * @memberof TieredMenu
     */
    show: (event: Event) => void;
    /**
     * Hides the overlay.
     *
     * @memberof TieredMenu
     */
    hide(): void;
}

declare module 'vue' {
    export interface GlobalComponents {
        TieredMenu: GlobalComponentConstructor<TieredMenu>;
    }
}

export default TieredMenu;
