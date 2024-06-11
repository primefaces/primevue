/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primevue.org/confirmpopup)
 *
 * @module confirmpopup
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import { ButtonPassThroughOptions } from 'primevue/button';
import { ConfirmationOptions } from 'primevue/confirmationoptions';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type ConfirmPopupPassThroughOptionType = ConfirmPopupPassThroughAttributes | ((options: ConfirmPopupPassThroughMethodOptions) => ConfirmPopupPassThroughAttributes | string) | string | null | undefined;

export declare type ConfirmPopupPassThroughTransitionType = TransitionProps | ((options: ConfirmPopupPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ConfirmPopupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ConfirmPopupProps;
    /**
     * Defines current inline state.
     */
    state: ConfirmPopupState;
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
export interface ConfirmPopupSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: ConfirmPopupProps;
    /**
     * Defines current inline state.
     */
    state: ConfirmPopupState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ConfirmPopupProps.pt}
 */
export interface ConfirmPopupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ConfirmPopupPassThroughOptionType;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ConfirmPopupPassThroughOptionType;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: ConfirmPopupPassThroughOptionType;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ConfirmPopupPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcRejectButton?: ButtonPassThroughOptions<ConfirmPopupSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    pcAcceptButton?: ButtonPassThroughOptions<ConfirmPopupSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: ConfirmPopupPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ConfirmPopupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in ConfirmPopup component.
 */
export interface ConfirmPopupState {
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
    /**
     * Current confirmation message.
     */
    confirmation: ConfirmationOptions;
}

/**
 * Defines valid properties in ConfirmPopup component.
 */
export interface ConfirmPopupProps {
    /**
     * Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.
     */
    group?: string;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ConfirmPopupPassThroughOptions}
     */
    pt?: PassThrough<ConfirmPopupPassThroughOptions>;
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
 * Defines valid slots in ConfirmPopup component.
 */
export interface ConfirmPopupSlots {
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
     *  @param {Object} scope - icon slot's params.
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
 * Defines valid emits in ConfirmPopup component.
 */
export interface ConfirmPopupEmitsOptions {}

export declare type ConfirmPopupEmits = EmitFn<ConfirmPopupEmitsOptions>;

/**
 * **PrimeVue - ConfirmPopup**
 *
 * _ConfirmPopup displays a confirmation overlay displayed relatively to its target._
 *
 * [Live Demo](https://www.primevue.org/confirmpopup/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ConfirmPopup: DefineComponent<ConfirmPopupProps, ConfirmPopupSlots, ConfirmPopupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ConfirmPopup: GlobalComponentConstructor<ConfirmPopupProps, ConfirmPopupSlots, ConfirmPopupEmits>;
    }
}

export default ConfirmPopup;
