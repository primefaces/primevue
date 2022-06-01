import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { MenuItem } from '../menuitem';

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
     * Default value is true.
     */
    readonly?: boolean | undefined;
    /**
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * Default value is true.
     */
    exact?: boolean | undefined;
}

export interface StepsSlots {
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

export declare type StepsEmits = {
}

declare class Steps extends ClassComponent<StepsProps, StepsSlots, StepsEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Steps: GlobalComponentConstructor<Steps>
    }
}

/**
 *
 * Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.
 *
 * Demos:
 *
 * - [Steps](https://www.primefaces.org/primevue/showcase/#/steps)
 *
 */
export default Steps;
