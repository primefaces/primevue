import Vue, { VNode } from 'vue';

export declare class SelectButton extends Vue {
    modelValue?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: any;
    optionDisabled?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    dataKey?: string;
    ariaLabelledBy?: string;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $slots: {
        option: VNode[];
    }
}