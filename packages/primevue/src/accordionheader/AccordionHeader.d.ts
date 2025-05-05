/**
 *
 * AccordionHeader is a helper component for Accordion component.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordionheader
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { Component, VNode } from 'vue';

export declare type AccordionHeaderPassThroughOptionType = AccordionHeaderPassThroughAttributes | ((options: AccordionHeaderPassThroughMethodOptions) => AccordionHeaderPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AccordionHeaderPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AccordionHeaderProps;
    /**
     * Defines current options.
     */
    context: AccordionHeaderContext;
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
 * @see {@link AccordionHeaderProps.pt}
 */
export interface AccordionHeaderPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionHeaderPassThroughOptionType;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    toggleicon?: AccordionHeaderPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface AccordionHeaderPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in AccordionHeader component.
 */
export interface AccordionHeaderProps {
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue BUTTON
     */
    as?: string | Component | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AccordionHeaderPassThroughOptions}
     */
    pt?: PassThrough<AccordionHeaderPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in AccordionHeader component.
 */
export interface AccordionHeaderContext {
    /**
     * Whether the item is active.
     */
    active: boolean;
}

/**
 * Defines valid slots in AccordionHeader slots.
 */
export interface AccordionHeaderSlots {
    /**
     * Custom content template.
     */
    default(scope: {
        /**
         * Whether the item is active.
         */
        active: boolean;
    }): VNode[];
    /**
     * Custom toggleicon template.
     */
    toggleicon(): VNode[];
}

export interface AccordionHeaderEmitsOptions {}

export declare type AccordionHeaderEmits = EmitFn<AccordionHeaderEmitsOptions>;

/**
 * **PrimeVue - AccordionHeader**
 *
 * _AccordionHeader is a helper component for Accordion component._
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const AccordionHeader: DefineComponent<AccordionHeaderProps, AccordionHeaderSlots, AccordionHeaderEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AccordionHeader: DefineComponent<AccordionHeaderProps, AccordionHeaderSlots, AccordionHeaderEmits>;
    }
}

export default AccordionHeader;
