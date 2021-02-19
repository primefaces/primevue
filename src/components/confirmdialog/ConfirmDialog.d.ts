interface ConfirmDialogProps {
    group?: string;
    breakpoints?: {[key: string]: string};
}

declare class ConfirmDialog {
    $props: ConfirmDialogProps;
}

export default ConfirmDialog;
