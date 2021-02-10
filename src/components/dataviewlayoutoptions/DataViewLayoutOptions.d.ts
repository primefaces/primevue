interface DataViewLayoutOptionsProps {
    value?: string;
}

declare class DataViewLayoutOptions {
    $props: DataViewLayoutOptionsProps;
    $emit(eventName: 'input', layout: string): this;
}

export default DataViewLayoutOptions;
