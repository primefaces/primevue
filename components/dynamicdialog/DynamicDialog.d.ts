import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface DynamicDialogProps {}

export declare type DynamicDialogEmits = {}

export interface DynamicDialogSlots {}

declare class DynamicDialog extends ClassComponent<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DynamicDialog: GlobalComponentConstructor<DynamicDialog>
    }
}

/**
 *
 * DynamicDialogs can be created dynamically with any component as the content using a DialogService.
 *
 * Demos:
 *
 * - [DynamicDialog](https://www.primefaces.org/primevue/showcase/#/dynamicdialog)
 *
 */
export default DynamicDialog;
