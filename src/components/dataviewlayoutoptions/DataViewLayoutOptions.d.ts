import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface DataViewLayoutOptionsProps {
    /**
     * Value of the component.
     */
    modelValue?: string | undefined;
}

export interface DataViewLayoutOptionsSlots {
}

export declare type DataViewLayoutOptionsEmits = {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue': (value: string) => void;
}

declare class DataViewLayoutOptions extends ClassComponent<DataViewLayoutOptionsProps, DataViewLayoutOptionsSlots, DataViewLayoutOptionsEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DataViewLayoutOptions: GlobalComponentConstructor<DataViewLayoutOptions>
    }
}

/**
 *
 * When both layout modes are enabled in DataView, a UI element would be necessary to let the user toggle between the view.
 * DataViewLayoutOptions is a helper component to display a buttonset to choose the layout mode in DataView.
 *
 * Demos:
 *
 * - [DataViewLayoutOptions](https://www.primefaces.org/primevue/showcase/#/dataview)
 *
 */
export default DataViewLayoutOptions;
