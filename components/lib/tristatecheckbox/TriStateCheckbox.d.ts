/**
 *
 * TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value.
 *
 * [Live Demo](https://www.primevue.org/tristatecheckbox/)
 *
 * @module tristatecheckbox
 *
 */
import { InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

/**
 * Defines valid properties in TriStateCheckbox component.
 */
export interface TriStateCheckboxProps {
    /**
     * Value of the component.
     * @defaultValue null
     */
    modelValue?: Nullable<boolean>;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

/**
 * Defines valid slots in TriStateCheckbox component.
 */
export interface TriStateCheckboxSlots {}

/**
 * Defines valid emits in TriStateCheckbox component.
 */
export interface TriStateCheckboxEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean|null|undefined} value - New value.
     */
    'update:modelValue'(value: Nullable<boolean>): void;
}

/**
 * **PrimeVue - TriStateCheckbox**
 *
 * _TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value._
 *
 * [Live Demo](https://www.primevue.org/tristatecheckbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TriStateCheckbox extends ClassComponent<TriStateCheckboxProps, TriStateCheckboxSlots, TriStateCheckboxEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TriStateCheckbox: GlobalComponentConstructor<TriStateCheckbox>;
    }
}

export default TriStateCheckbox;
