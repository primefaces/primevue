interface ToastProps {
    group?: string;
    position?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
}

declare class Toast {
    $props: ToastProps;
}

export default Toast;
