import { VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface BreadcrumbProps {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[];
    /**
     * Configuration for the home icon.
     */
    home?: MenuItem;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean;
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-label'?: string | undefined;
    /**
     * Identifier of the underlying menu element.
     */
    'aria-labelledby'?: string | undefined;
}

export interface BreadcrumbSlots {
    /**
     * Custom item template.
     * @param {Object} scope - item slot's params.
     */
    item: (scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
    }) => VNode[];
}

export declare type BreadcrumbEmits = {};

declare class Breadcrumb extends ClassComponent<BreadcrumbProps, BreadcrumbSlots, BreadcrumbEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Breadcrumb: GlobalComponentConstructor<Breadcrumb>;
    }
}

/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/menumodel)
 *
 * Demos:
 *
 * - [Breadcrumb](https://www.primefaces.org/primevue/breadcrumb)
 *
 */
export default Breadcrumb;
