import Vue from 'vue';

declare class RadioButton extends Vue {
    value?: any;
    modelValue?: any;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'input', value: any): this;
    $emit(eventName: 'change', event: Event): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
}

export default RadioButton;