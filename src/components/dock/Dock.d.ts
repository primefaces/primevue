import Vue, { VNode } from 'vue';

declare class Dock extends Vue {
    position?: string;
    model?: any[];
    className?: string;
    styles?: any;
    tooltipOptions?: any;
    exact?: boolean;
    $slots: {
        'item': VNode[];
    }
}

export default Dock;