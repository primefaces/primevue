import Vue from 'vue';

declare class RadioButton extends Vue {
    value?: any;
    modelValue?: any;
    $emit(eventName: string, event: Event): this;
}

export default RadioButton;