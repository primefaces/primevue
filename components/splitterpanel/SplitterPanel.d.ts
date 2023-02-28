/**
 *
 * SplitterPanel is a helper component for Splitter component.
 *
 * [Live Demo](https://www.primevue.org/splitter/)
 *
 * @module splitterpanel
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in SplitterPanel component.
 */
export interface SplitterPanelProps {
    /**
     * Size of the element relative to 100%.
     */
    size?: number | undefined;
    /**
     * Minimum size of the element relative to 100%.
     */
    minSize?: number | undefined;
}

/**
 * Defines valid slots in SplitterPanel slots.
 */
export interface SplitterPanelSlots {
    /**
     * Custom content template.
     */
    default: () => VNode[];
}

export interface SplitterPanelEmits {}

/**
 * **PrimeVue - SplitterPanel**
 *
 * _SplitterPanel is a helper component for Splitter component._
 *
 * [Live Demo](https://www.primevue.org/splitterpanel/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 * @group Component
 *
 */
export declare class SplitterPanel extends ClassComponent<SplitterPanelProps, SplitterPanelSlots, SplitterPanelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SplitterPanel: GlobalComponentConstructor<SplitterPanel>;
    }
}

/**
 *
 * SplitterPanel is a helper component for Splitter component.
 *
 * Demos:
 *
 * - [SplitterPanel](https://www.primefaces.org/primevue/splitter)
 *
 */
export default SplitterPanel;
