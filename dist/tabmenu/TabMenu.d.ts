import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

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

export interface TabMenuProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Defines if active route highlight should match the exact route path.
     * Default value is true.
     */
    exact?: boolean | undefined;
    /**
     * Active index of menuitem.
     * Default value is 0.
     */
    activeIndex?: number | undefined;
}

export interface TabMenuSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
    }) => VNode[];
}

export declare type TabMenuEmits = {
    /**
     * Callback to invoke when an active tab is changed.
     * @param {TabMenuChangeEvent} event - Custom tab change event.
     */
    'tab-change': (event: TabMenuChangeEvent) => void;
}

declare class TabMenu extends ClassComponent<TabMenuProps, TabMenuSlots, TabMenuEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TabMenu: GlobalComponentConstructor<TabMenu>
    }
}

/**
 *
 * TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.
 *
 * Demos:
 *
 * - [TabMenu](https://www.primefaces.org/primevue/showcase/#/tabmenu)
 *
 */
export default TabMenu;
