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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type MenubarPassThroughOptionType = MenubarPassThroughAttributes | ((options: MenubarPassThroughMethodOptions) => MenubarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MenubarPassThroughMethodOptions {
    instance: any;
    props: MenubarProps;
    state: MenubarState;
    context: MenubarContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link MenubarProps.pt}
 */
export interface MenubarPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the submenu icon's DOM element.
     */
    submenuIcon?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the separator's DOM element.
     */
    separator?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the mobile popup menu button's DOM element.
     */
    button?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the mobile popup menu button icon's DOM element.
     */
    popupIcon?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the submenu's DOM element.
     */
    submenu?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the start of the component.
     */
    start?: MenubarPassThroughOptionType;
    /**
     * Uses to pass attributes to the end of the component.
     */
    end?: MenubarPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
 * Defines valid properties in Menubar component.
 */
export interface MenubarProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the menu button.
     */
    buttonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {MenubarPassThroughOptions}
     */
    pt?: MenubarPassThroughOptions;
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
    }): VNode[];
    /**
     * Custom popup icon template on responsive mode.
     */
    popupicon(): VNode[];
    /**
     * Custom submenu icon template.
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

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Menubar: GlobalComponentConstructor<Menubar>;
    }
}

export default Menubar;
