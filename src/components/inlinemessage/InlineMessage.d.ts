import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type InlineMessageSeverityType = 'success' | 'info' | 'warn' | 'error' | undefined;

export interface InlineMessageProps {
    /**
     * Severity level of the message.
     * @see InlineMessageSeverityType
     * Default value is 'info'.
     */
    severity?: InlineMessageSeverityType;
}

export interface InlineMessageSlots {
    /**
     * Default custom slot.
     */
    default: () => VNode[];
}

export declare type InlineMessageEmits = {
}

declare class InlineMessage extends ClassComponent<InlineMessageProps, InlineMessageSlots, InlineMessageEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InlineMessage: GlobalComponentConstructor<InlineMessage>
    }
}

/**
 *
 * InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message.
 *
 * Demos:
 *
 * - [InlineMessage](https://www.primefaces.org/primevue/showcase/#/message)
 *
 */
export default InlineMessage;
