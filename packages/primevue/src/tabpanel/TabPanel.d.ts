/**
 *
 * TabPanel is a helper component for Tabs component.
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 *
 * @module tabpanel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { AnchorHTMLAttributes, Component, HTMLAttributes, LiHTMLAttributes, VNode } from 'vue';

export declare type TabPanelPassThroughOptionType = TabPanelPassThroughAttributes | ((options: TabPanelPassThroughMethodOptions) => TabPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TabPanelProps;
    /**
     * Defines current options.
     */
    context: TabPanelContext;
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
 * @see {@link TabPanelProps.pt}
 */
export interface TabPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     * @deprecated since v4. Only supported by TabView.
     */
    header?: TabPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the header action's DOM element.
     * @deprecated since v4. Only supported by TabView.
     */
    headerAction?: TabPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the title's DOM element.
     * @deprecated since v4. Only supported by TabView.
     */
    headerTitle?: TabPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     * @deprecated since v4. Only supported by TabView.
     */
    content?: TabPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
     * Value of tabpanel.
     */
    value: string | number;
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue DIV
     */
    as?: string | Component | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * Orientation of tab headers.
     * @deprecated since v4. Only supported by TabView.
     */
    header?: string | undefined;
    /**
     * Inline style of the tab header.
     * @deprecated since v4. Only supported by TabView.
     */
    headerStyle?: any;
    /**
     * Style class of the tab header.
     * @deprecated since v4. Only supported by TabView.
     */
    headerClass?: any;
    /**
     * Used to pass all properties of the HTMLLiElement to the tab header.
     * @deprecated since v4. Only supported by TabView.
     */
    headerProps?: LiHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLAnchorElement to the focusable anchor element inside the tab header.
     * @deprecated since v4. Only supported by TabView.
     */
    headerActionProps?: AnchorHTMLAttributes | undefined;
    /**
     * Inline style of the tab content.
     * @deprecated since v4. Only supported by TabView.
     */
    contentStyle?: any;
    /**
     * Style class of the tab content.
     * @deprecated since v4. Only supported by TabView.
     */
    contentClass?: any;
    /**
     * Used to pass all properties of the HTMLDivElement to the tab content.
     * @deprecated since v4. Only supported by TabView.
     */
    contentProps?: HTMLAttributes | undefined;
    /**
     * Whether the tab is disabled.
     * @defaultValue false
     * @deprecated since v4. Only supported by TabView.
     */
    disabled?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TabPanelPassThroughOptions}
     */
    pt?: PassThrough<TabPanelPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in TabPanel component.
 */
export interface TabPanelContext {
    /**
     * Current index of the tab.
     * @deprecated since v4. Only supported by TabView.
     */
    index: number;
    /**
     * Count of tabs
     * @deprecated since v4. Only supported by TabView.
     */
    count: number;
    /**
     * Whether the tab is first.
     * @deprecated since v4. Only supported by TabView.
     */
    first: boolean;
    /**
     * Whether the tab is last.
     * @deprecated since v4. Only supported by TabView.
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
     * @deprecated since v4. Only supported by TabView.
     */
    header(): VNode[];
}

export interface TabPanelEmitsOptions {}

export declare type TabPanelEmits = EmitFn<TabPanelEmitsOptions>;

/**
 * **PrimeVue - TabPanel**
 *
 * _TabPanel is a helper component for Tabs component._
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const TabPanel: DefineComponent<TabPanelProps, TabPanelSlots, TabPanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        TabPanel: GlobalComponentConstructor<TabPanelProps, TabPanelSlots, TabPanelEmits>;
    }
}

export default TabPanel;
