import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

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

export declare type BreadcrumbEmits = {
}

declare class Breadcrumb extends ClassComponent<BreadcrumbProps, BreadcrumbSlots, BreadcrumbEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Breadcrumb: GlobalComponentConstructor<Breadcrumb>
    }
}

/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * Helper API:
 *
 * - [MenuItem](https://www.primefaces.org/primevue/showcase/#/menumodel)
 *
 * Demos:
 *
 * - [Breadcrumb](https://www.primefaces.org/primevue/showcase/#/breadcrumb)
 *
 */
export default Breadcrumb;
