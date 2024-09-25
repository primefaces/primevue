/**
 *
 * TabList is a helper component for Tabs component.
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 *
 * @module tablist
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type TabListPassThroughOptionType = TabListPassThroughAttributes | ((options: TabListPassThroughMethodOptions) => TabListPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabListPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TabListProps;
    /**
     * Defines current options.
     */
    context: TabListContext;
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
 * @see {@link TabListProps.pt}
 */
export interface TabListPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabListPassThroughOptionType;
    /**
     * Used to pass attributes to the previous button component.
     */
    prevButton?: TabListPassThroughOptionType;
    /**
     * Used to pass attributes to the next button component.
     */
    nextButton?: TabListPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: TabListPassThroughOptionType;
    /**
     * Used to pass attributes to the tablist's DOM element.
     */
    tabList?: TabListPassThroughOptionType;
    /**
     * Used to pass attributes to the inkbar's DOM element.
     */
    activeBar?: TabListPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface TabListPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in TabList component.
 */
export interface TabListProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TabListPassThroughOptions}
     */
    pt?: PassThrough<TabListPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in TabList component.
 */
export interface TabListContext {
    [key: string]: any;
}

/**
 * Defines valid slots in TabList slots.
 */
export interface TabListSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface TabListEmitsOptions {}

export declare type TabListEmits = EmitFn<TabListEmitsOptions>;

/**
 * **PrimeVue - TabList**
 *
 * _TabList is a helper component for Tabs component._
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const TabList: DefineComponent<TabListProps, TabListSlots, TabListEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        TabList: DefineComponent<TabListProps, TabListSlots, TabListEmits>;
    }
}

export default TabList;
