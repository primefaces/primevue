import Vue from 'vue';

export declare class Menuitem extends Vue {
    item?: any;
    $emit(eventName: 'click', e: { originalEvent: Event, item: any }): this;
}