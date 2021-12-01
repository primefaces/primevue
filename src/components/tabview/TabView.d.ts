import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface TabViewChangeEvent {
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
 * @extends TabViewChangeEvent
 */
export interface TabViewClickEvent extends TabViewChangeEvent { }

export interface TabViewProps {
    /**
     * Index of the active tab.
     */
    activeIndex?: number | undefined;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     */
    lazy?: boolean | undefined;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     */
    scrollable?: boolean | undefined;
}

export interface TabViewSlots {
    /**
     * Default slot to detect TabPanel components.
     */
    default: () => VNode[];
}

export declare type TabViewEmits = {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue': (value: number) => void;
    /**
     * Callback to invoke when an active tab is changed.
     * @param {TabViewChangeEvent} event - Custom tab change event.
     */
    'tab-change': (event: TabViewChangeEvent) => void;
    /**
     * Callback to invoke when an active tab is clicked.
     * @param {TabViewClickEvent} event - Custom tab click event.
     */
    'tab-click': (event: TabViewClickEvent) => void;
}

declare class TabView extends ClassComponent<TabViewProps, TabViewSlots, TabViewEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TabView: GlobalComponentConstructor<TabView>
    }
}

/**
 *
 * TabView is a container component to group content with tabs.
 *
 * Helper Components:
 *
 * - TabPanel
 *
 * Demos:
 *
 * - [TabView](https://www.primefaces.org/primevue/showcase/#/tabview)
 *
 */
export default TabView;
