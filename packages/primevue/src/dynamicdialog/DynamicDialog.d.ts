/**
 *
 * DynamicDialogs can be created dynamically with any component as the content using a DialogService.
 *
 * [Live Demo](https://primevue.org/dynamicdialog)
 *
 * @module dynamicdialog
 *
 */
import type { DefineComponent, EmitFn } from '@primevue/core';

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
 * Defines valid slots in DynamicDialog component.
 */
export interface DynamicDialogSlots {}

/**
 * Defines valid emits in DynamicDialog component.
 */
export interface DynamicDialogEmitsOptions {}

export declare type DynamicDialogEmits = EmitFn<DynamicDialogEmitsOptions>;

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
 *
 */
declare const DynamicDialog: DefineComponent<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DynamicDialog: DefineComponent<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits>;
    }
}

export default DynamicDialog;
