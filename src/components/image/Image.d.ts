import { VNode } from 'vue';

interface ImageProps {
    preview?: boolean;
}

declare class Image {
    $props: ImageProps;
    $slots: {
        indicator: VNode[];
    }
}

export default Image;
