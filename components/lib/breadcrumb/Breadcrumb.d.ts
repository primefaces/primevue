/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primevue.org/breadcrumb/)
 *
 * @module breadcrumb
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

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
    menu?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: BreadcrumbPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: BreadcrumbPassThroughOptionType;
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @deprecated since v3.40.0.
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    ariaLabelledby?: string | undefined;
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
export interface BreadcrumbEmits {}

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
declare class Breadcrumb extends ClassComponent<BreadcrumbProps, BreadcrumbSlots, BreadcrumbEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Breadcrumb: GlobalComponentConstructor<Breadcrumb>;
    }
}

export default Breadcrumb;
