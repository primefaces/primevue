/**
 *
 * Panel is a container with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/panel/)
 *
 * @module panel
 *
 */
import { ButtonHTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

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
 * Custom toggle event.
 * @see {@link PanelEmits.toggle}
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
     * Used to pass attributes to the icons' DOM element.
     */
    icons?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the toggler's DOM element.
     */
    toggler?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the togglericon's DOM element.
     */
    togglerIcon?: PanelPassThroughOptionType;
    /**
     * Used to pass attributes to the toggleablecontent's DOM element.
     */
    toggleableContent?: PanelPassThroughOptionType;
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
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    toggleButtonProps?: ButtonHTMLAttributes | undefined;
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
     * Custom footer template.
     */
    footer(): VNode[];
}

/**
 * Defines valid emits in Panel component.
 */
export interface PanelEmits {
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
declare class Panel extends ClassComponent<PanelProps, PanelSlots, PanelEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Panel: GlobalComponentConstructor<Panel>;
    }
}

export default Panel;
