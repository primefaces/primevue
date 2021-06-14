interface RatingProps {
    modelValue?: number;
    disabled?: boolean;
    readonly?: boolean;
    stars?: number;
    cancel?: boolean;
}

declare class Rating {
    $props: RatingProps;
    $emit(eventName: 'update:modelValue', value: number): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
}

export default Rating;
