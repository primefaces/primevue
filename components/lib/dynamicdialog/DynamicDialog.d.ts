/**
 *
 * DynamicDialogs can be created dynamically with any component as the content using a DialogService.
 *
 * [Live Demo](https://primevue.org/dynamicdialog)
 *
 * @module dynamicdialog
 *
 */
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in DynamicDialog component.
 */
export interface DynamicDialogProps {
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid emits in DynamicDialog component.
 */
export interface DynamicDialogEmits {}

/**
 * Defines valid slots in DynamicDialog component.
 */
export interface DynamicDialogSlots {}

/**
 * **PrimeVue - DynamicDialog**
 *
 * _DynamicDialogs can be created dynamically with any component as the content using a DialogService._
 *
 * [Live Demo](https://www.primevue.org/dynamicdialog/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class DynamicDialog extends ClassComponent<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DynamicDialog: GlobalComponentConstructor<DynamicDialog>;
    }
}

export default DynamicDialog;
