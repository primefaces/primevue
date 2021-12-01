import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface ConfirmDialogBreakpoints {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <ConfirmDialog :breakpoints="{'960px': '75vw', '640px': '100vw'}" ... />
     *
     * Result:
     *
     * @media screen and (max-width: ${breakpoint[key]}) {
     *      .p-dialog[attributeSelector] {
     *          width: ${breakpoint[value]} !important;
     *      }
     * }
     */
    [key: string]: string;
}

export interface ConfirmDialogProps {
    /**
     * Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.
     */
    group?: string | undefined;
    /**
     * Object literal to define widths per screen size.
     * @see ConfirmDialogBreakpoints
     */
    breakpoints?: ConfirmDialogBreakpoints;
}

export interface ConfirmDialogSlots {
}

export declare type ConfirmDialogEmits = {
}

declare class ConfirmDialog extends ClassComponent<ConfirmDialogProps, ConfirmDialogSlots, ConfirmDialogEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ConfirmDialog: GlobalComponentConstructor<ConfirmDialog>
    }
}

/**
 *
 * ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.
 *
 * Helper API:
 *
 * - Confirmation API
 * - ConfirmationService
 *
 * Demos:
 *
 * - [ConfirmDialog](https://www.primefaces.org/primevue/showcase/#/confirmdialog)
 *
 */
export default ConfirmDialog;
