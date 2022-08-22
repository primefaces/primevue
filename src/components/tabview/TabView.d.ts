import Vue, { VNode } from 'vue';

declare class TabView extends Vue {
    activeIndex?: number;
    scrollable?: boolean;
    $emit(eventName: 'tab-change', e: { originalEvent: Event, tab: any }): this;
    $emit(eventName: 'tab-click', e: { originalEvent: Event, tab: any }): this;
    $slots: {
        '': VNode[];
    }
}

export default TabView;