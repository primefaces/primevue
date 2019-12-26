import Vue from 'vue';

export declare class ToggleButton extends Vue {
    value?: boolean;
    onIcon?: string;
    offIcon?: string;
    onLabel?: string;
    offLabel?: string;
    inputId?: string;
    name?: string;
    iconPos?: string;
    disabled?: boolean;
    ariaLabelledBy?: string;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', event: Event): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
}