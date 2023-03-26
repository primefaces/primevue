/**
 *
 * SplitButton groups a set of commands in an overlay with a default command.
 *
 * [Live Demo](https://www.primevue.org/splitbutton/)
 *
 * @module splitbutton
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { MenuItem } from '../menuitem';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in SplitButton component.
 */
export interface SplitButtonProps {
    /**
     * Text of the button.
     */
    label?: string | undefined;
    /**
     * Name of the icon.
     */
    icon?: string | undefined;
    /**
     * MenuModel instance to define the overlay items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * Special keywords are 'body' for document body and 'self' for the element itself.
     * @defaultValue body
     */
    appendTo?: 'body' | 'self' | string | undefined | HTMLElement;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Style class of the component.
     */
    class?: any | undefined;
    /**
     * Inline style of the component.
     */
    style?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the default button.
     */
    buttonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the menu button.
     */
    menuButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Name of the menu button icon.
     */
    menuButtonIcon?: string | undefined;
    /**
     * Defines the style of the button.
     */
    severity?: 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | undefined;
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
}

/**
 * Defines valid slots in SplitButton component.
 */
export interface SplitButtonSlots {
    /**
     * Button part of the content can easily be customized with the default slot instead of using the built-in modes.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in SplitButton component.
 */
export interface SplitButtonEmits {
    /**
     * Callback to invoke when main button is clicked.
     * @param {Event} event - Browser event.
     */
    click(event: Event): void;
}

/**
 * **PrimeVue - SplitButton**
 *
 * _SplitButton groups a set of commands in an overlay with a default command._
 *
 * [Live Demo](https://www.primevue.org/splitbutton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class SplitButton extends ClassComponent<SplitButtonProps, SplitButtonSlots, SplitButtonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SplitButton: GlobalComponentConstructor<SplitButton>;
    }
}

export default SplitButton;
