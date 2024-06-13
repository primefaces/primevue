/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primevue.org/breadcrumb/)
 *
 * @module breadcrumb
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { MenuItem } from 'primevue/menuitem';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type BreadcrumbPassThroughOptionType = BreadcrumbPassThroughAttributes | ((options: BreadcrumbPassThroughMethodOptions) => BreadcrumbPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BreadcrumbPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: BreadcrumbProps;
    /**
     * Defines current options.
     */
    context: BreadcrumbContext;
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
 * @see {@link BreadcrumbProps.pt}
 */
export interface BreadcrumbPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the  item's DOM element.
     */
    item?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the item link's DOM element.
     */
    itemLink?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the item icon's DOM element.
     */
    itemIcon?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the item label's DOM element.
     */
    itemLabel?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the separator icon's DOM element.
     */
    separatorIcon?: BreadcrumbPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface BreadcrumbPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current options in Breadcrumb component.
 */
export interface BreadcrumbContext {
    /**
     * Current menuitem
     */
    item: any;
    /**
     * Index of the menuitem
     */
    index: number;
}

/**
 * Defines valid router binding props in Breadcrumb component.
 */
export interface BreadcrumbRouterBindProps {
    /**
     * Action element binding
     */
    action: object;
    /**
     * Icon element binding
     */
    icon: object;
    /**
     * Label element binding
     */
    label: object;
}

/**
 * Defines valid properties in Breadcrumb component.
 */
export interface BreadcrumbProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Configuration for the home icon.
     */
    home?: MenuItem | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {BreadcrumbPassThroughOptions}
     */
    pt?: PassThrough<BreadcrumbPassThroughOptions>;
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
 * Defines valid slots in Breadcrumb component.
 */
export interface BreadcrumbSlots {
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
        /**
         * Label property of the menuitem
         */
        label: string | ((...args: any) => string) | undefined;
        /**
         * Binding properties of the menuitem
         */
        props: BreadcrumbRouterBindProps;
    }): VNode[];
    /**
     * Custom separator template.
     */
    separator(): VNode[];
    /**
     * Custom item icon template.
     * @param {Object} scope - item icon slot's params.
     */
    itemicon(scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
        /**
         * Style class of the item icon element.
         */
        class: any;
    }): VNode[];
}

/**
 * Defines valid emits in Breadcrumb component.
 */
export interface BreadcrumbEmitsOptions {}

export declare type BreadcrumbEmits = EmitFn<BreadcrumbEmitsOptions>;

/**
 * **PrimeVue - Breadcrumb**
 *
 * _Breadcrumb provides contextual information about page hierarchy._
 *
 * [Live Demo](https://www.primevue.org/breadcrumb/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Breadcrumb: DefineComponent<BreadcrumbProps, BreadcrumbSlots, BreadcrumbEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Breadcrumb: GlobalComponentConstructor<BreadcrumbProps, BreadcrumbSlots, BreadcrumbEmits>;
    }
}

export default Breadcrumb;
