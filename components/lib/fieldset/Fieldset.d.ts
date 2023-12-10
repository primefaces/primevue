/**
 *
 * Fieldset is a grouping component with the optional content toggle feature.
 *
 * [Live Demo](https://www.primevue.org/fieldset/)
 *
 * @module fieldset
 *
 */
import { AnchorHTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type FieldsetPassThroughOptionType = FieldsetPassThroughAttributes | ((options: FieldsetPassThroughMethodOptions) => FieldsetPassThroughAttributes | string) | string | null | undefined;

export declare type FieldsetPassThroughTransitionType = TransitionProps | ((options: FieldsetPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FieldsetPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FieldsetProps;
    /**
     * Defines current inline state.
     */
    state: FieldsetState;
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
 * @see {@link FieldsetEmits.toggle}
 */
export interface FieldsetToggleEvent {
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
 * @see {@link FieldsetProps.pt}
 */
export interface FieldsetPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FieldsetPassThroughOptionType;
    /**
     * Used to pass attributes to the legend's DOM element.
     */
    legend?: FieldsetPassThroughOptionType;
    /**
     * Used to pass attributes to the toggler's DOM element.
     */
    toggler?: FieldsetPassThroughOptionType;
    /**
     * Used to pass attributes to the toggler icon's DOM element.
     */
    togglerIcon?: FieldsetPassThroughOptionType;
    /**
     * Used to pass attributes to the legend title's DOM element.
     */
    legendTitle?: FieldsetPassThroughOptionType;
    /**
     * Used to pass attributes to the toggleable content's DOM element.
     */
    toggleableContent?: FieldsetPassThroughOptionType;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: FieldsetPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: FieldsetPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FieldsetPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Fieldset component.
 */
export interface FieldsetState {
    /**
     * Current collapsed state as a boolean.
     * @defaultValue false
     */
    d_collapsed: boolean;
}

/**
 * Defines valid properties in Fieldset component.
 */
export interface FieldsetProps {
    /**
     * Header text of the fieldset.
     */
    legend?: string | undefined;
    /**
     * When specified, content can toggled by clicking the legend.
     * @defaultValue false
     */
    toggleable?: boolean | undefined;
    /**
     * Defines the default visibility state of the content.
     * @defaultValue false
     */
    collapsed?: boolean | undefined;
    /**
     * Used to pass the custom value to read for the AnchorHTMLAttributes inside the component.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    toggleButtonProps?: AnchorHTMLAttributes | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FieldsetPassThroughOptions}
     */
    pt?: PassThrough<FieldsetPassThroughOptions>;
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
 * Defines valid slots in Fieldset slots.
 */
export interface FieldsetSlots {
    /**
     * Default content slot.
     */
    default: () => VNode[];
    /**
     * Custom legend template.
     */
    legend: () => VNode[];
    /**
     * Custom toggler icon template.
     */
    togglericon: () => VNode[];
}

/**
 * Defines valid emits in Fildset component.
 */
export interface FieldsetEmits {
    /**
     * Emitted when the collapsed changes.
     * @param {boolean} value - New value.
     */
    'update:collapsed'(value: boolean): void;
    /**
     * Callback to invoke when a tab gets expanded or collapsed.
     * @param {FieldsetToggleEvent} event - Custom toggle event.
     */
    toggle(event: FieldsetToggleEvent): void;
}

/**
 * **PrimeVue - Fieldset**
 *
 * _Fieldset is a grouping component with the optional content toggle feature._
 *
 * [Live Demo](https://www.primevue.org/fieldset/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Fieldset extends ClassComponent<FieldsetProps, FieldsetSlots, FieldsetEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Fieldset: GlobalComponentConstructor<Fieldset>;
    }
}

export default Fieldset;
