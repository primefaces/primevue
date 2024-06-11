/**
 *
 * InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms. It has one property, severity of the message.
 *
 * [Live Demo](https://www.primevue.org/inlinemessage/)
 *
 * @module inlinemessage
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

export declare type InlineMessagePassThroughOptionType = InlineMessagePassThroughAttributes | ((options: InlineMessagePassThroughMethodOptions) => InlineMessagePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InlineMessagePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InlineMessageProps;
    /**
     * Defines current inline state.
     */
    state: InlineMessageState;
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
 * Custom passthrough(pt) options.
 * @see {@link InlineMessageProps.pt}
 */
export interface InlineMessagePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InlineMessagePassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: InlineMessagePassThroughOptionType;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: InlineMessagePassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InlineMessagePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in InlineMessage component.
 */
export interface InlineMessageState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
}

/**
 * Defines valid properties in InlineMessage component.
 */
export interface InlineMessageProps {
    /**
     * Severity level of the message.
     * @defaultValue info
     */
    severity?: HintedString<'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast'> | undefined;
    /**
     * Display a custom icon for the message.
     */
    icon?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InlineMessagePassThroughOptions}
     */
    pt?: PassThrough<InlineMessagePassThroughOptions>;
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
 * Defines valid slots in InlineMessage slots.
 */
export interface InlineMessageSlots {
    /**
     * Default custom slot.
     */
    default(): VNode[];
    /**
     * Custom message icon template.
     */
    icon(): VNode[];
}

export interface InlineMessageEmitsOptions {}

export declare type InlineMessageEmits = EmitFn<InlineMessageEmitsOptions>;

/**
 * @deprecated since v4. Use Message component instead.
 *
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
declare const InlineMessage: DefineComponent<InlineMessageProps, InlineMessageSlots, InlineMessageEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InlineMessage: GlobalComponentConstructor<InlineMessageProps, InlineMessageSlots, InlineMessageEmits>;
    }
}

export default InlineMessage;
