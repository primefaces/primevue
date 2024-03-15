/**
 *
 * Message groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primevue.org/message/)
 *
 * @module message
 *
 */
import { ButtonHTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough, HintedString } from '../ts-helpers';

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
     * Used to pass attributes to the wrapper's DOM element.
     */
    wrapper?: MessagePassThroughOptionType<T>;
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
     * @deprecated since v3.30.2. Use 'closeButton' option.
     */
    button?: MessagePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    closeButton?: MessagePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the button icon's DOM element.
     * @deprecated since v3.30.2. Use 'closeIcon' option.
     */
    buttonIcon?: MessagePassThroughOptionType<T>;
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
     * Used to pass all properties of the HTMLButtonElement to the close button.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
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
     * @param {Object} scope - messageicon slot's params.
     */
    messageicon(scope: {
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
         * @deprecated since v3.39.0. Use 'closeCallback' property instead.
         */
        onClose: () => void;
        /**
         * Close message function.
         */
        closeCallback: () => void;
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
    /**
     * Callback to invoke when the message's timeout is over.
     */
    'life-end'(): void;
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
