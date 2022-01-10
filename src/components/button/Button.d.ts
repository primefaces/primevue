import { ButtonHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type ButtonIconPosType = 'left' | 'right' | 'top' | 'bottom' | undefined;

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
     * Position of the icon, valid values are 'left', 'right', 'bottom' and 'top'.
     * Default value is 'left'.
     */
    iconPos?: ButtonIconPosType;
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
     */
    loading?: boolean | undefined;
    /**
     * Icon to display in loading state.
     * Default value is 'pi pi-spinner pi-spin'.
     */
    loadingIcon?: string | undefined;
}

export interface ButtonSlots {
    /**
     * Custom content such as icons, images and text can be placed inside the button via the default slot. Note that when slot is used, label, icon and badge properties are not included.
     */
    default: () => VNode[];
}

export declare type ButtonEmits = {
}

declare class Button extends ClassComponent<ButtonProps, ButtonSlots, ButtonEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Button: GlobalComponentConstructor<Button>
    }
}

/**
 *
 * Button is an extension to standard button element with icons and theming.
 *
 * Demos:
 *
 * - [Button](https://www.primefaces.org/primevue/showcase/#/button)
 *
 */
export default Button;
