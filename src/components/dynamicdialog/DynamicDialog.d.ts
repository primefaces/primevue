import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type DynamicDialogAppendToType = 'body' | 'self' | string | undefined;

export interface DynamicDialogProps {
    /**
     * Specifies the visibility of the dialog.
     */
    visible?: boolean | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the dialog gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see DynamicDialogAppendToType
     * Default value is 'body'.
     */
    appendTo?: DynamicDialogAppendToType;
}

export declare type DynamicDialogEmits = {
    /**
     * Emitted when the visible changes.
     * @param {boolean} value - New value.
     */
    'update:visible': (value: boolean) => void;
    /**
     * Callback to invoke when dialog is hidden.
     */
    'show': () => void;
    /**
     * Callback to invoke when dialog is showed.
     */
    'hide': () => void;
}

export interface DynamicDialogSlots {

}

declare class DynamicDialog extends ClassComponent<DynamicDialogProps, DynamicDialogEmits, DynamicDialogSlots> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DynamicDialog: GlobalComponentConstructor<DynamicDialog>
    }
}

/**
 *
 * DynamicDialog is a container to display content in an overlay window.
 *
 * Demos:
 *
 * - [DynamicDialog](https://www.primefaces.org/primevue/showcase/#/dynamicdialog)
 *
 */
export default DynamicDialog;
