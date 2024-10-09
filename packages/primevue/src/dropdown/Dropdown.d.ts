/**
 *
 * Dropdown also known as Select, is used to choose an item from a collection of options.
 *
 * [Live Demo](https://www.primevue.org/select/)
 *
 * @module dropdown
 *
 */
import type { DefineComponent, EmitFn } from '@primevue/core';
import * as Select from 'primevue/select';
import 'vue';

/**
 * Custom passthrough(pt) option method.
 */
export interface DropdownPassThroughMethodOptions<T> extends Select.SelectPassThroughMethodOptions<T> {}

/**
 * Custom change event.
 * @see {@link DropdownEmitsOptions.change}
 */
export interface DropdownChangeEvent extends Select.SelectChangeEvent {}

/**
 * Custom filter event.
 * @see {@link DropdownEmitsOptions.filter}
 */
export interface DropdownFilterEvent extends Select.SelectFilterEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link DropdownProps.pt}
 */
export interface DropdownPassThroughOptions<T = any> extends Select.SelectPassThroughOptions<T> {}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DropdownPassThroughAttributes extends Select.SelectPassThroughAttributes {}

/**
 * Defines current inline state in Dropdown component.
 */
export interface DropdownState extends Select.SelectState {}

/**
 * Defines current options in Dropdown component.
 */
export interface DropdownContext extends Select.SelectContext {}

/**
 * Defines valid properties in Dropdown component.
 */
export interface DropdownProps extends Select.SelectProps {}

/**
 * Defines valid slots in Dropdown component.
 */
export interface DropdownSlots extends Select.SelectSlots {}

/**
 * Defines valid emits in Dropdown component.
 */
export interface DropdownEmitsOptions {}

export declare type DropdownEmits = EmitFn<DropdownEmitsOptions> & Select.SelectEmits;

export interface DropdownMethods {
    /**
     * Shows the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. @defaultValue false.
     *
     * @memberof Dropdown
     */
    show: (isFocus?: boolean) => void;
    /**
     * Hides the overlay.
     * @param {boolean} [isFocus] - Decides whether to focus on the component. @defaultValue false.
     *
     * @memberof Dropdown
     */
    hide: (isFocus?: boolean) => void;
}

/**
 * @deprecated since v4. Use Select component instead.
 *
 * **PrimeVue - Dropdown**
 *
 * _Dropdown also known as Select, is used to choose an item from a collection of options._
 *
 * [Live Demo](https://www.primevue.org/select/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Dropdown: DefineComponent<DropdownProps, DropdownSlots, DropdownEmits, DropdownMethods>;

declare module 'vue' {
    export interface GlobalComponents {
        Dropdown: DefineComponent<DropdownProps, DropdownSlots, DropdownEmits, DropdownMethods>;
    }
}

export default Dropdown;
