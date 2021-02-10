import { VNode } from 'vue';

interface TabViewProps {
    activeIndex?: number;
}

declare class TabView {
    $props: TabViewProps;
    $emit(eventName: 'tab-change', e: { originalEvent: Event, tab: any }): this;
    $slots: {
        '': VNode[];
    }
}

export default TabView;
