import Vue, { VNode } from 'vue';

export declare class OverlayPanel extends Vue {
    ismissable?: boolean;
    showCloseIcon?: boolean;
    appendTo?: string;
    baseZIndex?: number;
    autoZIndex?: boolean;
    $slots: {
        '': VNode[];
    }
}