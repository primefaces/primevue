/**
 *
 * [Live Demo](https://www.primevue.org/dynamicdialog/)
 *
 * @module dynamicdialogoptions
 *
 */
import type { DialogProps } from 'primevue/dialog';

/**
 * Custom dialog templates.
 *
 * @group Interfaces
 */
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

/**
 * Dynamic Dialog close method options.
 *
 * @group Interfaces
 */
export interface DynamicDialogCloseOptions<T = any> {
    /**
     * Custom data object
     */
    data?: T;
    /**
     * Close type
     */
    type: 'config-close' | 'dialog-close' | undefined;
}

/**
 * Custom Dynamic Dialog options.
 *
 * @group Interfaces
 */
export interface DynamicDialogOptions {
    /**
     * Dialog Props
     */
    props?: DialogProps;
    /**
     * Dialog Slots
     */
    templates?: DynamicDialogTemplates;
    /**
     * Custom data object
     */
    data?: any;
    /**
     * Closes the dialog.
     */
    onClose?(options?: DynamicDialogCloseOptions): void;
    /**
     * Optional
     */
    [key: string]: any;
}

/**
 * Custom Dynamic Dialog options.
 *
 * @group Interfaces
 */
export interface DynamicDialogInstance {
    /**
     * Dynamic component for content template
     */
    content: any;
    /**
     * Instance options
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
