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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
     * Whether the button is in loading state.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in loading state.
     * @defaultValue pi pi-spinner pi-spin
     */
    loadingIcon?: string | undefined;
}

/**
 * Defines valid slots in Button component.
 */
export interface ButtonSlots {
    /**
     * Custom content such as icons, images and text can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included.
     */
    default(): VNode[];
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
export declare class Button extends ClassComponent<ButtonProps, ButtonSlots, ButtonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Button: GlobalComponentConstructor<Button>;
    }
}

export default Button;
