import Vue from 'vue';

declare class Rating extends Vue {
    value?: number;
    disabled?: boolean;
    readonly?: boolean;
    stars?: number;
    cancel?: boolean;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', e: { originalEvent: Event, value: any }): this;
}

export default Rating;