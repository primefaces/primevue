import Vue from 'vue';

declare class TriStateCheckbox extends Vue {
    modelValue?: any;
    $emit(eventName: string, event: Event): this;
}

export default TriStateCheckbox;