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
import { ComponentHooks } from '../basecomponent';
import { TabPanelPassThroughOptionType } from '../tabpanel';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type TabViewPassThroughOptionType = TabViewPassThroughAttributes | ((options: { props: TabViewProps; state: TabViewState }) => TabViewPassThroughAttributes | string) | string | null | undefined;

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
 * Custom passthrough(pt) options.
 * @see {@link TabViewProps.pt}
 */
export interface TabViewPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the nav container's DOM element.
     */
    navContainer?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the nav content's DOM element.
     */
    navContent?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    nav?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the inkbar's DOM element.
     */
    inkbar?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous button's DOM element.
     */
    previousButton?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the previous button icon's DOM element.
     */
    previousIcon?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the next button's DOM element.
     */
    nextButton?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the next button icon's DOM element.
     */
    nextIcon?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the panel's DOM element.
     */
    panelContainer?: TabViewPassThroughOptionType;
    /**
     * Uses to pass attributes to TabPanel helper components.
     * @deprecated since v3.30.1. Use 'tabpanel' property instead.
     */
    tab?: TabPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to TabPanel helper components.
     */
    tabpanel?: TabPanelPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TabViewPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in TabView component.
 */
export interface TabViewState {
    /**
     * Current active index state.
     */
    d_activeIndex: number;
    /**
     * Unique id for the TabView component.
     */
    id: string;
    /**
     * Current state of previous button.
     * @defaultValue true
     */
    isPrevButtonDisabled: boolean;
    /**
     * Current state of the next button.
     * @defaultValue false
     */
    isNextButtonDisabled: boolean;
}

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
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    previousButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the next button.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    nextButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Previous icon of the scrollable tabview.
     * @deprecated since v3.27.0. Use 'previousicon' slot.
     */
    prevIcon?: string | undefined;
    /**
     * Next icon of the scrollable tabview.
     * @deprecated since v3.27.0. Use 'next' slot.
     */
    nextIcon?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {TabViewPassThroughOptions}
     */
    pt?: TabViewPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in TabView slots.
 */
export interface TabViewSlots {
    /**
     * Default slot to detect TabPanel components.
     */
    default(): VNode[];
    /**
     * Previous button icon template for the scrollable component.
     */
    previousicon(): VNode[];
    /**
     * Next button icon template for the scrollable component.
     */
    nexticon(): VNode[];
}

/**
 * Defines valid emits in TabView component.
 */
export interface TabViewEmits {
    /**
     * Emitted when the activeIndex changes.
     * @param {number} index - Current activeIndex.
     */
    'update:activeIndex'(index: number): void;
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
