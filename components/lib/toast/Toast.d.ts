/**
 *
 * Toast is used to display messages in an overlay.
 *
 * [Live Demo](https://www.primevue.org/toast/)
 *
 * @module toast
 *
 */
import { ButtonHTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ToastPassThroughOptionType = ToastPassThroughAttributes | ((options: ToastPassThroughMethodOptions) => ToastPassThroughAttributes | string) | string | null | undefined;

export declare type ToastPassThroughTransitionType = TransitionProps | ((options: ToastPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ToastPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ToastProps;
    /**
     * Defines current inline state.
     */
    state: ToastState;
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
 * @see {@link ToastProps.pt}
 */
export interface ToastPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the container's DOM element.
     */
    container?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the text's DOM element.
     */
    text?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the summary's DOM element.
     */
    summary?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the detail's DOM element.
     */
    detail?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the button container's DOM element.
     */
    buttonContainer?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the button's DOM element.
     * @deprecated since v3.30.2. Use 'closeButton' option.
     */
    button?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    closeButton?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the button icon's DOM element.
     * @deprecated since v3.30.2. Use 'closeIcon' option.
     */
    buttonIcon?: ToastPassThroughOptionType;
    /**
     * Used to pass attributes to the button icon's DOM element.
     */
    closeIcon?: ToastPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: ToastPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ToastPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines message options in Toast component.
 */
export interface ToastMessageOptions {
    /**
     * Severity level of the message.
     * @defaultValue info
     */
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast' | undefined;
    /**
     * Summary content of the message.
     */
    summary?: string | undefined;
    /**
     * Detail content of the message.
     */
    detail?: any | undefined;
    /**
     * Whether the message can be closed manually using the close icon.
     * @defaultValue true
     */
    closable?: boolean | undefined;
    /**
     * Delay in milliseconds to close the message automatically.
     */
    life?: number | undefined;
    /**
     * Key of the Toast to display the message.
     */
    group?: string | undefined;
    /**
     * Style class of the message.
     */
    styleClass?: any;
    /**
     * Style class of the content.
     */
    contentStyleClass?: any;
}

/**
 * Defines breakpoints type in Toast component.
 */
export interface ToastBreakpointsType {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <Toast :breakpoints="{'960px': { width: '75vw', ... }" ... />
     *
     */
    [key: string]: any;
}

/**
 * Defines current inline state in Toast component.
 */
export interface ToastState {
    /**
     * Current messages.
     */
    messages: any[];
}

/**
 * Defines valid properties in Toast component.
 */
export interface ToastProps {
    /**
     * Unique identifier of a message group.
     */
    group?: string | undefined;
    /**
     * Position of the toast in viewport.
     * @defaultValue top-right
     */
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'center' | undefined;
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
     * Object literal to define styles per screen size.
     * @see ToastBreakpointsType
     */
    breakpoints?: ToastBreakpointsType;
    /**
     * Icon to display in the toast close button.
     * @deprecated since v3.27.0. Use 'closeicon' slot.
     */
    closeIcon?: string | undefined;
    /**
     * Icon to display in the toast with info severity.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    infoIcon?: string | undefined;
    /**
     * Icon to display in the toast with warn severity.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    warnIcon?: string | undefined;
    /**
     * Icon to display in the toast with error severity.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    errorIcon?: string | undefined;
    /**
     * Icon to display in the toast with success severity.
     * @deprecated since v3.27.0. Use 'icon' slot.
     */
    successIcon?: string | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the close button.
     * @deprecated since v3.26.0. Use 'pt' property.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Used to access message options.
     * @type {ToastMessageOptions}
     */
    message?: ToastMessageOptions;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ToastPassThroughOptions}
     */
    pt?: PassThrough<ToastPassThroughOptions>;
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
 * Defines valid slot in Toast component.
 */
export interface ToastSlots {
    /**
     * Custom message template.
     * @param {Object} scope - message slot's params.
     */
    message(scope: {
        /**
         * Message of the component
         */
        message: any;
    }): VNode[];
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Style class of the icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom close icon template.
     * @param {Object} scope - close icon slot's params.
     */
    closeicon(scope: {
        /**
         * Style class of the close icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom container slot.
     * @param {Object} scope - container slot's params.
     */
    container(scope: {
        /**
         * Message of the component
         */
        message: any;
        /**
         * Close toast function
         * @deprecated since v3.39.0. Use 'closeCallback' property instead.
         */
        onClose: () => void;
        /**
         * Close sidebar function.
         */
        closeCallback: () => void;
    }): VNode[];
}

/**
 * Defines valid emits in Toast component.
 */
export interface ToastEmits {
    /**
     * Callback to invoke when the toast is closed.
     * @param {ToastMessageOptions} message - Toast message.
     */
    close(message: ToastMessageOptions): void;
    /**
     * Callback to invoke when the toast's timeout is over.
     * @param {ToastMessageOptions} message - Toast message.
     */
    'life-end'(message: ToastMessageOptions): void;
}

/**
 * **PrimeVue - Toast**
 *
 * _Toast is used to display messages in an overlay._
 *
 * [Live Demo](https://www.primevue.org/toast/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Toast extends ClassComponent<ToastProps, ToastSlots, ToastEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Toast: GlobalComponentConstructor<Toast>;
    }
}

export default Toast;
