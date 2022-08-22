import Vue, {VNode} from 'vue';

declare class DeferredContent extends Vue {
    $emit(eventName: 'load'): this;
    $slots: {
        '': VNode[];
    }
}

export default DeferredContent;