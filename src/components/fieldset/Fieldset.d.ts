import { VNode } from 'vue';

interface FieldsetProps {
    legend?: string;
    toggleable?: boolean;
    collapsed?: boolean;
}

declare class Fieldset {
    $props: FieldsetProps;
    $emit(eventName: 'update:collapsed', value: boolean): this;
    $emit(eventName: 'toggle', e: { originalEvent: Event, value: boolean }): this;
    $slots: {
        '': VNode[];
        legend: VNode[];
    }
}

export default Fieldset;
