import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type ToastPositionType = 'top-left' | 'top-center' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'center' | undefined;

type ToastMessageSeverityType = 'success' | 'info' | 'warn' | 'error' | undefined;

export interface ToastMessageOptions {
    /**
     * Severity level of the message.
     * @see MessageSeverityType
     * Default value is 'info'.
     */
    severity?: ToastMessageSeverityType;
    /**
     * Summary content of the message.
     */
    summary?: string | undefined;
    /**
     * Detail content of the message.
     */
    detail?: string | undefined;
    /**
     * Whether the message can be closed manually using the close icon.
     * Default value is true.
     */
    closable?: boolean | undefined;
    /**
     * Delay in milliseconds to close the message automatically.
     * Default value is 3000.
     */
    life?: number | undefined;
    /**
     * Key of the Toast to display the message.
     */
    group?: string | undefined;
    /**
     * Style class of the message.
     */
    styleClass?: string | undefined;
    /**
     * Style class of the content.
     */
    contentStyleClass?: string | undefined;
}

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

export interface ToastProps {
    /**
     * Unique identifier of a message group.
     */
    group?: string | undefined;
    /**
     * Position of the toast in viewport.
     * @see ToastPositionType
     * Default value is 'top-right'.
     */
    position?: ToastPositionType;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Object literal to define styles per screen size.
     * @see ToastBreakpointsType
     */
    breakpoints?: ToastBreakpointsType;
}

export interface ToastSlots {
    /**
     * Custom message template.
     */
    message: () => VNode[];
}

export declare type ToastEmits = {
}

declare class Toast extends ClassComponent<ToastProps, ToastSlots, ToastEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Toast: GlobalComponentConstructor<Toast>
    }
}

/**
 *
 * Toast is used to display messages in an overlay.
 *
 * Helper API:
 *
 * - ToastService
 *
 * Demos:
 *
 * - [Toast](https://www.primefaces.org/primevue/showcase/#/toast)
 *
 */
export default Toast;
