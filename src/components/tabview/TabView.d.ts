import { VNode } from 'vue';

interface TabViewProps {
    activeIndex?: number;
    lazy?: boolean;
    scrollable?: boolean;
}

declare class TabView {
    $props: TabViewProps;
    $emit(eventName: 'update:modelValue', value: number): this;
    $emit(eventName: 'tab-change', e: { originalEvent: Event, index: number }): this;
    $emit(eventName: 'tab-click', e: { originalEvent: Event, index: number }): this;
    $slots: {
        '': VNode[];
    }
}

export default TabView;
