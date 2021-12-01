import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type MessageSeverityType = 'success' | 'info' | 'warn' | 'error' | undefined;

export interface MessageProps {
    /**
     * Severity level of the message.
     * @see MessageSeverityType
     * Default value is 'info'.
     */
    severity?: MessageSeverityType;
    /**
     * Whether the message can be closed manually using the close icon.
     * Default value is true.
     */
    closable?: boolean | undefined;
    /**
     * When enabled, message is not removed automatically.
     */
    sticky?: boolean | undefined;
    /**
     * Delay in milliseconds to close the message automatically.
     * Default value is 3000.
     */
    life?: number | undefined;
    /**
     * Display a custom icon for the message.
     */
    icon?: string | undefined;
}

export interface MessageSlots {
    /**
     * Default custom slot.
     */
    default: () => VNode[];
}

export declare type MessageEmits = {
    /**
     * Callback to invoke when a message is closed.
     * @param {Event} event - Browser event.
     */
    'close': (event: Event) => void;
}

declare class Message extends ClassComponent<MessageProps, MessageSlots, MessageEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Message: GlobalComponentConstructor<Message>
    }
}

/**
 *
 * Messages is used to display inline messages with various severities.
 *
 * Demos:
 *
 * - [Message](https://www.primefaces.org/primevue/showcase/#/message)
 *
 */
export default Message;
