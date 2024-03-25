/**
 *
 * Menubar is a horizontal menu component.
 *
 * [Live Demo](https://www.primevue.org/menubar/)
 *
 * @module menubar
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type MenubarPassThroughOptionType = MenubarPassThroughAttributes | ((options: MenubarPassThroughMethodOptions) => MenubarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MenubarPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: MenubarProps;
    /**
     * Defines current inline state.
     */
    state: MenubarState;
    /**
     * Defines current options.
     */
    context: MenubarContext;
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
 * @see {@link MenubarProps.pt}
 */
export interface MenubarPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    menu?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu icon's DOM element.
     */
    submenuIcon?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the mobile menu button's DOM element.
     */
    button?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the mobile menu button icon's DOM element.
     */
    menubuttonicon?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu's DOM element.
     */
    submenu?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the start of the component.
     */
    start?: MenubarPassThroughOptionType;
    /**
     * Used to pass attributes to the end of the component.
     */
    end?: MenubarPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface MenubarPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines focused item info
 */
export interface MenubarFocusedItemInfo {
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
 * Defines current inline state in Menubar component.
 */
export interface MenubarState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current mobile menu active state as a boolean.
     * @defaultValue false
     */
    mobileActive: boolean;
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused item info.
     * @type {MenubarFocusedItemInfo}
     */
    focusedItemInfo: MenubarFocusedItemInfo;
    /**
     * Active item path.
     * @type {MenubarFocusedItemInfo}
     */
    activeItemPath: MenubarFocusedItemInfo[];
}

/**
 * Defines current options in Menubar component.
 */
export interface MenubarContext {
    /**
     * Current menuitem
     */
    item: any;
    /**
     * Current index of the menuitem.
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
    /**
     * Current level of the menuitem.
     */
    level: number;
}

/**
 * Defines valid router binding props in Menubar component.
 */
export interface MenubarRouterBindProps {
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
 * Defines valid properties in Menubar component.
 */
export interface MenubarProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * The breakpoint to define the maximum width boundary.
     * @defaultValue 960px
     */
    breakpoint?: string | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @deprecated since v3.40.0.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the menu button.
     */
    buttonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {MenubarPassThroughOptions}
     */
    pt?: PassThrough<MenubarPassThroughOptions>;
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
 * Defines valid slots in Menubar component.
 */
export interface MenubarSlots {
    /**
     * Custom start template.
     */
    start(): VNode[];
    /**
     * Custom end template.
     */
    end(): VNode[];
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
         * Binding properties of the menuitem
         */
        props: MenubarRouterBindProps;
        /**
         * State of the root
         */
        root: boolean;
        /**
         * Whether or not there is a submenu
         */
        hasSubmenu: boolean;
    }): VNode[];
    /**
     * Custom menu button template on responsive mode.
     * @param {Object} scope - menu button slot's params.
     */
    menubutton(scope: {
        /**
         * Current id state as a string
         */
        id: string;
        /**
         * Style class of component
         */
        class: string;
        /**
         *
         * Toggle event
         */
        toggleCallback: () => void;
    }): VNode[];
    /**
     * Custom popup icon template on responsive mode.
     * @deprecated since v3.42.0. Use 'menubuttonicon' slot instead.
     */
    popupicon(): VNode[];
    /**
     * Custom menu button icon template on responsive mode.
     */
    menubuttonicon(): VNode[];
    /**
     * Custom submenu icon template.
     * @param {Object} scope - submenuicon slot's params.
     */
    submenuicon(scope: {
        /**
         * Whether item is root
         */
        root: boolean;
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
}

/**
 * Defines valid emits in Menubar component.
 */
export interface MenubarEmits {}

/**
 * **PrimeVue - Menubar**
 *
 * _Menubar is a horizontal menu component._
 *
 * [Live Demo](https://www.primevue.org/menubar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Menubar extends ClassComponent<MenubarProps, MenubarSlots, MenubarEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Menubar: GlobalComponentConstructor<Menubar>;
    }
}

export default Menubar;
