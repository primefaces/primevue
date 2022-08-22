import Vue, {VNode} from 'vue';

declare class Inplace extends Vue {
    closable?: boolean;
    active?: boolean;
    $slots: {
        display: VNode[];
        content: VNode[];
    }
}

export default Inplace;