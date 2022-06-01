import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { ConfirmationOptions } from '../confirmationoptions';

export interface ConfirmPopupProps {
    /**
     * Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.
     */
    group?: string;
}

export interface ConfirmPopupSlots {
    /**
     * Custom message template.
     * @param {Object} scope - message slot's params.
     */
    message: (scope: {
        message: ConfirmationOptions;
    }) => VNode[];
}

export declare type ConfirmPopupEmits = {
}

declare class ConfirmPopup extends ClassComponent<ConfirmPopupProps, ConfirmPopupSlots, ConfirmPopupEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ConfirmPopup: GlobalComponentConstructor<ConfirmPopup>
    }
}

/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * Helper API:
 *
 * - Confirmation API
 * - ConfirmationService
 *
 * Demos:
 *
 * - [ConfirmPopup](https://www.primefaces.org/primevue/showcase/#/confirmpopup)
 *
 */
export default ConfirmPopup;
