import Vue from 'vue';

export declare class SplitButton extends Vue {
    label?: string;
    icon?: string;
    model?: any[];
    disabled?: boolean;
    tabindex?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    $emit(eventName: 'click', event: Event): this;
}