import Vue, { VNode } from 'vue';

declare class SelectButton extends Vue {
    value?: any;
    options?: any[];
    optionLabel?: string | ((data: any) => string) | undefined;
    optionValue?: string | ((data: any) => any) | undefined;
    optionDisabled?: string | ((data: any) => boolean) | undefined;
    multiple?: boolean;
    disabled?: boolean;
    dataKey?: string;
    ariaLabelledBy?: string;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $slots: {
        option: VNode[];
    }
}

export default SelectButton;