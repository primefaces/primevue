import { VNode } from 'vue';
import { DialogProps } from '../dialog';

export type DynamicDialogHideType = 'config-close' | 'dialog-close' | undefined;

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

export interface DynamicDialogHideOptions {
    /**
     * Custom data object
     */
    data?: any;
    /**
     * Hide type
     * @see DynamicDialogHideType
     */
    type: DynamicDialogHideType;
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
     * Hides the dialog.
     * @see DynamicDialogHideOptions
     */
    onHide?: (options?: DynamicDialogHideOptions) => void;
    /**
     * Optional
     */
    [key: string]: any;
}
