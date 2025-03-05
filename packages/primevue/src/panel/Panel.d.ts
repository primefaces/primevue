/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/panel/)
 *
 * @module panel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions } from 'primevue/button';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type PanelPassThroughOptionType = PanelPassThroughAttributes | ((options: PanelPassThroughMethodOptions) => PanelPassThroughAttributes | string) | string | null | undefined;

export declare type PanelPassThroughTransitionType = TransitionProps | ((options: PanelPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface PanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: PanelProps;
    /**
     * Defines current inline state.
     */
    state: PanelState;
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
export interface PanelSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: PanelProps;
    /**
     * Defines current inline state.
     */
    state: PanelState;
}

/**
 * Custom toggle event.
 * @see {@link PanelEmitsOptions.toggle}
 */
export interface PanelToggleEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Collapsed state as a boolean
     */
    value: boolean;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link PanelProps.pt}
 */
export interface PanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the header actions' DOM element.
     */
    headerActions?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the toggle button button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcToggleButton?: ButtonPassThroughOptions<PanelSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the content container's DOM element.
     */
    contentContainer?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: PanelPassThroughOptionType;
    /**
     * Used to control Vue Transition API.
     */
    transition?: PanelPassThroughTransitionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface PanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Panel component.
 */
export interface PanelState {
    /**
     * Current collapsed state as a boolean.
     * @defaultValue false
     */
    d_collapsed: boolean;
}

/**
 * Defines valid properties in Panel component.
 */
export interface PanelProps {
    /**
     * Header text of the panel.
     */
    header?: string;
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @defaultValue false
     */
    toggleable?: boolean;
    /**
     * Defines the initial state of panel content.
     * @defaultValue false
     */
    collapsed?: boolean;
    /**
     * Used to pass the custom value to read for the button inside the component.
     * @defaultValue { severity: 'secondary', text: true, rounded: true }
     */
    toggleButtonProps?: object | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {PanelPassThroughOptions}
     */
    pt?: PassThrough<PanelPassThroughOptions>;
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
 * Defines valid slots in Panel slots.
 */
export interface PanelSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom header template.
     * @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Current id state as a string
         */
        id: string;
        /**
         * Style class of the icon
         */
        class: string;
    }): VNode[];
    /**
     * Custom icons template.
     */
    icons(): VNode[];
    /**
     * Custom toggle button template of panel.
     * @param {Object} scope - toggle button slot's params.
     */
    togglebutton(scope: {
        /**
         * Collapsed state as a boolean
         */
        collapsed: boolean;
        /**
         * Toggle function.
         * @param {Event} event - Browser event
         */
        toggleCallback: (event: Event) => void;
        /**
         * Keydown function.
         * @param {Event} event - Browser event
         */
        keydownCallback: (event: Event) => void;
    }): VNode[];
    /**
     * @deprecated since v4.0. Use the 'toggleicon' slot instead.
     * Custom toggler icon template of panel.
     * @param {Object} scope - toggler icon slot's params.
     */
    togglericon(scope: {
        /**
         * Collapsed state as a boolean
         */
        collapsed: boolean;
    }): VNode[];
    /**
     * Custom toggle icon template of panel.
     * @param {Object} scope - toggle icon slot's params.
     */
    toggleicon(scope: {
        /**
         * Collapsed state as a boolean
         */
        collapsed: boolean;
    }): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
}

/**
 * Defines valid emits in Panel component.
 */
export interface PanelEmitsOptions {
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New value.
     */
    'update:collapsed'(value: boolean): void;
    /**
     * Callback to invoke when a tab toggle.
     * @param {PanelToggleEvent} event - Custom toggle event.
     */
    toggle(event: PanelToggleEvent): void;
}

export declare type PanelEmits = EmitFn<PanelEmitsOptions>;

/**
 * **PrimeVue - Panel**
 *
 * _Panel is a container with the optional content toggle feature._
 *
 * [Live Demo](https://www.primevue.org/panel/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const Panel: DefineComponent<PanelProps, PanelSlots, PanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Panel: DefineComponent<PanelProps, PanelSlots, PanelEmits>;
    }
}

export default Panel;
