import Vue, {VNode} from 'vue';

declare class ScrollPanel extends Vue {
    $slots: {
        '': VNode[];
    }
}

export default ScrollPanel;