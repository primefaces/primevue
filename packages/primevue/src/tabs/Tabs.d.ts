/**
 *
 * Tabs facilitates seamless switching between different views.
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 *
 * @module tabs
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type TabsPassThroughOptionType = TabsPassThroughAttributes | ((options: TabsPassThroughMethodOptions) => TabsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabsPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TabsProps;
    /**
     * Defines current inline state.
     */
    state: TabsState;
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
 * @see {@link TabsProps.pt}
 */
export interface TabsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabsPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TabsPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Tabs component.
 */
export interface TabsState {
    /**
     * Current active value state.
     */
    d_value: string | number;
    /**
     * Unique id for the Tabs component.
     */
    id: string;
}

/**
 * Defines valid properties in Tabs component.
 */
export interface TabsProps {
    /**
     * Value of the active tab.
     */
    value: string | number;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * When specified, enables horizontal and/or vertical scrolling.
     * @defaultValue false
     */
    scrollable?: boolean | undefined;
    /**
     * Whether to display navigation buttons in container when scrollable is enabled.
     * @defaultValue true
     */
    showNavigators?: boolean | undefined;
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TabsPassThroughOptions}
     */
    pt?: PassThrough<TabsPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Tabs slots.
 */
export interface TabsSlots {
    /**
     * Default slot to detect TabPanel components.
     */
    default(): VNode[];
    /**
     * Previous button icon template for the scrollable component.
     */
    previcon(): VNode[];
    /**
     * Next button icon template for the scrollable component.
     */
    nexticon(): VNode[];
}

/**
 * Defines valid emits in Tabs component.
 */
export interface TabsEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {string | number} value - Current value.
     */
    'update:value'(value: string | number): void;
}

export declare type TabsEmits = EmitFn<TabsEmitsOptions>;

/**
 * **PrimeVue - Tabs**
 *
 * _Tabs facilitates seamless switching between different views._
 *
 * [Live Demo](https://www.primevue.org/tabs/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Tabs: DefineComponent<TabsProps, TabsSlots, TabsEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Tabs: DefineComponent<TabsProps, TabsSlots, TabsEmits>;
    }
}

export default Tabs;
