interface ToastProps {
    group?: string;
    position?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    breakpoints?: {[key: string]: string};
}

declare class Toast {
    $props: ToastProps;
}

export default Toast;
