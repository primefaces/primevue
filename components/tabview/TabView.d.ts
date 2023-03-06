/**
 *
 * TabView is a container component to group content with tabs.
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 *
 * @module tabview
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom tab change event.
 * @see {@link TabViewEmits['tab-change']}
 */
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
 * Custom tab change event.
 * @see {@link TabViewEmits['tab-click']}
 * @extends TabViewChangeEvent
 */
export interface TabViewClickEvent extends TabViewChangeEvent {}

/**
 * Defines valid properties in TabView component.
 */
export interface TabViewProps {
    /**
     * Index of the active tab.
     * @defaultValue 0
     */
    activeIndex?: number | undefined;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @defaultValue false
     */
    scrollable?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabindex?: number | undefined;
    /**
     * When enabled, the focused tab is activated.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the previous button.
     */
    previousButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the next button.
     */
    nextButtonProps?: ButtonHTMLAttributes | undefined;
}

/**
 * Defines valid slots in TabView slots.
 */
export interface TabViewSlots {
    /**
     * Default slot to detect TabPanel components.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in TabView component.
 */
export interface TabViewEmits {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue'(value: number): void;
    /**
     * Callback to invoke when an active tab is changed.
     * @param {TabViewChangeEvent} event - Custom tab change event.
     */
    'tab-change'(event: TabViewChangeEvent): void;
    /**
     * Callback to invoke when an active tab is clicked.
     * @param {TabViewClickEvent} event - Custom tab click event.
     */
    'tab-click'(event: TabViewClickEvent): void;
}

/**
 * **PrimeVue - TabView**
 *
 * _TabView is a container component to group content with tabs._
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TabView extends ClassComponent<TabViewProps, TabViewSlots, TabViewEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TabView: GlobalComponentConstructor<TabView>;
    }
}

export default TabView;
