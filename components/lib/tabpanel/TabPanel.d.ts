/**
 *
 * TabPanel is a helper component for TabPanel component.
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 *
 * @module tabpanel
 *
 */
import { AnchorHTMLAttributes, HTMLAttributes, LiHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { TabViewPassThroughOptions } from '../tabview';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type TabPanelPassThroughOptionType = TabPanelPassThroughAttributes | ((options: TabPanelPassThroughMethodOptions) => TabPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabPanelPassThroughMethodOptions {
    instance: any;
    props: TabPanelProps;
    parent: TabViewPassThroughOptions;
    context: TabPanelContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TabPanelProps.pt}
 */
export interface TabPanelPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: TabPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: TabPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the header action's DOM element.
     */
    headerAction?: TabPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the title's DOM element.
     */
    headerTitle?: TabPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    content?: TabPanelPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface TabPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in TabPanel component.
 */
export interface TabPanelProps {
    /**
     * Orientation of tab headers.
     */
    header?: string | undefined;
    /**
     * Inline style of the tab header.
     */
    headerStyle?: any;
    /**
     * Style class of the tab header.
     */
    headerClass?: any;
    /**
     * Uses to pass all properties of the HTMLLiElement to the tab header.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    headerProps?: LiHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLAnchorElement to the focusable anchor element inside the tab header.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    headerActionProps?: AnchorHTMLAttributes | undefined;
    /**
     * Inline style of the tab content.
     */
    contentStyle?: any;
    /**
     * Style class of the tab content.
     */
    contentClass?: any;
    /**
     * Uses to pass all properties of the HTMLDivElement to the tab content.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    contentProps?: HTMLAttributes | undefined;
    /**
     * Whether the tab is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {TabPanelPassThroughOptions}
     */
    pt?: TabPanelPassThroughOptions;
}

/**
 * Defines current options in TabPanel component.
 */
export interface TabPanelContext {
    /**
     * Current index of the tab.
     */
    index: number;
    /**
     * Count of tabs
     */
    count: number;
    /**
     * Whether the tab is first.
     */
    first: boolean;
    /**
     * Whether the tab is last.
     */
    last: boolean;
    /**
     * Whether the tab is active.
     */
    active: boolean;
}

/**
 * Defines valid slots in TabPanel slots.
 */
export interface TabPanelSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom header template.
     */
    header(): VNode[];
}

export interface TabPanelEmits {}

/**
 * **PrimeVue - TabPanel**
 *
 * _TabPanel is a helper component for TabPanel component._
 *
 * [Live Demo](https://www.primevue.org/tabview/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TabPanel extends ClassComponent<TabPanelProps, TabPanelSlots, TabPanelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TabPanel: GlobalComponentConstructor<TabPanel>;
    }
}

export default TabPanel;
