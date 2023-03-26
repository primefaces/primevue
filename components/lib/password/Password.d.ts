/**
 *
 * Password displays strength indicator for password fields.
 *
 * [Live Demo](https://www.primevue.org/password/)
 *
 * @module password
 *
 */
import { HTMLAttributes, InputHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

/**
 * Defines valid properties in Password component.
 */
export interface PasswordProps extends InputHTMLAttributes {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<string>;
    /**
     * Text to prompt password entry. Defaults to PrimeVue Locale configuration.
     */
    promptLabel?: string | undefined;
    /**
     * Regex for a medium level password.
     * @defaultValue ^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})
     */
    mediumRegex?: string | undefined;
    /**
     * Regex for a strong level password.
     * @defaultValue ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})
     */
    strongRegex?: string | undefined;
    /**
     * Text for a weak password. Defaults to PrimeVue Locale configuration.
     */
    weakLabel?: string | undefined;
    /**
     * Text for a medium password. Defaults to PrimeVue Locale configuration.
     */
    mediumLabel?: string | undefined;
    /**
     * Text for a strong password. Defaults to PrimeVue Locale configuration.
     */
    strongLabel?: string | undefined;
    /**
     * Whether to show the strength indicator or not.
     * @defaultValue true
     */
    feedback?: boolean | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * Whether to show an icon to display the password as plain text.
     * @defaultValue false
     */
    toggleMask?: boolean | undefined;
    /**
     * Icon to hide displaying the password as plain text.
     * @defaultValue pi pi-eye-slash
     */
    hideIcon?: string | undefined;
    /**
     * Icon to show displaying the password as plain text.
     * @defaultValue pi pi-eye
     */
    showIcon?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @defaultValue false
     */
    required?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: object | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Identifier of the underlying overlay panel element.
     */
    panelId?: string | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: string | object | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: object | undefined;
    /**
     * Uses to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    panelProps?: HTMLAttributes | undefined;
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
 * Defines valid slots in Password component.
 */
export interface PasswordSlots {
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
    /**
     * Custom content template.
     */
    content(): VNode[];
}

/**
 * Defines valid emits in Password component.
 */
export interface PasswordEmits {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string): void;
}

/**
 * **PrimeVue - Password**
 *
 * _Password displays strength indicator for password fields._
 *
 * [Live Demo](https://www.primevue.org/password/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Password extends ClassComponent<PasswordProps, PasswordSlots, PasswordEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Password: GlobalComponentConstructor<Password>;
    }
}

export default Password;
