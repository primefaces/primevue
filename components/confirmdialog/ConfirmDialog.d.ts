/**
 *
 * ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primevue.org/confirmdialog)
 *
 * @module confirmdialog
 *
 */
import { VNode } from 'vue';
import { ConfirmationOptions } from '../confirmationoptions';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Breakpoint metadata.
 */
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

/**
 * Defines valid properties in ConfirmDialog component.
 */
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
    /**
     * Enables dragging to change the position using header.
     * @defaultValue true
     */
    draggable?: boolean | undefined;
}

/**
 * Defines valid slots in ConfirmDialog component.
 */
export interface ConfirmDialogSlots {
    /**
     * Custom message template.
     * @param {Object} scope - message slot's params.
     */
    message(scope: { message: ConfirmationOptions }): VNode[];
}

/**
 * Defines valid emits in ConfirmDialog component.
 */
export interface ConfirmDialogEmits {}

/**
 * **PrimeVue - ConfirmDialog**
 *
 * _ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag._
 *
 * [Live Demo](https://www.primevue.org/confirmdialog/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class ConfirmDialog extends ClassComponent<ConfirmDialogProps, ConfirmDialogSlots, ConfirmDialogEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ConfirmDialog: GlobalComponentConstructor<ConfirmDialog>;
    }
}

export default ConfirmDialog;
