interface DataViewLayoutOptionsProps {
    modelValue?: string;
}

declare class DataViewLayoutOptions {
    $props: DataViewLayoutOptionsProps;
    $emit(eventName: 'update:modelValue', value: string): this;
}

export default DataViewLayoutOptions;
