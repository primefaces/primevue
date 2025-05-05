/**
 *
 * Password displays strength indicator for password fields.
 *
 * [Live Demo](https://www.primevue.org/password/)
 *
 * @module password
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, Nullable, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import { HTMLAttributes, InputHTMLAttributes, TransitionProps, VNode } from 'vue';

export declare type PasswordPassThroughOptionType = PasswordPassThroughAttributes | ((options: PasswordPassThroughMethodOptions) => PasswordPassThroughAttributes | string) | string | null | undefined;

export declare type PasswordPassThroughTransitionType = TransitionProps | ((options: PasswordPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface PasswordPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: PasswordProps;
    /**
     * Defines current inline state.
     */
    state: PasswordState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface PasswordSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: PasswordProps;
    /**
     * Defines current inline state.
     */
    state: PasswordState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link PasswordProps.pt}
 */
export interface PasswordPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcInputText?: InputTextPassThroughOptions<PasswordSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the mask icon's DOM element.
     */
    maskIcon?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the unmask icon's DOM element.
     */
    unmaskIcon?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the overlay's DOM element.
     */
    overlay?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the overlay's content DOM element.
     */
    content?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the meter's DOM element.
     */
    meter?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the meter label's DOM element.
     */
    meterLabel?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the meter text's DOM element.
     */
    meterText?: PasswordPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden accessible DOM element.
     */
    hiddenAccesible?: PasswordPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: PasswordPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface PasswordPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Password component.
 */
export interface PasswordState {
    /**
     * Current overlay visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
    /**
     * Current overlay visible state as a boolean.
     * @see {@link PasswordMeterStateOptions}
     */
    meter: PasswordMeterStateOptions;
    /**
     * Current info test state as a string.
     */
    infoText: string;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current unmasked state as a boolean.
     * @defaultValue false
     */
    unmasked: boolean;
}

export interface PasswordMeterStateOptions {
    /**
     * Current strength of the meter state as a string.
     */
    strength: string;
    /**
     * Current width of the meter state as a string.
     */
    width: string;
}

/**
 * Defines valid properties in Password component.
 */
export interface PasswordProps extends Omit<InputHTMLAttributes, 'size'> {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<string>;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: Nullable<string>;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * Text to prompt password entry. Defaults to PrimeVue Locale configuration.
     */
    promptLabel?: string | undefined;
    /**
     * Regex for a medium level password.
     * @defaultValue ^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})
     */
    mediumRegex?: string | RegExp | undefined;
    /**
     * Regex for a strong level password.
     * @defaultValue ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})
     */
    strongRegex?: string | RegExp | undefined;
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
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * Whether to show an icon to display the password as plain text.
     * @defaultValue false
     */
    toggleMask?: boolean | undefined;
    /**
     * Icon to hide displaying the password as plain text.
     */
    maskIcon?: string | undefined;
    /**
     * Icon to show displaying the password as plain text.
     */
    unmaskIcon?: string | undefined;
    /**
     * Defines the size of the component.
     */
    size?: HintedString<'small' | 'large'> | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue null
     */
    variant?: HintedString<'outlined' | 'filled'> | undefined | null;
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
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * When present, it specifies that an input element should automatically get focus when the page loads.
     * @defaultValue null
     */
    autofocus?: boolean | undefined;
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
     * Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.
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
     * Used to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    panelProps?: HTMLAttributes | undefined;
    /**
     * Identifier of the underlying overlay element.
     */
    overlayId?: string | undefined;
    /**
     * Style class of the overlay.
     */
    overlayClass?: string | object | undefined;
    /**
     * Inline style of the overlay.
     */
    overlayStyle?: object | undefined;
    /**
     * Used to pass all properties of the HTMLDivElement to the overlay inside the component.
     */
    overlayProps?: HTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Form control object, typically used for handling validation and form state.
     */
    formControl?: Record<string, any> | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {PasswordPassThroughOptions}
     */
    pt?: PassThrough<PasswordPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
    /**
     * @deprecated since v4.0. Use 'maskicon' slot instead.
     * Custom mask icon template.
     * @param {Object} scope - hideicon slot's params.
     */
    hideicon(scope: {
        /**
         * Mask icon click event
         */
        toggleCallback: () => void;
    }): VNode[];
    /**
     * Custom hide icon template.
     * @param {Object} scope - maskicon slot's params.
     */
    maskicon(scope: {
        /**
         * Mask icon click event
         */
        toggleCallback: () => void;
    }): VNode[];
    /**
     * @deprecated since v4.0. use 'unmaskicon' slot instead.
     * Custom unmask icon template.
     * @param {Object} scope - showicon slot's params.
     */
    showicon(scope: {
        /**
         * Unmask icon click event
         */
        toggleCallback: () => void;
    }): VNode[];
    /**
     * Custom unmask icon template.
     * @param {Object} scope - showicon slot's params.
     */
    unmaskicon(scope: {
        /**
         * Unmask icon click event
         */
        toggleCallback: () => void;
    }): VNode[];
}

/**
 * Defines valid emits in Password component.
 */
export interface PasswordEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue'(value: string): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {string} value - New value.
     */
    'value-change'(value: string): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
}

export declare type PasswordEmits = EmitFn<PasswordEmitsOptions>;

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
 *
 */
declare const Password: DefineComponent<PasswordProps, PasswordSlots, PasswordEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Password: DefineComponent<PasswordProps, PasswordSlots, PasswordEmits>;
    }
}

export default Password;
