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
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { MenuItem } from '../menuitem';
import { TieredMenuPassThroughOptions } from '../tieredmenu';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type SplitButtonPassThroughOptionType = SplitButtonPassThroughAttributes | ((options: SplitButtonPassThroughMethodOptions) => SplitButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SplitButtonPassThroughMethodOptions {
    instance: any;
    props: SplitButtonProps;
    state: SplitButtonState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SplitButtonProps.pt}
 */
export interface SplitButtonPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: SplitButtonPassThroughOptionType;
    /**
     * Uses to pass attributes to the button's DOM element.
     */
    button?: SplitButtonPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    menuButton?: ButtonPassThroughOptions;
    /**
     * Uses to pass attributes to the TieredMenu component.
     * @see {@link TieredMenuPassThroughOptions}
     */
    menu?: TieredMenuPassThroughOptions;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SplitButtonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in SplitButton component.
 */
export interface SplitButtonState {
    /**
     * Current blocked state as a boolean.
     * @defaultValue false
     */
    isBlocked: boolean;
}

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
     * @deprecated since v3.27.0. Use 'icon' slot.
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
     * @deprecated since v3.27.0. Use 'menubuttonicon' slot.
     */
    menuButtonIcon?: string | undefined;
    /**
     * Defines the style of the button.
     */
    severity?: 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' | string | undefined;
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
     * Uses to pass attributes to DOM elements inside the component.
     * @type {SplitButtonPassThroughOptions}
     */
    pt?: SplitButtonPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in SplitButton component.
 */
export interface SplitButtonSlots {
    /**
     * Button part of the content can easily be customized with the default slot instead of using the built-in modes.
     */
    default(): VNode[];
    /**
     * Custom menu button icon template.
     */
    icon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom menu button icon template.
     */
    menubuttonicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
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
