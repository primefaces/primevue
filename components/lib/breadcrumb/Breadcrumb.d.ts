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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type BreadcrumbPassThroughOptionType = BreadcrumbPassThroughAttributes | ((options: BreadcrumbPassThroughMethodOptions) => BreadcrumbPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BreadcrumbPassThroughMethodOptions {
    instance: any;
    props: BreadcrumbProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link BreadcrumbProps.pt}
 */
export interface BreadcrumbPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to pass attributes to the separator's DOM element.
     */
    separator?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to pass attributes to the separator icon's DOM element.
     */
    separatorIcon?: BreadcrumbPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     * @defaultValue true
     */
    exact?: boolean | undefined;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {BreadcrumbPassThroughOptions}
     */
    pt?: BreadcrumbPassThroughOptions;
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

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Breadcrumb: GlobalComponentConstructor<Breadcrumb>;
    }
}

export default Breadcrumb;
