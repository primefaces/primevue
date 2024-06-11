/**
 *
 * ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primevue.org/confirmdialog)
 *
 * @module confirmdialog
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions } from 'primevue/button';
import type { ConfirmationOptions } from 'primevue/confirmationoptions';
import type { PassThroughOptions } from 'primevue/passthrough';
import { VNode } from 'vue';

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
 * Custom shared passthrough(pt) option method.
 */
export interface ConfirmDialogSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: ConfirmDialogProps;
    /**
     * Defines current inline state.
     */
    state: ConfirmDialogState;
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
    title?: ConfirmDialogPassThroughOptionType;
    /**
     * Used to pass attributes to the header icons' DOM element.
     */
    icons?: ConfirmDialogPassThroughOptionType;
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
    pcRejectButton?: ButtonPassThroughOptions<ConfirmDialogSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcAcceptButton?: ButtonPassThroughOptions<ConfirmDialogSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
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
     *          width: ${breakpoint[value]};
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
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
export interface ConfirmDialogEmitsOptions {}

export declare type ConfirmDialogEmits = EmitFn<ConfirmDialogEmitsOptions>;

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
 *
 */
declare const ConfirmDialog: DefineComponent<ConfirmDialogProps, ConfirmDialogSlots, ConfirmDialogEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ConfirmDialog: GlobalComponentConstructor<ConfirmDialogProps, ConfirmDialogSlots, ConfirmDialogEmits>;
    }
}

export default ConfirmDialog;
