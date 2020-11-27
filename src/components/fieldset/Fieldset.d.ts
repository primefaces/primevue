import Vue, { VNode } from 'vue';

declare class Fieldset extends Vue {
    legend?: string;
    toggleable?: boolean;
    collapsed?: boolean;
    $emit(eventName: 'toggle', e: { originalEvent: Event, value: boolean }): this;
    $slots: {
        '': VNode[];
        legend: VNode[];   
    }
}

export default Fieldset;