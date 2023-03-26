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
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
