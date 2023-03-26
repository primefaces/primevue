/**
 *
 * Toast is used to display messages in an overlay.
 *
 * [Live Demo](https://www.primevue.org/toast/)
 *
 * @module toast
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines message options in Toast component.
 */
export interface ToastMessageOptions {
    /**
     * Severity level of the message.
     * @defaultValue info
     */
    severity?: 'success' | 'info' | 'warn' | 'error' | undefined;
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
     * @defaultValue pi pi-times
     */
    closeIcon?: string | undefined;
    /**
     * Icon to display in the toast with info severity.
     * @defaultValue pi pi-info-circle
     */
    infoIcon?: string | undefined;
    /**
     * Icon to display in the toast with warn severity.
     * @defaultValue pi pi-exclamation-triangle
     */
    warnIcon?: string | undefined;
    /**
     * Icon to display in the toast with error severity.
     * @defaultValue pi pi-times
     */
    errorIcon?: string | undefined;
    /**
     * Icon to display in the toast with success severity.
     * @defaultValue pi pi-check
     */
    successIcon?: string | undefined;
    /**
     * Uses to pass all properties of the HTMLButtonElement to the close button.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
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
