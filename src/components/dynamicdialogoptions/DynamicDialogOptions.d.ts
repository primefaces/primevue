import { VNode } from 'vue';
import { DialogProps } from '../dialog';

export type DynamicDialogCloseType = 'config-close' | 'dialog-close' | undefined;

export interface DynamicDialogTemplates {
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom footer template.
     */
    footer: () => VNode[];
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
    onClose?: (options?: DynamicDialogCloseOptions) => void;
    /**
     * Optional
     */
    [key: string]: any;
}
