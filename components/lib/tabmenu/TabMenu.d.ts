/**
 *
 * TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.
 *
 * [Live Demo](https://www.primevue.org/tabmenu/)
 *
 * @module tabmenu
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type TabMenuPassThroughOptionType = TabMenuPassThroughAttributes | ((options: TabMenuPassThroughMethodOptions) => TabMenuPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabMenuPassThroughMethodOptions {
    instance: any;
    props: TabMenuProps;
    state: TabMenuState;
    context: TabMenuContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TabMenuProps.pt}
 */
export interface TabMenuPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TabMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: TabMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: TabMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: TabMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: TabMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: TabMenuPassThroughOptionType;
    /**
     * Uses to pass attributes to the inkbar's DOM element.
     */
    inkbar?: TabMenuPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TabMenuPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in TabMenu component.
 */
export interface TabMenuState {
    /**
     * Current active index state as a number.
     * @defaulValue 0
     */
    d_activeIndex: number;
}

/**
 * Defines current options in TabMenu component.
 */
export interface TabMenuContext {
    /**
     * Order of the menuitem
     */
    order: number;
}

/**
 * Custom change event.
 * @see {@link TabMenuEmits['tab-change']}
 */
export interface TabMenuChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Index of the selected tab
     */
    index: number;
}

/**
 * Defines valid properties in TabMenu component.
 */
export interface TabMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Defines if active route highlight should match the exact route path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Active index of menuitem.
     * @defaultValue 0
     */
    activeIndex?: number | undefined;
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
     * @type {TabMenuPassThroughOptions}
     */
    pt?: TabMenuPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in TabMenu component.
 */
export interface TabMenuSlots {
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
 * Defines valid emits in TabMenu component.
 */
export interface TabMenuEmits {
    /**
     * Callback to invoke when an active tab is changed.
     * @param {TabMenuChangeEvent} event - Custom tab change event.
     */
    'tab-change'(event: TabMenuChangeEvent): void;
}

/**
 * **PrimeVue - TabMenu**
 *
 * _TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu._
 *
 * [Live Demo](https://www.primevue.org/tabmenu/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TabMenu extends ClassComponent<TabMenuProps, TabMenuSlots, TabMenuEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TabMenu: GlobalComponentConstructor<TabMenu>;
    }
}

export default TabMenu;
