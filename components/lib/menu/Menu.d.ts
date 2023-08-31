/**
 *
 * Menu is a navigation / command component that supports dynamic and static positioning.
 *
 * [Live Demo](https://www.primevue.org/menu/)
 *
 * @module menu
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor, PTOptions } from '../ts-helpers';

export declare type MenuPassThroughOptionType = MenuPassThroughAttributes | ((options: MenuPassThroughMethodOptions) => MenuPassThroughAttributes | string) | string | null | undefined;

export declare type MenuPassThroughTransitionType = TransitionProps | ((options: MenuPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MenuPassThroughMethodOptions {
    instance: any;
    props: MenuProps;
    state: MenuState;
    context: MenuContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link MenuProps.pt}
 */
export interface MenuPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    menu?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu header's DOM element.
     */
    submenuHeader?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the start of the component.
     */
    start?: MenuPassThroughOptionType;
    /**
     * Used to pass attributes to the end of the component.
     */
    end?: MenuPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: MenuPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface MenuPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Menu component.
 */
export interface MenuState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Focused option index.
     */
    focusedOptionIndex: number;
    /**
     * Selected option index.
     */
    selectedOptionIndex: number;
}

/**
 * Defines current options in Menu component.
 */
export interface MenuContext {
    /**
     * Current menuitem
     */
    item: any;
    /**
     * Current index of the menuitem.
     */
    index: number;
    /**
     * Current focused state of menuitem as a boolean.
     * @defaultValue false
     */
    focused: boolean;
}

/**
 * Defines valid properties in Menu component.
 */
export interface MenuProps {
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
     * Identifier of the underlying input element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {MenuPassThroughOptions}
     */
    pt?: PTOptions<MenuPassThroughOptions>;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Menu component.
 */
export interface MenuSlots {
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
        props: (...args: any) => string;
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
     * Custom item template.
     * @param {Object} scope - submenuheader slot's params.
     */
    submenuheader(scope: {
        /**
         * Menuitem instance
         */
        submenuheader: MenuItem;
    }): VNode[];
}

/**
 * Defines valid emits in Menu component.
 */
export interface MenuEmits {
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
 * **PrimeVue - Menu**
 *
 * _Menu is a navigation / command component that supports dynamic and static positioning._
 *
 * [Live Demo](https://www.primevue.org/menu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Menu extends ClassComponent<MenuProps, MenuSlots, MenuEmits> {
    /**
     * Toggles the visibility of the overlay.
     * @param {Event} event - Browser event.
     *
     * @memberof Menu
     */
    toggle(event: Event): void;
    /**
     * Shows the overlay.
     * @param {Event} event - Browser event.
     * @param {*} [target] - Target element
     *
     * @memberof Menu
     */
    show(event: Event, target?: any): void;
    /**
     * Hides the overlay.
     *
     * @memberof Menu
     */
    hide(): void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Menu: GlobalComponentConstructor<Menu>;
    }
}

export default Menu;
