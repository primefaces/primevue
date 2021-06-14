import { VNode } from 'vue';

interface AccordionProps {
    multiple?: boolean;
    activeIndex?: Number|[Number];
    lazy?: boolean;
}

declare class Accordion {
    $props: AccordionProps;
    $emit(eventName: 'update:activeIndex', value: number): this;
    $emit(eventName: 'tab-open', e: {originalEvent: Event, tab: any}): this;
    $emit(eventName: 'tab-close', e: {originalEvent: Event, tab: any}): this;
    $slots: {
        '': VNode[];
    }
}

export default Accordion;
