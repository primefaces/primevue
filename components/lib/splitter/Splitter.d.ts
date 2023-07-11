/**
 *
 * Splitter is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primevue.org/splitter/)
 *
 * @module splitter
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type SplitterPassThroughOptionType = SplitterPassThroughAttributes | ((options: SplitterPassThroughMethodOptions) => SplitterPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SplitterPassThroughMethodOptions {
    instance: any;
    props: SplitterProps;
    state: SplitterState;
}

/**
 * Custom resize start event.
 * @see {@link SplitterEmits.resizestart}
 */
export interface SplitterResizeStartEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Sizes of the panels
     */
    sizes: number[];
}

/**
 * Custom resize end event.
 * @see {@link SplitterEmits.resizeend}
 */
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

/**
 * Custom passthrough(pt) options.
 * @see {@link SplitterProps.pt}
 */
export interface SplitterPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: SplitterPassThroughOptionType;
    /**
     * Uses to pass attributes to the gutter's DOM element.
     */
    gutter?: SplitterPassThroughOptionType;
    /**
     * Uses to pass attributes to the gutter handler's DOM element.
     */
    gutterHandler?: SplitterPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SplitterPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Panel component.
 */
export interface SplitterState {
    /**
     * Previous size state as a number.
     */
    prevSize: number;
}

/**
 * Defines valid properties in Splitter component.
 */
export interface SplitterProps {
    /**
     * Orientation of the panels.
     * @defaultValue horizontal
     */
    layout?: 'horizontal' | 'vertical' | undefined;
    /**
     * Size of the divider in pixels.
     * @defaultValue 4
     */
    gutterSize?: number | undefined;
    /**
     * Storage identifier of a stateful Splitter.
     */
    stateKey?: string | undefined;
    /**
     * Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
     * @defaultValue session
     */
    stateStorage?: 'local' | 'session' | undefined;
    /**
     * Step factor to increment/decrement the size of the panels while pressing the arrow keys.
     * @defaultValue 1
     */
    step?: number | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {SplitterPassThroughOptions}
     */
    pt?: SplitterPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Splitter slots.
 */
export interface SplitterSlots {
    /**
     * Default slot to detect SplitterPanel components.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in Splitter component.
 */
export interface SplitterEmits {
    /**
     * Callback to invoke when resize starts.
     * @param {SplitterResizeStartEvent} event - Custom resize start event.
     */
    resizestart(event: SplitterResizeStartEvent): void;
    /**
     * Callback to invoke when resize ends.
     * @param {SplitterResizeEndEvent} event - Custom resize end event.
     */
    resizeend(event: SplitterResizeEndEvent): void;
}

/**
 * **PrimeVue - Splitter**
 *
 * _Splitter is utilized to separate and resize panels._
 *
 * [Live Demo](https://www.primevue.org/splitter/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Splitter extends ClassComponent<SplitterProps, SplitterSlots, SplitterEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Splitter: GlobalComponentConstructor<Splitter>;
    }
}

export default Splitter;
