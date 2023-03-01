/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primevue.org/confirmpopup)
 *
 * @module confirmpopup
 *
 */
import { VNode } from 'vue';
import { ConfirmationOptions } from '../confirmationoptions';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in ConfirmPopup component.
 */
export interface ConfirmPopupProps {
    /**
     * Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.
     */
    group?: string;
}

/**
 * Defines valid slots in ConfirmPopup component.
 */
export interface ConfirmPopupSlots {
    /**
     * Custom message template.
     * @param {Object} scope - message slot's params.
     */
    message(scope: { message: ConfirmationOptions }): VNode[];
}

/**
 * Defines valid emits in ConfirmPopup component.
 */
export interface ConfirmPopupEmits {}

/**
 * **PrimeVue - ConfirmPopup**
 *
 * _ConfirmPopup displays a confirmation overlay displayed relatively to its target._
 *
 * [Live Demo](https://www.primevue.org/confirmpopup/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class ConfirmPopup extends ClassComponent<ConfirmPopupProps, ConfirmPopupSlots, ConfirmPopupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ConfirmPopup: GlobalComponentConstructor<ConfirmPopup>;
    }
}

export default ConfirmPopup;
