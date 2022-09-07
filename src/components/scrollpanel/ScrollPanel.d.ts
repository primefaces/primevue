import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ScrollPanelProps {
    /**
     * Step factor to scroll the content while pressing the arrow keys.
     * Default value is 5.
     */
    step?: number | undefined;
}

export interface ScrollPanelSlots {
    /**
     * Custom content slot.
     */
    default: () => VNode[];
}

export declare type ScrollPanelEmits = {
}

declare class ScrollPanel extends ClassComponent<ScrollPanelProps, ScrollPanelSlots, ScrollPanelEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ScrollPanel: GlobalComponentConstructor<ScrollPanel>
    }
}

/**
 *
 * ScrollPanel is a cross browser, lightweight and themable alternative to native browser scrollbar.
 *
 * Demos:
 *
 * - [ScrollPanel](https://www.primefaces.org/primevue/scrollpanel)
 *
 */
export default ScrollPanel;
