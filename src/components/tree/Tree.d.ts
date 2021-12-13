import Vue, {VNode} from 'vue';

type OriginalEventWithNode = {
    originalEvent: Event,
    node: any,
};

declare class Tree extends Vue {
    value?: any;
    expandedKeys?: any;
    selectionKeys?: any;
    selectionMode?: string;
    metaKeySelection?: string;
    loading?: boolean;
    loadingIcon?: string;
    filter?: boolean;
    filterBy?: string;
    filterMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    onNodeEnterCallback?: (originalEventWithNode: OriginalEventWithNode) => void;
    onNodeLeaveCallback?: (originalEventWithNode: OriginalEventWithNode) => void;
    $emit(eventName: 'node-select', node: any): this;
    $emit(eventName: 'node-unselect', node: any): this;
    $emit(eventName: 'node-expand', node: any): this;
    $emit(eventName: 'node-collapse', node: any): this;
    $emit(eventName: 'node-enter', originalEventWithNode: OriginalEventWithNode): this;
    $emit(eventName: 'node-leave', originalEventWithNode: OriginalEventWithNode): this;
    $slots: {
        [key: string]: VNode[];
    }
}

export default Tree;