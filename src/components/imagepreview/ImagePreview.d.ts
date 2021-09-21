import Vue, { VNode } from 'vue';

declare class Image extends Vue {
    preview?: boolean;
    $slots: {
        'indicator': VNode[];
    }
}

export default Image;