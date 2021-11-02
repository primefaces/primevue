interface ConfirmPopupProps {
    group?: string;
}

interface ConfirmPopupMessageSlot {
    message: any;
}

declare class ConfirmPopup {
    $props: ConfirmPopupProps;
    $slots: {
        message: ConfirmPopupMessageSlot
    }
}

export default ConfirmPopup;
