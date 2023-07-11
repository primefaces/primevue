/**
 *
 * The helper DataViewLayoutOptions component can be used to switch between the modes however this component is optional and you may use your own UI to switch modes as well.
 *
 * [Live Demo](https://www.primevue.org/dataview/)
 *
 * @module dataviewlayoutoptions
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type DataViewLayoutOptionsPassThroughOptionType =
    | DataViewLayoutOptionsPassThroughAttributes
    | ((options: DataViewLayoutOptionsPassThroughMethodOptions) => DataViewLayoutOptionsPassThroughAttributes | string)
    | string
    | null
    | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DataViewLayoutOptionsPassThroughMethodOptions {
    instance: any;
    props: DataViewLayoutOptionsProps;
    state: DataViewLayoutOptionsState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link DataViewLayoutOptionsProps.pt}
 */
export interface DataViewLayoutOptionsPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: DataViewLayoutOptionsPassThroughOptionType;
    /**
     * Uses to pass attributes to the list button's DOM element.
     */
    listButton?: DataViewLayoutOptionsPassThroughOptionType;
    /**
     * Uses to pass attributes to the list icon's DOM element.
     */
    listIcon?: DataViewLayoutOptionsPassThroughOptionType;
    /**
     * Uses to pass attributes to the grid button's DOM element.
     */
    gridButton?: DataViewLayoutOptionsPassThroughOptionType;
    /**
     * Uses to pass attributes to the grid icon's DOM element.
     */
    gridIcon?: DataViewLayoutOptionsPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DataViewLayoutOptionsPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in DataViewLayoutOptions component.
 */
export interface DataViewLayoutOptionsState {
    /**
     * Current list button pressed state as a boolean.
     * @defaultValue false
     */
    isListButtonPressed: boolean;
    /**
     * Current grid button pressed state as a boolean.
     * @defaultValue false
     */
    isGridButtonPressed: boolean;
}

/**
 * Defines valid properties in DataViewLayoutOptions component.
 */
export interface DataViewLayoutOptionsProps {
    /**
     * Value of the component.
     */
    modelValue?: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {DataViewLayoutOptionsPassThroughOptions}
     */
    pt?: DataViewLayoutOptionsPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in DataViewLayoutOptions component.
 */
export interface DataViewLayoutOptionsSlots {
    /**
     * Custom list icon template.
     */
    listicon(): VNode[];
    /**
     * Custom grid icon template.
     */
    gridicon(): VNode[];
}

/**
 * Defines valid emits in DataViewLayoutOptions component.
 */
export interface DataViewLayoutOptionsEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: string): void;
}

/**
 * **PrimeVue - DataViewLayoutOptions**
 *
 * _The helper DataViewLayoutOptions component can be used to switch between the modes however this component is optional and you may use your own UI to switch modes as well._
 *
 * [Live Demo](https://www.primevue.org/dataview/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class DataViewLayoutOptions extends ClassComponent<DataViewLayoutOptionsProps, DataViewLayoutOptionsSlots, DataViewLayoutOptionsEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DataViewLayoutOptions: GlobalComponentConstructor<DataViewLayoutOptions>;
    }
}

export default DataViewLayoutOptions;
