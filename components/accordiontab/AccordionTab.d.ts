/**
 *
 * AccordionTab is a helper component for Accordion.
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
     * @defaultValue false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid slots in AcordionTab slots.
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
 * Defines valid emits in AcordionTab component.
 */
export interface AccordionTabEmits {}

/**
 * **PrimeVue - Accordion**
 *
 * _AccordionTab is a helper component for Accordion.._
 *
 * [Live Demo](https://www.primevue.org/accordion/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class AccordionTab extends ClassComponent<AccordionTabProps, AccordionTabSlots, AccordionTabEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AccordionTab: GlobalComponentConstructor<AccordionTab>;
    }
}

export default AccordionTab;
