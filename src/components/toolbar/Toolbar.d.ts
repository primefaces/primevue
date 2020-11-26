import Vue, { VNode } from 'vue';

declare class Toolbar extends Vue {
    $slots: {
        left: VNode[];
        right: VNode[];
    }
}

export default Toolbar;