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
import { ComponentHooks } from '../basecomponent';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type StepsPassThroughOptionType = StepsPassThroughAttributes | ((options: StepsPassThroughMethodOptions) => StepsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepsPassThroughMethodOptions {
    instance: any;
    props: StepsProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link StepsProps.pt}
 */
export interface StepsPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: StepsPassThroughOptionType;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: StepsPassThroughOptionType;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: StepsPassThroughOptionType;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: StepsPassThroughOptionType;
    /**
     * Uses to pass attributes to the step's DOM element.
     */
    step?: StepsPassThroughOptionType;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: StepsPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface StepsPassThroughAttributes {
    [key: string]: any;
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {StepsPassThroughOptions}
     */
    pt?: StepsPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
