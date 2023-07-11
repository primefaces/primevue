/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primevue.org/confirmpopup)
 *
 * @module confirmpopup
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { ConfirmationOptions } from '../confirmationoptions';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type ConfirmPopupPassThroughOptionType = ConfirmPopupPassThroughAttributes | ((options: ConfirmPopupPassThroughMethodOptions) => ConfirmPopupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ConfirmPopupPassThroughMethodOptions {
    instance: any;
    props: ConfirmPopupProps;
    state: ConfirmPopupState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ConfirmPopupProps.pt}
 */
export interface ConfirmPopupPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: ConfirmPopupPassThroughOptionType;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: ConfirmPopupPassThroughOptionType;
    /**
     * Uses to pass attributes to the message's DOM element.
     */
    message?: ConfirmPopupPassThroughOptionType;
    /**
     * Uses to pass attributes to the footer's DOM element.
     */
    footer?: ConfirmPopupPassThroughOptionType;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    rejectButton?: ButtonPassThroughOptions;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    acceptButton?: ButtonPassThroughOptions;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
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
     * Uses to pass attributes to DOM elements inside the component.
     * @type {ConfirmPopupPassThroughOptions}
     */
    pt?: ConfirmPopupPassThroughOptions;
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
}

/**
 * Defines valid emits in ConfirmPopup component.
 */
export interface ConfirmPopupEmits {}

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
 */
declare class ConfirmPopup extends ClassComponent<ConfirmPopupProps, ConfirmPopupSlots, ConfirmPopupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ConfirmPopup: GlobalComponentConstructor<ConfirmPopup>;
    }
}

export default ConfirmPopup;
