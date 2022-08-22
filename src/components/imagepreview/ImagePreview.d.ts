import Vue, { VNode } from 'vue';

declare class ImagePreview extends Vue {
    preview?: boolean;
    $slots: {
        'indicator': VNode[];
    }
}

export default ImagePreview;