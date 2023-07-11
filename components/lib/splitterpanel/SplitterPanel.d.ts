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
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type SplitterPanelPassThroughOptionType = SplitterPanelPassThroughAttributes | ((options: SplitterPanelPassThroughMethodOptions) => SplitterPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SplitterPanelPassThroughMethodOptions {
    instance: any;
    props: SplitterPanelProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link PanelProps.pt}
 */
export interface SplitterPanelPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: SplitterPanelPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SplitterPanelPassThroughAttributes {
    [key: string]: any;
}

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
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {SplitterPanelPassThroughOptions}
     */
    pt?: SplitterPanelPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class SplitterPanel extends ClassComponent<SplitterPanelProps, SplitterPanelSlots, SplitterPanelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SplitterPanel: GlobalComponentConstructor<SplitterPanel>;
    }
}

export default SplitterPanel;
