/**
 *
 * Steps components is an indicator for the steps in a wizard workflow. Example below uses nested routes with Steps.
 *
 * [Live Demo](https://www.primevue.org/steps/)
 *
 * @module steps
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { MenuItem } from 'primevue/menuitem';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type StepsPassThroughOptionType = StepsPassThroughAttributes | ((options: StepsPassThroughMethodOptions) => StepsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepsPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepsProps;
    /**
     * Defines current options.
     */
    context: StepsContext;
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
    list?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the list item's DOM element.
     */
    item?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the item link's DOM element.
     */
    itemLink?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the item number's DOM element.
     */
    itemNumber?: StepsPassThroughOptionType;
    /**
     * Used to pass attributes to the item label's DOM element.
     */
    itemLabel?: StepsPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
 * Defines valid router binding props in Steps component.
 */
export interface StepsRouterBindProps {
    /**
     * Action element binding
     */
    action: object;
    /**
     * Icon element binding
     */
    step: object;
    /**
     * Label element binding
     */
    label: object;
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
     * Active step index of menuitem.
     * @defaultValue 0
     */
    activeStep?: number | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepsPassThroughOptions}
     */
    pt?: PassThrough<StepsPassThroughOptions>;
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
        /**
         * Current active state of the menuitem
         */
        active: boolean;
        /**
         * Label property of the menuitem
         */
        label: string | ((...args: any) => string) | undefined;
        /**
         * Order of the menuitem
         */
        index: number;
        /**
         * Binding properties of the menuitem
         */
        props: StepsRouterBindProps;
    }): VNode[];
}

/**
 * Defines valid emits in Steps component.
 */
export interface StepsEmitsOptions {}

export declare type StepsEmits = EmitFn<StepsEmitsOptions>;

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
declare const Steps: DefineComponent<StepsProps, StepsSlots, StepsEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Steps: DefineComponent<StepsProps, StepsSlots, StepsEmits>;
    }
}

export default Steps;
