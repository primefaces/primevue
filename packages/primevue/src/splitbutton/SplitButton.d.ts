/**
 *
 * SplitButton groups a set of commands in an overlay with a default command.
 *
 * [Live Demo](https://www.primevue.org/splitbutton/)
 *
 * @module splitbutton
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions } from 'primevue/button';
import type { MenuItem } from 'primevue/menuitem';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { TieredMenuPassThroughOptions, TieredMenuRouterBindProps } from 'primevue/tieredmenu';
import { ButtonHTMLAttributes, VNode } from 'vue';

export declare type SplitButtonPassThroughOptionType = SplitButtonPassThroughAttributes | ((options: SplitButtonPassThroughMethodOptions) => SplitButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SplitButtonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SplitButtonProps;
    /**
     * Defines current inline state.
     */
    state: SplitButtonState;
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
export interface SplitButtonSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: SplitButtonProps;
    /**
     * Defines current inline state.
     */
    state: SplitButtonState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SplitButtonProps.pt}
 */
export interface SplitButtonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcButton?: ButtonPassThroughOptions<SplitButtonSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcDropdown?: ButtonPassThroughOptions<SplitButtonSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the TieredMenu component.
     * @see {@link TieredMenuPassThroughOptions}
     */
    pcMenu?: TieredMenuPassThroughOptions<SplitButtonSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
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
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * Style class of the component.
     */
    class?: any | undefined;
    /**
     * Inline style of the component.
     */
    style?: any | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the default button.
     */
    buttonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the menu button.
     */
    menuButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Name of the menu button icon.
     */
    menuButtonIcon?: string | undefined;
    /**
     * Name of the menu button icon.
     */
    dropdownIcon?: string | undefined;
    /**
     * Defines the style of the button.
     */
    severity?: HintedString<'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast'> | undefined;
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {SplitButtonPassThroughOptions}
     */
    pt?: PassThrough<SplitButtonPassThroughOptions>;
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
 * Defines valid slots in SplitButton component.
 */
export interface SplitButtonSlots {
    /**
     * Button part of the content can easily be customized with the default slot instead of using the built-in modes.
     */
    default(): VNode[];
    /**
     * Command button part of the content can easily be customized with the button content slot.
     */
    buttoncontent(): VNode[];
    /**
     * Custom button icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use dropdownicon slot instead.
     * Custom menu button icon template.
     * @param {Object} scope - menubuttonicon slot's params.
     */
    menubuttonicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom menu button icon template.
     * @param {Object} scope - menubuttonicon slot's params.
     */
    dropdownicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom menu item icon template.
     * @param {Object} scope - menuitemicon slot's params.
     */
    menuitemicon(scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
        /**
         * Style class of the item icon element.
         */
        class: any;
    }): VNode[];
    /**
     * Custom content for each menu item.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Menuitem instance
         */
        item: MenuItem;
        /**
         * Label property of the menuitem
         */
        label: string | ((...args: any) => string) | undefined;
        /**
         * Binding properties of the menuitem
         */
        props: TieredMenuRouterBindProps;
        /**
         * Whether or not there is a submenu
         */
        hasSubmenu: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in SplitButton component.
 */
export interface SplitButtonEmitsOptions {
    /**
     * Callback to invoke when main button is clicked.
     * @param {Event} event - Browser event.
     */
    click(event: Event): void;
}

export declare type SplitButtonEmits = EmitFn<SplitButtonEmitsOptions>;

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
declare const SplitButton: DefineComponent<SplitButtonProps, SplitButtonSlots, SplitButtonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        SplitButton: GlobalComponentConstructor<SplitButtonProps, SplitButtonSlots, SplitButtonEmits>;
    }
}

export default SplitButton;
