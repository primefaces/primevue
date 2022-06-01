import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
 * @extends {AccordionTabOpenEvent}
 */
export interface AccordionTabCloseEvent extends AccordionTabOpenEvent { }

export interface AccordionProps {
    /**
     * When enabled, multiple tabs can be activated at the same time.
     */
    multiple?: boolean | undefined;
    /**
     * Index of the active tab or an array of indexes in multiple mode.
     */
    activeIndex?: number | number[] | undefined;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
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
}

export interface AccordionSlots {
    /**
     * Default slot to detect AccordionTab components.
     */
    default: () => VNode[];
}

export declare type AccordionEmits = {
    /**
     * Emitted when the active tab changes.
     * @param {number | undefined} value - Index of new active tab.
     */
    'update:activeIndex': (value: number | undefined) => void;
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {AccordionTabOpenEvent} event - Custom tab open event.
     */
    'tab-open': (event: AccordionTabOpenEvent) => void;
    /**
     * Callback to invoke when an active tab is collapsed by clicking on the header.
     * @param {AccordionTabCloseEvent} event - Custom tab close event.
     */
    'tab-close': (event: AccordionTabCloseEvent) => void;
}

declare class Accordion extends ClassComponent<AccordionProps, AccordionSlots, AccordionEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Accordion: GlobalComponentConstructor<Accordion>
    }
}

/**
 *
 * Accordion groups a collection of contents in tabs.
 *
 * Helper Components:
 *
 * - AccordionTab
 *
 * Demos:
 *
 * - [Accordion](https://www.primefaces.org/primevue/showcase/#/accordion)
 *
 */
export default Accordion;
