import { DialogProps } from '../dialog';

export type DynamicDialogCloseType = 'config-close' | 'dialog-close' | undefined;

export interface DynamicDialogTemplates {
    /**
     * Custom header template.
     */
    header?: any;
    /**
     * Custom footer template.
     */
    footer?: any;
}

export interface DynamicDialogCloseOptions {
    /**
     * Custom data object
     */
    data?: any;
    /**
     * Close type
     * @see DynamicDialogCloseType
     */
    type: DynamicDialogCloseType;
}

export interface DynamicDialogOptions {
    /**
     * Dialog Props
     * @see DialogProps
     */
    props?: DialogProps;
    /**
     * Dialog Slots
     * @see DynamicDialogTemplates
     */
    templates?: DynamicDialogTemplates;
    /**
     * Custom data object
     */
    data?: any;
    /**
     * Closes the dialog.
     * @see DynamicDialogCloseOptions
     */
    onClose?(options?: DynamicDialogCloseOptions): void;
    /**
     * Optional
     */
    [key: string]: any;
}

export interface DynamicDialogInstance {
    /**
     * Dynamic component for content template
     */
    content: any;
    /**
     * Instance options
     * @see DynamicDialogOptions
     */
    options: DynamicDialogOptions;
    /**
     * Custom data object
     */
    data: any;
    /**
     * Closes the dialog.
     * @param {*} params - Parameters sent by the user to the root instance
     */
    close: (params?: any) => void;
}
