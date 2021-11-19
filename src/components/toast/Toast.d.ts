import Vue, { VNode } from 'vue';

declare class Toast extends Vue {
    group?: string;
    position?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    breakpoints?: {[key: string]: string};
    $slots: {
        message: VNode[];
    }
}

export default Toast;