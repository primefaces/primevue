import { VNode } from 'vue';

interface TabViewProps {
    activeIndex?: number;
    lazy?: boolean;
}

declare class TabView {
    $props: TabViewProps;
    $emit(eventName: 'tab-change', e: { originalEvent: Event, index: number }): this;
    $emit(eventName: 'tab-click', e: { originalEvent: Event, index: number }): this;
    $slots: {
        '': VNode[];
    }
}

export default TabView;
