import Vue from 'vue';

declare class Toast extends Vue {
    group?: string;
    position?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    breakpoints?: {[key: string]: string};
}

export default Toast;