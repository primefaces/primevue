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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type MegaMenuPassThroughOptionType = MegaMenuPassThroughAttributes | ((options: MegaMenuPassThroughMethodOptions) => MegaMenuPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MegaMenuPassThroughMethodOptions {
    instance: any;
    props: MegaMenuProps;
    state: MegaMenuState;
    context: MegaMenuContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link MegaMenuProps.pt}
 */
export interface MegaMenuPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the submenu icon's DOM element.
     */
    submenuIcon?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the panel's DOM element.
     */
    panel?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the grid's DOM element.
     */
    grid?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the column's DOM element.
     */
    column?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the submenu header's DOM element.
     */
    submenuHeader?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the submenu's DOM element.
     */
    submenu?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the separator's DOM element.
     */
    separator?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the start of the component.
     */
    start?: MegaMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the end of the component.
     */
    end?: MegaMenuPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
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
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {MegaMenuPassThroughOptions}
     */
    pt?: MegaMenuPassThroughOptions;
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
