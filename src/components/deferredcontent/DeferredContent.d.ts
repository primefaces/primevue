import Vue, {VNode} from 'vue';

export declare class DeferredContent extends Vue {
    $emit(eventName: 'load'): this;
    $slots: {
        '': VNode[];
    }
}