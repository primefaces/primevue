/**
 *
 * Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.
 *
 * [Live Demo](https://www.primevue.org/steps/)
 *
 * @module steps
 *
 */
import { VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Steps component.
 */
export interface StepsProps {
    /**
     * Unique identifier of the element.
     */
    id?: string | undefined;
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Whether the items are clickable or not.
     * @defaultValue true
     */
    readonly?: boolean | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @defaultValue true
     */
    exact?: boolean | undefined;
}

/**
 * Defines valid slots in Steps component.
 */
export interface StepsSlots {
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
}

/**
 * Defines valid emits in Steps component.
 */
export interface StepsEmits {}

/**
 * **PrimeVue - Steps**
 *
 * _Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps._
 *
 * [Live Demo](https://www.primevue.org/steps/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Steps extends ClassComponent<StepsProps, StepsSlots, StepsEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Steps: GlobalComponentConstructor<Steps>;
    }
}

export default Steps;
