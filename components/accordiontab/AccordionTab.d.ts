/**
 *
 * Accordion groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 *
 * @module accordiontab
 *
 */
import { AnchorHTMLAttributes, HTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in AccordionTab component.
 */
export interface AccordionTabProps {
    /**
     * Orientation of tab headers.
     */
    header?: string | undefined;
    /**
     * Inline style of the tab header.
     */
    headerStyle?: any;
    /**
     * Style class of the tab header.
     */
    headerClass?: any;
    /**
     * Uses to pass all properties of the HTMLDivElement to the tab header.
     */
    headerProps?: HTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLAnchorElement to the focusable anchor element inside the tab header.
     */
    headerActionProps?: AnchorHTMLAttributes | undefined;
    /**
     * Inline style of the tab content.
     */
    contentStyle?: any;
    /**
     * Style class of the tab content.
     */
    contentClass?: any;
    /**
     * Uses to pass all properties of the HTMLDivElement to the tab content.
     */
    contentProps?: HTMLAttributes | undefined;
    /**
     * Whether the tab is disabled.
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid slots in Acordion slots.
 */
export interface AccordionTabSlots {
    /**
     * Default slot for content.
     */
    default(): VNode[];
    /**
     * Custom content for the title section of a panel is defined using the header template.
     */
    header(): VNode[];
}

/**
 * Defines valid emits in Acordion component.
 */
export interface AccordionTabEmits {}

declare class AccordionTab extends ClassComponent<AccordionTabProps, AccordionTabSlots, AccordionTabEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AccordionTab: GlobalComponentConstructor<AccordionTab>;
    }
}

/**
 *
 * AccordionTab is a helper component for Accordion.
 *
 * Demos:
 *
 * - [Accordion](https://www.primefaces.org/primevue/accordion)
 *
 */
export default AccordionTab;
