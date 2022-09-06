import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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

export interface SplitterPanelSlots {
    /**
     * Custom content template.
     */
    default: () => VNode[];
}

export declare type SplitterPanelEmits = {
}

declare class SplitterPanel extends ClassComponent<SplitterPanelProps, SplitterPanelSlots, SplitterPanelEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SplitterPanel: GlobalComponentConstructor<SplitterPanel>
    }
}

/**
 *
 * SplitterPanel is a helper component for Splitter component.
 *
 * Demos:
 *
 * - [SplitterPanel](https://www.primefaces.org/primevue/showcase/#/splitter)
 *
 */
export default SplitterPanel;
