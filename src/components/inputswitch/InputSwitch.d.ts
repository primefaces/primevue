import Vue from 'vue';

declare class InputSwitch extends Vue {
    value?: boolean;
    inputId?: string;
    name?: string;
    disabled?: boolean;
    ariaLabelledBy?: string;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', event: Event): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
}

export default InputSwitch;