import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type SplitterLayoutType = 'horizontal' | 'vertical' | undefined;

type SplitterStateStorageType = 'local' | 'session' | undefined;

export interface SplitterResizeEndEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Sizes of the panels
     */
    sizes: number[];
}

export interface SplitterProps {
    /**
     * Orientation of the panels.
     * @see SplitterLayoutType
     * Default value is 'horizontal'.
     */
    layout?: SplitterLayoutType;
    /**
     * Size of the divider in pixels.
     * Default value is 4.
     */
    gutterSize?: number | undefined;
    /**
     * Storage identifier of a stateful Splitter.
     */
    stateKey?: string | undefined;
    /**
     * Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
     * @see SplitterStateStorageType
     * Default value is 'session'.
     */
    stateStorage?: SplitterStateStorageType;
}

export interface SplitterSlots {
    /**
     * Default slot to detect SplitterPanel components.
     */
    default: () => VNode[];
}

export declare type SplitterEmits = {
    /**
     * Callback to invoke when resize ends.
     * @param {SplitterResizeEndEvent} event - Custom resize end event.
     */
    'resizeend': (event: SplitterResizeEndEvent) => void;
}

declare class Splitter extends ClassComponent<SplitterProps, SplitterSlots, SplitterEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Splitter: GlobalComponentConstructor<Splitter>
    }
}

/**
 *
 * Splitter is utilized to separate and resize panels.
 *
 * Helper Components:
 *
 * - SplitterPanel
 *
 * Demos:
 *
 * - [Splitter](https://www.primefaces.org/primevue/showcase/#/splitter)
 *
 */
export default Splitter;
