import Vue, { VNode } from 'vue';

declare class Chips extends Vue {
    value?: any[];
    max?: number;
    ariaLabelledBy?: string;
    addOnBlur?: boolean;
    allowDuplicate?: boolean;
    separator?: string;
    placeholder?: string;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $emit(eventName: 'input', value: any[]): this;
    $emit(eventName: 'add', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'remove', e: { originalEvent: Event, value: any }): this;
    $slots: {
        chip: VNode[];
    }
}

export default Chips;