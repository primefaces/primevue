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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Message component.
 */
export interface MessageProps {
    /**
     * Severity level of the message.
     * @defaultValue info
     */
    severity?: 'success' | 'info' | 'warn' | 'error' | undefined;
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
     * @defaultValue pi pi-times
     */
    closeIcon?: string | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the close button.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
}

/**
 * Defines valid slots in Message slots.
 */
export interface MessageSlots {
    /**
     * Default custom slot.
     */
    default(): VNode[];
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
