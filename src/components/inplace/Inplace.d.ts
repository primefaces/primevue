import Vue, {VNode} from 'vue';

export declare class Inplace extends Vue {
    closable?: boolean;
    active?: boolean;
    $slots: {
        display: VNode[];
        content: VNode[];
    }
}