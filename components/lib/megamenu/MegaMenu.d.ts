/**
 *
 * MegaMenu is navigation component that displays submenus together.
 *
 * [Live Demo](https://www.primevue.org/megamenu/)
 *
 * @module megamenu
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type MegaMenuPassThroughOptionType = MegaMenuPassThroughAttributes | ((options: MegaMenuPassThroughMethodOptions) => MegaMenuPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MegaMenuPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: MegaMenuProps;
    /**
     * Defines current inline state.
     */
    state: MegaMenuState;
    /**
     * Defines current options.
     */
    context: MegaMenuContext;
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
 * @see {@link MegaMenuProps.pt}
 */
export interface MegaMenuPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    menu?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu icon's DOM element.
     */
    submenuIcon?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the grid's DOM element.
     */
    grid?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the column's DOM element.
     */
    column?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu header's DOM element.
     */
    submenuHeader?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu's DOM element.
     */
    submenu?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu label's DOM element.
     */
    submenuLabel?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the mobile popup menu button's DOM element.
     */
    menubutton?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the start of the component.
     */
    start?: MegaMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the end of the component.
     */
    end?: MegaMenuPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface MegaMenuPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines focused item info
 */
export interface MegaMenuFocusedItemInfo {
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
 * Defines current inline state in MegaMenu component.
 */
export interface MegaMenuState {
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
     * @type {MegaMenuFocusedItemInfo}
     */
    focusedItemInfo: MegaMenuFocusedItemInfo;
    /**
     * Active item path.
     * @type {MenuItem}
     */
    activeItem: MenuItem;
}

/**
 * Defines current options in MegaMenu component.
 */
export interface MegaMenuContext {
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
}

/**
 * Defines valid router binding props in MegaMenu component.
 */
export interface MegaMenuRouterBindProps {
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
 * Defines valid properties in MegaMenu component.
 */
export interface MegaMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Defines the orientation.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
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
     * @type {MegaMenuPassThroughOptions}
     */
    pt?: PassThrough<MegaMenuPassThroughOptions>;
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
 * Defines valid slots in MegaMenu component.
 */
export interface MegaMenuSlots {
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
        props: MegaMenuRouterBindProps;
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
     * Custom menu button icon template on responsive mode.
     */
    menubuttonicon(): VNode[];
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
}

/**
 * Defines valid emits in MegaMenu component.
 */
export interface MegaMenuEmits {
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
}

/**
 * **PrimeVue - MegaMenu**
 *
 * _MegaMenu is navigation component that displays submenus together._
 *
 * [Live Demo](https://www.primevue.org/megamenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class MegaMenu extends ClassComponent<MegaMenuProps, MegaMenuSlots, MegaMenuEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MegaMenu: GlobalComponentConstructor<MegaMenu>;
    }
}

export default MegaMenu;
