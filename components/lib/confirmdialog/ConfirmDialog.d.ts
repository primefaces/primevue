/**
 *
 * ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primevue.org/confirmdialog)
 *
 * @module confirmdialog
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { ConfirmationOptions } from '../confirmationoptions';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ConfirmDialogPassThroughOptionType = ConfirmDialogPassThroughAttributes | ((options: ConfirmDialogPassThroughMethodOptions) => ConfirmDialogPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ConfirmDialogPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ConfirmDialogProps;
    /**
     * Defines current inline state.
     */
    state: ConfirmDialogState;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ConfirmDialogProps.pt}
 */
export interface ConfirmDialogPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the header title's DOM element.
     */
    headerTitle?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the header icons' DOM element.
     */
    headerIcons?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the close button's component.
     */
    closeButton?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the close button icon's component.
     */
    closeButtonIcon?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    rejectButton?: ButtonPassThroughOptions;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    acceptButton?: ButtonPassThroughOptions;
    /**
     * Used to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ConfirmDialogPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in ConfirmDialog component.
 */
export interface ConfirmDialogState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
    /**
     * Current confirmation message.
     */
    confirmation: any;
}

/**
 * Breakpoint metadata.
 */
export interface ConfirmDialogBreakpoints {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <ConfirmDialog :breakpoints="{'960px': '75vw', '640px': '100vw'}" ... />
     *
     * Result:
     *
     * @media screen and (max-width: ${breakpoint[key]}) {
     *      .p-dialog[attributeSelector] {
     *          width: ${breakpoint[value]} !important;
     *      }
     * }
     */
    [key: string]: string;
}

/**
 * Defines valid properties in ConfirmDialog component.
 */
export interface ConfirmDialogProps {
    /**
     * Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.
     */
    group?: string | undefined;
    /**
     * Object literal to define widths per screen size.
     * @see ConfirmDialogBreakpoints
     */
    breakpoints?: ConfirmDialogBreakpoints;
    /**
     * Enables dragging to change the position using header.
     * @defaultValue true
     */
    draggable?: boolean | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ConfirmDialogPassThroughOptions}
     */
    pt?: PassThrough<ConfirmDialogPassThroughOptions>;
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
 * Defines valid slots in ConfirmDialog component.
 */
export interface ConfirmDialogSlots {
    /**
     * Custom message template.
     * @param {Object} scope - message slot's params.
     */
    message(scope: {
        /**
         * Message of the component
         */
        message: ConfirmationOptions;
    }): VNode[];
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Style class of the icon template
         */
        class: any;
    }): VNode[];
    /**
     * Custom icon template.
     */
    accepticon(): VNode[];
    /**
     * Custom icon template.
     */
    rejecticon(): VNode[];
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
         * Close dialog function.
         * @deprecated since v3.39.0. Use 'closeCallback' property instead.
         */
        onClose: () => void;
        /**
         * Accept function of the component
         * @deprecated since v3.39.0. Use 'acceptCallback' property instead.
         */
        onAccept: () => void;
        /**
         * Reject function of the component
         * @deprecated since v3.39.0. Use 'rejectCallback' property instead.
         */
        onReject: () => void;
        /**
         * Close dialog function.
         */
        closeCallback: () => void;
        /**
         * Accept function of the component
         */
        acceptCallback: () => void;
        /**
         * Reject function of the component
         */
        rejectCallback: () => void;
    }): VNode[];
}

/**
 * Defines valid emits in ConfirmDialog component.
 */
export interface ConfirmDialogEmits {}

/**
 * **PrimeVue - ConfirmDialog**
 *
 * _ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag._
 *
 * [Live Demo](https://www.primevue.org/confirmdialog/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class ConfirmDialog extends ClassComponent<ConfirmDialogProps, ConfirmDialogSlots, ConfirmDialogEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ConfirmDialog: GlobalComponentConstructor<ConfirmDialog>;
    }
}

export default ConfirmDialog;
