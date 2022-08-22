import Vue, { VNode } from 'vue';

declare class MegaMenu extends Vue {
    model?: any[];
    orientation?: string;
    exact?: boolean;
    $slots: {
        start: VNode[];
        end: VNode[];
    }
}

export default MegaMenu;