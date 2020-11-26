import Vue from 'vue';

declare class Checkbox extends Vue {
    value?: null;
    modelValue?: null;
    binary?: boolean;
    $emit(eventName: string, event: Event): this;
}

export default Checkbox;