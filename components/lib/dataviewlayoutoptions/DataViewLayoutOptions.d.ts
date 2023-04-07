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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in DataViewLayoutOptions component.
 */
export interface DataViewLayoutOptionsProps {
    /**
     * Value of the component.
     */
    modelValue?: string | undefined;
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
