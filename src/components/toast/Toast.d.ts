interface ToastProps {
    group?: string;
    position?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    breakpoints?: {[key: string]: string};
}

interface ToastMessageSlotInterface {
    message: any;
}

declare class Toast {
    $props: ToastProps;
    $slots: {
        message: ToastMessageSlotInterface;
    }
}

export default Toast;
