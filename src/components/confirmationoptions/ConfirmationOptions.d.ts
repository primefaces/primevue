type ConfirmationPositionType = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' | undefined;

export interface ConfirmationOptions {
    /**
     * Element to align the overlay.
     */
    target?: HTMLElement | undefined;
    /**
     * Header text of the dialog.
     */
    header?: string | undefined;
    /**
     * Message of the confirmation.
     */
    message?: string | undefined;
    /**
     * Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.
     */
    group?: string | undefined;
    /**
     * Position of the dialog, options are 'center', 'top', 'bottom', 'left', 'right', 'topleft', 'topright', 'bottomleft' or 'bottomright'.
     * @see ConfirmationPositionType
     * Default value is 'center'.
     */
    position?: ConfirmationPositionType;
    /**
     * Icon to display next to the message.
     */
    icon?: string | undefined;
    /**
     * Whether background scroll should be blocked when dialog is visible.
     */
    blockScroll?: boolean | undefined;
    /**
     * Callback to execute when action is confirmed.
     */
    accept?: () => void;
    /**
     * Callback to execute when action is rejected.
     */
    reject?: () => void;
    /**
     * Label of the accept button. Defaults to PrimeVue Locale configuration.
     */
    acceptLabel?: string | undefined;
    /**
     * Label of the reject button. Defaults to PrimeVue Locale configuration.
     */
    rejectLabel?: string | undefined;
    /**
     * Icon of the accept button.
     */
    acceptIcon?: string | undefined;
    /**
     * Icon of the reject button.
     */
    rejectIcon?: string | undefined;
    /**
     * Style class of the accept button.
     */
    acceptClass?: string | undefined;
    /**
     * Style class of the reject button.
     */
    rejectClass?: string | undefined;
    /**
     * Element to receive the focus when the dialog gets visible, valid values are "accept" and "reject".
     */
    defaultFocus?: string | undefined;
}
