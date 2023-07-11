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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ScrollPanelPassThroughOptionType = ScrollPanelPassThroughAttributes | ((options: ScrollPanelPassThroughMethodOptions) => ScrollPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ScrollPanelPassThroughMethodOptions {
    instance: any;
    props: ScrollPanelProps;
    state: ScrollPanelState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ScrollPanelProps.pt}
 */
export interface ScrollPanelPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ScrollPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the wrapper's DOM element.
     */
    wrapper?: ScrollPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: ScrollPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the horizontal panel's DOM element.
     */
    barX?: ScrollPanelPassThroughOptionType;
    /**
     * Uses to pass attributes to the vertical panel's DOM element.
     */
    barY?: ScrollPanelPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
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
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ScrollPanelPassThroughOptions}
     */
    pt?: ScrollPanelPassThroughOptions;
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
