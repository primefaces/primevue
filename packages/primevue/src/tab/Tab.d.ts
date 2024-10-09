/**
 *
 * Tab is a helper component for Tabs component.
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 *
 * @module tab
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { Component, VNode } from 'vue';

export declare type TabPassThroughOptionType = TabPassThroughAttributes | ((options: TabPassThroughMethodOptions) => TabPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TabProps;
    /**
     * Defines current options.
     */
    context: TabContext;
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
 * @see {@link TabProps.pt}
 */
export interface TabPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface TabPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Tab component.
 */
export interface TabProps {
    /**
     * Value of tab.
     */
    value: string | number;
    /**
     * Whether the tab is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue BUTTON
     */
    as?: string | Component | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TabPassThroughOptions}
     */
    pt?: PassThrough<TabPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in Tab component.
 */
export interface TabContext {
    /**
     * Whether the tab is active.
     */
    active: boolean;
}

/**
 * Defines valid slots in Tab slots.
 */
export interface TabSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface TabEmitsOptions {}

export declare type TabEmits = EmitFn<TabEmitsOptions>;

/**
 * **PrimeVue - Tab**
 *
 * _Tab is a helper component for Tabs component._
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Tab: DefineComponent<TabProps, TabSlots, TabEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Tab: DefineComponent<TabProps, TabSlots, TabEmits>;
    }
}

export default Tab;
