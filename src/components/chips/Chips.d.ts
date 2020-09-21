import Vue, { VNode } from 'vue';

export declare class Chips extends Vue {
    modelValue?: any[];
    max?: number;
    addOnBlur?: boolean;
    allowDuplicate?: boolean;
    separator?: string;
    $emit(eventName: 'add', e: { originalEvent: Event, value: any }): this;
    $emit(eventName: 'remove', e: { originalEvent: Event, value: any }): this;
    $slots: {
        chip: VNode[];
    }
}