import Vue from 'vue';

declare class InputText extends Vue {
    value?: string;
    $emit(eventName: 'input', value: string): this;
}

export default InputText;