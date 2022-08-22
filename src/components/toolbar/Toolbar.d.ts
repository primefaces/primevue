import Vue, { VNode } from 'vue';

declare class Toolbar extends Vue {
    $slots: {
        start: VNode[];
        right: VNode[];
    }
}

export default Toolbar;