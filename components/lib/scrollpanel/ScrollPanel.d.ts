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
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ScrollPanelPassThroughOptionType = ScrollPanelPassThroughAttributes | ((options: ScrollPanelPassThroughMethodOptions) => ScrollPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ScrollPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ScrollPanelProps;
    /**
     * Defines current inline state.
     */
    state: ScrollPanelState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ScrollPanelProps.pt}
 */
export interface ScrollPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the wrapper's DOM element.
     */
    wrapper?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the horizontal panel's DOM element.
     */
    barX?: ScrollPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the vertical panel's DOM element.
     */
    barY?: ScrollPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ScrollPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Panel component.
 */
export interface ScrollPanelState {
    /**
     * Current id state as a string.
     */
    id: string;
    /**
     * Current scrollpanel orientation.
     * @defaultValue vertical
     */
    orientation: string;
    /**
     * Latest scroll top position.
     * @defaultValue 0
     */
    lastScrollTop: number;
    /**
     * Latest scroll left position.
     * @defaultValue 0
     */
    lastScrollLeft: number;
}

/**
 * Defines valid properties in ScrollPanel component.
 */
export interface ScrollPanelProps {
    /**
     * Step factor to scroll the content while pressing the arrow keys.
     * @defaultValue 5
     */
    step?: number | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ScrollPanelPassThroughOptions}
     */
    pt?: PassThrough<ScrollPanelPassThroughOptions>;
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
