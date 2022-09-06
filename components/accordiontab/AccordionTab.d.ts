import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface AccordionTabProps {
    /**
     * Orientation of tab headers.
     */
    header?: string | undefined;
    /**
     * Whether the tab is disabled.
     */
    disabled?: boolean | undefined;
}

export interface AccordionTabSlots {
    /**
     * Default slot for content.
     */
    default: () => VNode[];
    /**
     * Custom content for the title section of a panel is defined using the header template.
     */
    header: () => VNode[];
}

export declare type AccordionTabEmits = { }

declare class AccordionTab extends ClassComponent<AccordionTabProps, AccordionTabSlots, AccordionTabEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        AccordionTab: GlobalComponentConstructor<AccordionTab>
    }
}

/**
 *
 * AccordionTab is a helper component for Accordion.
 *
 * Demos:
 *
 * - [Accordion](https://www.primefaces.org/primevue/showcase/#/accordion)
 *
 */
export default AccordionTab;
