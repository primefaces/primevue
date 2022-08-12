import { VNode, InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

type PasswordAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

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
     * Default value is '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'.
     */
    mediumRegex?: string | undefined;
    /**
     * Regex for a strong level password.
     * Default value is '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'.
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
     * Default value is true.
     */
    feedback?: boolean | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see PasswordAppendToType
     * Default value is 'body'.
     */
    appendTo?: PasswordAppendToType;
    /**
     * Whether to show an icon to display the password as plain text.
     */
    toggleMask?: boolean | undefined;
    /**
     * Icon to hide displaying the password as plain text.
     * Default value is 'pi pi-eye-slash'.
     */
    hideIcon?: string | undefined;
    /**
     * Icon to show displaying the password as plain text.
     * Default value is 'pi pi-eye'.
     */
    showIcon?: string | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: HTMLInputElement | undefined;
    /**
     * Identifier of the underlying overlay panel element.
     */
    panelId?: string | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    panelProps?: HTMLDivElement | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

export interface PasswordSlots {
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom footer template.
     */
    footer: () => VNode[];
    /**
     * Custom content template.
     */
    content: () => VNode[];
}

export declare type PasswordEmits = {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string) => void;
}

declare class Password extends ClassComponent<PasswordProps, PasswordSlots, PasswordEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Password: GlobalComponentConstructor<Password>
    }
}

/**
 *
 * Password displays strength indicator for password fields.
 *
 * Demos:
 *
 * - [Password](https://www.primefaces.org/primevue/showcase/#/password)
 *
 */
export default Password;
