/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * [Live Demo](https://www.primevue.org/inplace)
 *
 * @module inplace
 *
 */

import { ButtonHTMLAttributes, HTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type InplacePassThroughOptionType = InplacePassThroughAttributes | ((options: InplacePassThroughMethodOptions) => InplacePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InplacePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: InplaceProps;
    /**
     * Defines current inline state.
     */
    state: InplaceState;
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
export interface InplaceSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: InplaceProps;
    /**
     * Defines current inline state.
     */
    state: InplaceState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link InplaceProps.pt}
 */
export interface InplacePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InplacePassThroughOptionType;
    /**
     * Used to pass attributes to the display's DOM element.
     */
    display?: InplacePassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: InplacePassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    closeButton?: ButtonPassThroughOptions<InplaceSharedPassThroughMethodOptions>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InplacePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Inplace component.
 */
export interface InplaceState {
    /**
     * Current active state as a boolean.
     * @defaultValue false
     */
    d_active: boolean;
}

/**
 * Defines valid properties in Inplace component.
 */
export interface InplaceProps {
    /**
     * Displays a button to switch back to display mode.
     * @defaultValue false
     */
    closable?: boolean | undefined;
    /**
     * Whether the content is displayed or not.
     * @defaultValue false
     */
    active?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Icon to display in the close button.
     * @deprecated since v3.27.0. Use 'closeicon' slot.
     */
    closeIcon?: string | undefined;
    /**
     * Used to pass all properties of the HTMLDivElement to display container.
     */
    displayProps?: HTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the close button.
     */
    closeButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InplacePassThroughOptions}
     */
    pt?: PassThrough<InplacePassThroughOptions>;
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
 * Defines valid slots in Inplace component.
 */
export interface InplaceSlots {
    /**
     * Custom display template.
     */
    display(): VNode[];
    /**
     * Custom content template.
     */
    content(): VNode[];
    /**
     * Custom close icon template.
     */
    closeicon(): VNode[];
}

/**
 * Defines valid emits in Inplace component.
 */
export interface InplaceEmits {
    /**
     * Emitted when the active changes.
     * @param {boolean} value - New value.
     */
    'update:active'(value: boolean): void;
    /**
     * Callback to invoke when inplace is opened.
     * @param {Event} event - Browser event.
     */
    open(event: Event): void;
    /**
     * Callback to invoke when inplace is closed.
     * @param {Event} event - Browser event.
     */
    close(event: Event): void;
}

/**
 * **PrimeVue - Inplace**
 *
 * _Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content._
 *
 * [Live Demo](https://www.primevue.org/inplace/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Inplace extends ClassComponent<InplaceProps, InplaceSlots, InplaceEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Inplace: GlobalComponentConstructor<Inplace>;
    }
}

export default Inplace;
