/**
 *
 * DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.
 *
 * [Live Demo](https://www.primevue.org/deferredcontent/)
 *
 * @module deferredcontent
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type DeferredContentPassThroughOptionType = DeferredContentPassThroughAttributes | ((options: DeferredContentPassThroughMethodOptions) => DeferredContentPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DeferredContentPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: DeferredContentProps;
    /**
     * Defines current inline state.
     */
    state: DeferredContentState;
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
 * @see {@link DeferredContentProps.pt}
 */
export interface DeferredContentPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DeferredContentPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DeferredContentPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in DeferredContent component.
 */
export interface DeferredContentState {
    /**
     * Current loaded state as a boolean.
     * @defaultValue false
     */
    loaded?: boolean;
}

/**
 * Defines valid props in DeferredContent component.
 */
export interface DeferredContentProps {
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {DeferredContentPassThroughOptions}
     */
    pt?: PassThrough<DeferredContentPassThroughOptions>;
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
 * Defines valid slots in DeferredContent component.
 */
export interface DeferredContentSlots {
    /**
     * Default content slot.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in DeferredContent component.
 */
export interface DeferredContentEmits {
    /**
     * Callback to invoke when deferred content is loaded.
     */
    load(): void;
}

/**
 * **PrimeVue - DeferredContent**
 *
 * _DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll._
 *
 * [Live Demo](https://www.primevue.org/deferredcontent/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class DeferredContent extends ClassComponent<DeferredContentProps, DeferredContentSlots, DeferredContentEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        DeferredContent: GlobalComponentConstructor<DeferredContent>;
    }
}

export default DeferredContent;
