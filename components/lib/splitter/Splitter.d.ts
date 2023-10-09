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
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type SplitterPassThroughOptionType = SplitterPassThroughAttributes | ((options: SplitterPassThroughMethodOptions) => SplitterPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SplitterPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SplitterProps;
    /**
     * Defines current inline state.
     */
    state: SplitterState;
    /**
     * Defines current options.
     */
    context: SplitterContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
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
 * Custom resize event.
 * @see {@link SplitterEmits.resize}
 */
export interface SplitterResizeEvent {
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
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitterPassThroughOptionType;
    /**
     * Used to pass attributes to the gutter's DOM element.
     */
    gutter?: SplitterPassThroughOptionType;
    /**
     * Used to pass attributes to the gutter handler's DOM element.
     */
    gutterHandler?: SplitterPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks
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
 * Defines options in Splitter component.
 */
export interface SplitterContext {
    /**
     * Current nested state of the component.
     */
    nested?: boolean;
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
     * Used to pass attributes to DOM elements inside the component.
     * @type {SplitterPassThroughOptions}
     */
    pt?: PassThrough<SplitterPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
     * Callback to invoke during the resizing process.
     * @param {SplitterResizeEvent} event - Custom resize event.
     */
    resize(event: SplitterResizeEvent): void;
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
