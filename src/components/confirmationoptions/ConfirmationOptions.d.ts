export interface ConfirmationOptions {
    /**
     * Element to align the overlay.
     */
    target?: HTMLElement | undefined;
    /**
     * Message of the confirmation.
     */
    message?: string | undefined;
    /**
     * Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.
     */
    group?: string | undefined;
    /**
     * Icon to display next to the message.
     */
    icon?: string | undefined;
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
}
