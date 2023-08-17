/**
 *
 * PanelMenu is a hybrid of Accordion and Tree components.
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 *
 * @module panelmenu
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor, PTOptions } from '../ts-helpers';

export declare type PanelMenuPassThroughOptionType = PanelMenuPassThroughAttributes | ((options: PanelMenuPassThroughMethodOptions) => PanelMenuPassThroughAttributes | string) | string | null | undefined;

export declare type PanelMenuPassThroughTransitionType = TransitionProps | ((options: PanelMenuPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface PanelMenuPassThroughMethodOptions {
    instance: any;
    props: PanelMenuProps;
    state: PanelMenuState;
    context: PanelMenuContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link PanelMenuProps.pt}
 */
export interface PanelMenuPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the header content's DOM element.
     */
    headerContent?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the header action's DOM element.
     */
    headerAction?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenuIcon's DOM element.
     */
    submenuIcon?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the header icon's DOM element.
     */
    headerIcon?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the header label's DOM element.
     */
    headerLabel?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the toggleable content's DOM element.
     */
    toggleableContent?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the menu content's DOM element.
     */
    menuContent?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    menu?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu's DOM element.
     */
    submenu?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: PanelMenuPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: PanelMenuPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface PanelMenuPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in PanelMenu component.
 */
export interface PanelMenuState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Active item path.
     * @type {MenuItem}
     */
    activeItem: MenuItem[];
}

/**
 * Defines current options in PanelMenu component.
 */
export interface PanelMenuContext {
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
}

/**
 * Custom expanded keys metadata.
 * @see {@link PanelMenuProps.expandedKeys}
 */
export interface PanelMenuExpandedKeys {
    [key: string]: any;
}

/**
 * Custom panel open event.
 * @see {@link PanelMenuEmits['panel-open']}
 */
export interface PanelMenuPanelOpenEvent {
    /**
     * Browser mouse event.
     * @type {MouseEvent}
     */
    originalEvent: MouseEvent;
    /**
     * Current item.
     */
    item: any;
}

/**
 * Custom panel close event.
 * @see {@link PanelMenuEmits['panel-close']}
 * @extends {PanelMenuPanelOpenEvent}
 */
export interface PanelMenuPanelCloseEvent extends PanelMenuPanelOpenEvent {}

/**
 * Defines valid properties in PanelMenu component.
 */
export interface PanelMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * A map of keys to represent the expansion state in controlled mode.
     * @type {PanelMenuExpandedKeys}
     */
    expandedKeys?: PanelMenuExpandedKeys;
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {PanelMenuPassThroughOptions}
     */
    pt?: PTOptions<PanelMenuPassThroughOptions>;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in PanelMenu component.
 */
export interface PanelMenuSlots {
    /**
     * Custom content for each item.
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
     * @param {Object} scope - submenuicon slot's params.
     */
    submenuicon(scope: {
        /**
         * Whether item is active
         */
        active: boolean;
    }): VNode[];
    /**
     * Custom header icon template.
     * @param {Object} scope - header icon slot's params.
     */
    headericon(scope: {
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
 * Defines valid emits in PanelMenu component.
 */
export interface PanelMenuEmits {
    /**
     * Emitted when the expandedKeys changes.
     * @param {*} value - New value.
     */
    'update:expandedKeys'(value: any): void;
    /**
     * Callback to invoke when a panel gets expanded.
     * @param {PanelMenuPanelOpenEvent} event - Custom panel open event.
     */
    'panel-open'(event: PanelMenuPanelOpenEvent): void;
    /**
     * Callback to invoke when an active panel is collapsed by clicking on the header.
     * @param {PanelMenuPanelCloseEvent} event - Custom panel close event.
     */
    'panel-close'(event: PanelMenuPanelCloseEvent): void;
}

/**
 * **PrimeVue - PanelMenu**
 *
 * _PanelMenu is a hybrid of Accordion and Tree components._
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class PanelMenu extends ClassComponent<PanelMenuProps, PanelMenuSlots, PanelMenuEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        PanelMenu: GlobalComponentConstructor<PanelMenu>;
    }
}

export default PanelMenu;
