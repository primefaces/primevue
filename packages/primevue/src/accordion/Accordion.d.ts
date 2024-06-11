/**
 *
 * Accordion groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordion
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type AccordionPassThroughOptionType = AccordionPassThroughAttributes | ((options: AccordionPassThroughMethodOptions) => AccordionPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface AccordionPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: AccordionProps;
    /**
     * Defines current inline state.
     */
    state: AccordionState;
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
 * Custom tab open event.
 * @see {@link AccordionEmitsOptions.tab-open}
 */
export interface AccordionTabOpenEvent {
    /**
     * Browser mouse event.
     * @type {MouseEvent}
     */
    originalEvent: MouseEvent;
    /**
     * Opened tab index.
     */
    index: number;
}

/**
 * Custom tab close event.
 * @see {@link AccordionEmitsOptions.tab-close}
 * @extends {AccordionTabOpenEvent}
 */
export interface AccordionTabCloseEvent extends AccordionTabOpenEvent {}

/**
 * Custom tab open event.
 * @see {@link AccordionEmitsOptions.tab-open}
 * @extends AccordionTabOpenEvent
 */
export interface AccordionClickEvent extends AccordionTabOpenEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link AccordionProps.pt}
 */
export interface AccordionPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface AccordionPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Accordion component.
 */
export interface AccordionState {
    /**
     * Current id state as a string
     */
    id: string;
    /**
     * Current active value state.
     */
    d_value: string | string[];
}

/**
 * Defines valid properties in Accordion component.
 */
export interface AccordionProps {
    /**
     * Value of the active panel or an array of values in multiple mode.
     * @defaultValue null
     */
    value?: string | string[] | null | undefined;
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Index of the active tab or an array of indexes in multiple mode.
     * @defaultValue null
     * @deprecated since v4. Use value property instead.
     */
    activeIndex?: number | number[] | null | undefined;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * Icon of a collapsed tab.
     */
    expandIcon?: string | undefined;
    /**
     * Icon of an expanded tab.
     */
    collapseIcon?: string | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabindex?: number | undefined;
    /**
     * When enabled, the focused tab is activated.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {AccordionPassThroughOptions}
     */
    pt?: PassThrough<AccordionPassThroughOptions>;
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
 * Defines valid slots in Accordion slots.
 */
export interface AccordionSlots {
    /**
     * Default slot to detect AccordionTab components.
     */
    default(): VNode[];
    /**
     * Custom collapse icon template.
     */
    collapseicon(): VNode[];
    /**
     * Custom expand icon template.
     */
    expandicon(): VNode[];
}

/**
 * Defines valid emits in Accordion component.
 */
export interface AccordionEmitsOptions {
    /**
     * Emitted when the active panel changes.
     * @param {string | string[] | null | undefined} value - Value of new active panel.
     */
    'update:value'(value: string | string[] | null | undefined): void;
    /**
     * Emitted when the active tab changes.
     * @param {number | undefined} value - Index of new active tab.
     * @deprecated since v4. Use update:value emit instead.
     */
    'update:activeIndex'(value: number | undefined): void;
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {AccordionTabOpenEvent} event - Custom tab open event.
     * @deprecated since v4.
     */
    'tab-open'(event: AccordionTabOpenEvent): void;
    /**
     * Callback to invoke when an active tab is collapsed by clicking on the header.
     * @param {AccordionTabCloseEvent} event - Custom tab close event.
     * @deprecated since v4.
     */
    'tab-close'(event: AccordionTabCloseEvent): void;
    /**
     * Callback to invoke when an active tab is clicked.
     * @param {AccordionClickEvent} event - Custom tab click event.
     * @deprecated since v4.
     */
    'tab-click'(event: AccordionClickEvent): void;
}

export declare type AccordionEmits = EmitFn<AccordionEmitsOptions>;

/**
 * **PrimeVue - Accordion**
 *
 * _Accordion groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Accordion: DefineComponent<AccordionProps, AccordionSlots, AccordionEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Accordion: GlobalComponentConstructor<AccordionProps, AccordionSlots, AccordionEmits>;
    }
}

export default Accordion;
