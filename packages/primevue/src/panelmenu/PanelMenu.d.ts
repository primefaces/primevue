/**
 *
 * PanelMenu is a hybrid of Accordion and Tree components.
 *
 * [Live Demo](https://www.primevue.org/panelmenu/)
 *
 * @module panelmenu
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { MenuItem } from 'primevue/menuitem';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type PanelMenuPassThroughOptionType = PanelMenuPassThroughAttributes | ((options: PanelMenuPassThroughMethodOptions) => PanelMenuPassThroughAttributes | string) | string | null | undefined;

export declare type PanelMenuPassThroughTransitionType = TransitionProps | ((options: PanelMenuPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface PanelMenuPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: PanelMenuProps;
    /**
     * Defines current inline state.
     */
    state: PanelMenuState;
    /**
     * Defines current options.
     */
    context: PanelMenuContext;
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
     * Used to pass attributes to the header link's DOM element.
     */
    headerLink?: PanelMenuPassThroughOptionType;
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
     * Used to pass attributes to the content container's DOM element.
     */
    contentContainer?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the root list's DOM element.
     */
    rootList?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    item?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the item content's DOM element.
     */
    itemContent?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the item link's DOM element.
     */
    itemLink?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the item icon's DOM element.
     */
    itemIcon?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the item label's DOM element.
     */
    itemLabel?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the submenu's DOM element.
     */
    submenu?: PanelMenuPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: PanelMenuPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
    /**
     * Current disabled state of menuitem as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
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
 * @see {@link PanelMenuEmitsOptions['panel-open']}
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
 * @see {@link PanelMenuEmitsOptions['panel-close']}
 * @extends {PanelMenuPanelOpenEvent}
 */
export interface PanelMenuPanelCloseEvent extends PanelMenuPanelOpenEvent {}

/**
 * Defines valid router binding props in PanelMenu component.
 */
export interface PanelMenuRouterBindProps {
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
    /**
     * Header icon element binding
     */
    headerIcon: object;
    /**
     * Header label element binding
     */
    headerLabel: object;
}

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
     * When enabled, multiple root menuitems can be activated at the same time.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {PanelMenuPassThroughOptions}
     */
    pt?: PassThrough<PanelMenuPassThroughOptions>;
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
        /**
         * Whether there is a root menuitem
         */
        root: boolean;
        /**
         * Current active state of the menuitem
         */
        active: boolean;
        /**
         * Label property of the menuitem
         */
        label: string | ((...args: any) => string) | undefined;
        /**
         * Binding properties of the menuitem
         */
        props: PanelMenuRouterBindProps;
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
export interface PanelMenuEmitsOptions {
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

export declare type PanelMenuEmits = EmitFn<PanelMenuEmitsOptions>;

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
declare const PanelMenu: DefineComponent<PanelMenuProps, PanelMenuSlots, PanelMenuEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        PanelMenu: DefineComponent<PanelMenuProps, PanelMenuSlots, PanelMenuEmits>;
    }
}

export default PanelMenu;
