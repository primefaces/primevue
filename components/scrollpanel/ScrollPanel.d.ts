/**
 *
 * ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * [Live Demo](https://www.primevue.org/scrollpanel/)
 *
 * @module scrollpanel
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ScrollPanel component.
 */
export interface ScrollPanelProps {
    /**
     * Step factor to scroll the content while pressing the arrow keys.
     * @defaultValue 5
     */
    step?: number | undefined;
}

/**
 * Defines valid slots in Accordion slots.
 */
export interface ScrollPanelSlots {
    /**
     * Custom content slot.
     */
    default: () => VNode[];
}

export interface ScrollPanelEmits {}

/**
 * **PrimeVue - ScrollPanel**
 *
 * _ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.._
 *
 * [Live Demo](https://www.primevue.org/scrollpanel/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class ScrollPanel extends ClassComponent<ScrollPanelProps, ScrollPanelSlots, ScrollPanelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ScrollPanel: GlobalComponentConstructor<ScrollPanel>;
    }
}

export default ScrollPanel;
