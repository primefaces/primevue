/**
 *
 * SplitterPanel is a helper component for Splitter component.
 *
 * [Live Demo](https://www.primevue.org/splitter/)
 *
 * @module splitterpanel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type SplitterPanelPassThroughOptionType = SplitterPanelPassThroughAttributes | ((options: SplitterPanelPassThroughMethodOptions) => SplitterPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SplitterPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SplitterPanelProps;
    /**
     * Defines current options.
     */
    context: SplitterPanelContext;
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
 * @see {@link SplitterPanelProps.pt}
 */
export interface SplitterPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitterPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
 * Defines options in SplitterPanel component.
 */
export interface SplitterPanelContext {
    /**
     * Current nested state of the panel.
     */
    nested?: boolean;
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {SplitterPanelPassThroughOptions}
     */
    pt?: PassThrough<SplitterPanelPassThroughOptions>;
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
 * Defines valid slots in SplitterPanel slots.
 */
export interface SplitterPanelSlots {
    /**
     * Custom content template.
     */
    default: () => VNode[];
}

export interface SplitterPanelEmitsOptions {}

export declare type SplitterPanelEmits = EmitFn<SplitterPanelEmitsOptions>;

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
declare const SplitterPanel: DefineComponent<SplitterPanelProps, SplitterPanelSlots, SplitterPanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        SplitterPanel: DefineComponent<SplitterPanelProps, SplitterPanelSlots, SplitterPanelEmits>;
    }
}

export default SplitterPanel;
