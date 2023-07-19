/**
 *
 * Message groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/message/)
 *
 * @module message
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type MessagePassThroughOptionType = MessagePassThroughAttributes | ((options: MessagePassThroughMethodOptions) => MessagePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MessagePassThroughMethodOptions {
    instance: any;
    props: MessageProps;
    state: MessageState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link MessageProps.pt}
 */
export interface MessagePassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: MessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the wrapper's DOM element.
     */
    wrapper?: MessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: MessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the text's DOM element.
     */
    text?: MessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the button's DOM element.
     * @deprecated since v3.30.2. Use 'closeButton' option.
     */
    button?: MessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the button's DOM element.
     */
    closeButton?: MessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the button icon's DOM element.
     * @deprecated since v3.30.2. Use 'closeIcon' option.
     */
    buttonIcon?: MessagePassThroughOptionType;
    /**
     * Uses to pass attributes to the button icon's DOM element.
     */
    closeIcon?: MessagePassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
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
    severity?: 'success' | 'info' | 'warn' | 'error' | string | undefined;
    /**
     * Whether the message can be closed manually using the close icon.
     * @defaultValue true
     */
    closable?: boolean | undefined;
    /**
     * When enabled, message is not removed automatically.
     * @defaultValue true
     */
    sticky?: boolean | undefined;
    /**
     * Delay in milliseconds to close the message automatically.
     * @defaultValue 3000
     */
    life?: number | undefined;
    /**
     * Display a custom icon for the message.
     */
    icon?: string | undefined;
    /**
     * Icon to display in the message close button.
     * @deprecated since v3.27.0. Use 'closeicon' slot.
     */
    closeIcon?: string | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the close button.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {MessagePassThroughOptions}
     */
    pt?: MessagePassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
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
     */
    messageicon(scope: {
        /**
         * Style class of the item icon element.
         */
        class: any;
    }): VNode[];
    /**
     * Custom close icon template.
     */
    closeicon(scope: {
        /**
         * Style class of the item icon element.
         */
        class: any;
    }): VNode[];
}

/**
 * Defines valid emits in Message component.
 */
export interface MessageEmits {
    /**
     * Callback to invoke when a message is closed.
     * @param {Event} event - Browser event.
     */
    close(event: Event): void;
}

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
declare class Message extends ClassComponent<MessageProps, MessageSlots, MessageEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Message: GlobalComponentConstructor<Message>;
    }
}

export default Message;
