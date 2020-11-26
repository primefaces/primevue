import Vue from 'vue';

declare class Rating extends Vue {
    modelValue?: number;
    disabled?: boolean;
    readonly?: boolean;
    stars?: number;
    cancel?: boolean;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
}

export default Rating;