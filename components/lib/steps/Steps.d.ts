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
import { ClassComponent, GlobalComponentConstructor, PTOptions } from '../ts-helpers';

export declare type StepsPassThroughOptionType = StepsPassThroughAttributes | ((options: StepsPassThroughMethodOptions) => StepsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepsPassThroughMethodOptions {
    instance: any;
    props: StepsProps;
    context: StepsContext;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link StepsProps.pt}
 */
export interface StepsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    menu?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    menuitem?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the step's DOM element.
     */
    step?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: StepsPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks
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
 * Defines current options in Steps component.
 */
export interface StepsContext {
    /**
     * Current menuitem
     */
    item: any;
    /**
     * Index of the menuitem.
     */
    index: number;
    /**
     * Current active state of menuitem as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current disabled state of menuitem as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepsPassThroughOptions}
     */
    pt?: PTOptions<StepsPassThroughOptions>;
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
