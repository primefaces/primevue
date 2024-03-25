/**
 *
 * Accordion groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordion
 *
 */
import { VNode } from 'vue';
import { AccordionTabPassThroughOptionType } from '../accordiontab';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

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
 * @see {@link AccordionEmits.tab-open}
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
 * @see {@link AccordionEmits.tab-close}
 * @extends {AccordionTabOpenEvent}
 */
export interface AccordionTabCloseEvent extends AccordionTabOpenEvent {}

/**
 * Custom tab open event.
 * @see {@link AccordionEmits.tab-open}
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
     * Used to pass attributes to AccordionTab helper components.
     * @deprecated since v3.30.1. Use 'accordiontab' property instead.
     */
    tab?: AccordionTabPassThroughOptionType;
    /**
     * Used to pass attributes to AccordionTab helper components.
     */
    accordiontab?: AccordionTabPassThroughOptionType;
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
     * Current active index state.
     */
    d_activeIndex: number | number[];
}

/**
 * Defines valid properties in Accordion component.
 */
export interface AccordionProps {
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Index of the active tab or an array of indexes in multiple mode.
     * @defaultValue null
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
export interface AccordionEmits {
    /**
     * Emitted when the active tab changes.
     * @param {number | undefined} value - Index of new active tab.
     */
    'update:activeIndex'(value: number | undefined): void;
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {AccordionTabOpenEvent} event - Custom tab open event.
     */
    'tab-open'(event: AccordionTabOpenEvent): void;
    /**
     * Callback to invoke when an active tab is collapsed by clicking on the header.
     * @param {AccordionTabCloseEvent} event - Custom tab close event.
     */
    'tab-close'(event: AccordionTabCloseEvent): void;
    /**
     * Callback to invoke when an active tab is clicked.
     * @param {AccordionClickEvent} event - Custom tab click event.
     */
    'tab-click'(event: AccordionClickEvent): void;
}

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
declare class Accordion extends ClassComponent<AccordionProps, AccordionSlots, AccordionEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Accordion: GlobalComponentConstructor<Accordion>;
    }
}

export default Accordion;
