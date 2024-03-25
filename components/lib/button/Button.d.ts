/**
 *
 * Button is an extension to standard button element with icons and theming.
 *
 * [Live Demo](https://www.primevue.org/button/)
 *
 * @module button
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough, HintedString } from '../ts-helpers';

export declare type ButtonPassThroughOptionType<T = any> = ButtonPassThroughAttributes | ((options: ButtonPassThroughMethodOptions<T>) => ButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ButtonPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ButtonProps;
    /**
     * Defines current options.
     */
    context: ButtonContext;
    /**
     * Defines parent instance.
     */
    parent: T;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ButtonProps.pt}
 */
export interface ButtonPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ButtonPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: ButtonPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ButtonPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ButtonPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the badge's DOM element.
     */
    badge?: ButtonPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ButtonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Button component.
 */
export interface ButtonProps extends ButtonHTMLAttributes {
    /**
     * Inline style of the button.
     */
    style?: any;
    /**
     * Style class of the button.
     */
    class?: any;
    /**
     * Text of the button.
     */
    label?: string | undefined;
    /**
     * Name of the icon.
     */
    icon?: string | undefined;
    /**
     * Position of the icon.
     * @defaultValue left
     */
    iconPos?: 'left' | 'right' | 'top' | 'bottom' | undefined;
    /**
     * Style class of the icon.
     */
    iconClass?: string | undefined;
    /**
     * Value of the badge.
     */
    badge?: string | undefined;
    /**
     * Style class of the badge.
     */
    badgeClass?: string | undefined;
    /**
     * Severity type of the badge.
     */
    badgeSeverity?: HintedString<'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'contrast'> | null | undefined;
    /**
     * Whether the button is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in loading state.
     */
    loadingIcon?: string | undefined;
    /**
     *  Add a link style to the button.
     * @defaultValue false
     */
    link?: boolean | undefined;
    /**
     * Defines the style of the button.
     */
    severity?: HintedString<'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | 'contrast'> | undefined;
    /**
     * Add a shadow to indicate elevation.
     * @defaultValue false
     */
    raised?: boolean | undefined;
    /**
     * Add a circular border radius to the button.
     * @defaultValue false
     */
    rounded?: boolean | undefined;
    /**
     * Add a textual class to the button without a background initially.
     * @defaultValue false
     */
    text?: boolean | undefined;
    /**
     * Add a border class without a background initially.
     * @defaultValue false
     */
    outlined?: boolean | undefined;
    /**
     * Defines the size of the button.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Add a plain textual class to the button without a background initially.
     * @defaultValue false
     */
    plain?: boolean | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ButtonPassThroughOptions}
     */
    pt?: PassThrough<ButtonPassThroughOptions<any>>;
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
 * Defines current options in Button component.
 */
export interface ButtonContext {
    /**
     * Current disabled state of the element as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid slots in Button component.
 */
export interface ButtonSlots {
    /**
     * Custom content such as icons, images and text can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included.
     */
    default(): VNode[];
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom loading icon template.
     * @param {Object} scope - loading icon slot's params.
     */
    loadingicon(scope: {
        /**
         * Style class of the loading icon.
         */
        class: string;
    }): VNode[];
}

/**
 * Defines valid emits in Button component.
 */
export interface ButtonEmits {}

/**
 * **PrimeVue - Button**
 *
 * _Button is an extension to standard button element with icons and theming._
 *
 * [Live Demo](https://www.primevue.org/button/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Button extends ClassComponent<ButtonProps, ButtonSlots, ButtonEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Button: GlobalComponentConstructor<Button>;
    }
}

export default Button;
