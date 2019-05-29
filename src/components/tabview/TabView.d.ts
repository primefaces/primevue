import Vue, { VNode } from 'vue';

export declare class TabView extends Vue {
    $emit(eventName: 'tab-change', e: { originalEvent: Event, tab: any }): this;
    $slots: {
        '': VNode[];
    }
}