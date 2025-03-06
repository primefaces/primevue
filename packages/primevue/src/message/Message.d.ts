/**
 *
 * Message groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/message/)
 *
 * @module message
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { ButtonHTMLAttributes, TransitionProps, VNode } from 'vue';

export declare type MessagePassThroughOptionType<T = any> = MessagePassThroughAttributes | ((options: MessagePassThroughMethodOptions<T>) => MessagePassThroughAttributes | string) | string | null | undefined;

export declare type MessagePassThroughTransitionType<T = any> = TransitionProps | ((options: MessagePassThroughMethodOptions<T>) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MessagePassThroughMethodOptions<T = any> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: MessageProps;
    /**
     * Defines current inline state.
     */
    state: MessageState;
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
 * @see {@link MessageProps.pt}
 */
export interface MessagePassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MessagePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: MessagePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: MessagePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: MessagePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    closeButton?: MessagePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the button icon's DOM element.
     */
    closeIcon?: MessagePassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: MessagePassThroughTransitionType<T>;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface MessagePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Message component.
 */
export interface MessageState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
}

/**
 * Defines valid properties in Message component.
 */
export interface MessageProps {
    /**
     * Severity level of the message.
     * @defaultValue info
     */
    severity?: HintedString<'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast'> | undefined;
    /**
     * Whether the message can be closed manually using the close icon.
     * @defaultValue false
     */
    closable?: boolean | undefined;
    /**
     * @deprecated since 4.0.
     * When enabled, message is not removed automatically.
     * @defaultValue true
     */
    sticky?: boolean | undefined;
    /**
     * Delay in milliseconds to close the message automatically.
     * @defaultValue null
     */
    life?: number | undefined;
    /**
     * Display a custom icon for the message.
     */
    icon?: string | undefined;
    /**
     * Icon to display in the message close button.
     */
    closeIcon?: string | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the close button.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {MessagePassThroughOptions}
     */
    pt?: PassThrough<MessagePassThroughOptions>;
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
    /**
     * Defines the size of the component.
     */
    size?: HintedString<'small' | 'large'> | undefined;
    /**
     * Specifies the variant of the component.
     * @defaultValue undefined
     */
    variant?: HintedString<'outlined' | 'simple'> | undefined;
}

/**
 * Defines valid slots in Message slots.
 */
export interface MessageSlots {
    /**
     * Default custom slot.
     */
    default(): VNode[];
    /**
     * Custom message icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Style class of the item icon element.
         */
        class: any;
    }): VNode[];
    /**
     * Custom close icon template.
     * @param {Object} scope - closeicon slot's params.
     */
    closeicon(scope: {
        /**
         * Style class of the item icon element.
         */
        class: any;
    }): VNode[];
    /**
     * Custom container slot.
     * @param {Object} scope - container slot's params.
     */
    container(scope: {
        /**
         * Close message function.
         */
        closeCallback: () => void;
    }): VNode[];
}

/**
 * Defines valid emits in Message component.
 */
export interface MessageEmitsOptions {
    /**
     * Callback to invoke when a message is closed.
     * @param {Event} event - Browser event.
     */
    close(event: Event): void;
    /**
     * Callback to invoke when the message's timeout is over.
     */
    'life-end'(): void;
}

export declare type MessageEmits = EmitFn<MessageEmitsOptions>;

/**
 * **PrimeVue - Message**
 *
 * _Messages is used to display inline messages with various severities._
 *
 * [Live Demo](https://www.primevue.org/message/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Message: DefineComponent<MessageProps, MessageSlots, MessageEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Message: DefineComponent<MessageProps, MessageSlots, MessageEmits>;
    }
}

export default Message;
