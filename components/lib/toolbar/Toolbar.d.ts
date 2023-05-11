/**
 *
 * Toolbar is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primevue.org/toolbar/)
 *
 * @module toolbar
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ToolbarPassThroughOptionType = ToolbarPassThroughAttributes | ((options: ToolbarPassThroughMethodOptions) => ToolbarPassThroughAttributes) | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ToolbarPassThroughMethodOptions {
    props: ToolbarProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ToolbarProps.pt}
 */
export interface ToolbarPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ToolbarPassThroughOptionType;
    /**
     * Uses to pass attributes to the start's DOM element.
     */
    start?: ToolbarPassThroughOptionType;
    /**
     * Uses to pass attributes to the center's DOM element.
     */
    center?: ToolbarPassThroughOptionType;
    /**
     * Uses to pass attributes to the right's DOM element.
     */
    end?: ToolbarPassThroughOptionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ToolbarPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Toolbar component.
 */
export interface ToolbarProps {
    /**
     * Defines a string value that labels an interactive element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ToolbarPassThroughOptions}
     */
    pt?: ToolbarPassThroughOptions;
}

/**
 * Defines valid slots in Toolbar slots.
 */
export interface ToolbarSlots {
    /**
     * Custom start template.
     */
    start(): VNode[];

    /**
     * Custom center template.
     */
    center(): VNode[];

    /**
     * Custom end template.
     */
    end(): VNode[];
}
/**
 * Defines valid emits in Toolbar component.
 */
export interface ToolbarEmits {}

/**
 * **PrimeVue - Toolbar**
 *
 * _Toolbar is a grouping component for buttons and other content._
 *
 * [Live Demo](https://www.primevue.org/toolbar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Toolbar extends ClassComponent<ToolbarProps, ToolbarSlots, ToolbarEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Toolbar: GlobalComponentConstructor<Toolbar>;
    }
}

export default Toolbar;
