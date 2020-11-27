import Vue, { VNode } from 'vue';

declare class Accordion extends Vue {
    multiple?: boolean;
    $emit(eventName: 'tab-open', e: {originalEvent: Event, tab: any}): this;
    $emit(eventName: 'tab-close', e: {originalEvent: Event, tab: any}): this;
    $slots: {
        '': VNode[];
    }
}

export default Accordion;