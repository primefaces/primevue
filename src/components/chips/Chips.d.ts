import { VNode } from 'vue';

interface ChipsProps {
    modelValue?: any[];
    max?: number;
    addOnBlur?: boolean;
    allowDuplicate?: boolean;
    separator?: string;
    class?: string;
    style?: any;
}

declare class Chips {
    $props: ChipsProps;
    $emit(eventName: 'update:modelValue', value: any[]): this;
    $emit(eventName: 'add', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'remove', e: { originalEvent: Event, value: any }): this;
    $slots: {
        chip: VNode[];
    }
}

export default Chips;
