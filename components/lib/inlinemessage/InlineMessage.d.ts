/**
 *
 * InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message.
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 *
 * @module inlinemessage
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in InlineMessage component.
 */
export interface InlineMessageProps {
    /**
     * Severity level of the message.
     * @defaultValue info
     */
    severity?: 'success' | 'info' | 'warn' | 'error' | undefined;
}
/**
 * Defines valid slots in InlineMessage slots.
 */
export interface InlineMessageSlots {
    /**
     * Default custom slot.
     */
    default(): VNode[];
}

export interface InlineMessageEmits {}

/**
 * **PrimeVue - InlineMessage**
 *
 * _InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message._
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class InlineMessage extends ClassComponent<InlineMessageProps, InlineMessageSlots, InlineMessageEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InlineMessage: GlobalComponentConstructor<InlineMessage>;
    }
}

export default InlineMessage;
