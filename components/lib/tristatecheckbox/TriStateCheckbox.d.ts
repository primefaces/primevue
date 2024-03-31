/**
 *
 * TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value.
 *
 * [Live Demo](https://www.primevue.org/tristatecheckbox/)
 *
 * @module tristatecheckbox
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, Nullable, PassThrough } from '../ts-helpers';

export declare type TriStateCheckboxPassThroughOptionType = TriStateCheckboxPassThroughAttributes | ((options: TriStateCheckboxPassThroughMethodOptions) => TriStateCheckboxPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TriStateCheckboxPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TriStateCheckboxProps;
    /**
     * Defines current inline state.
     */
    state: TriStateCheckboxState;
    /**
     * Defines current options.
     */
    context: TriStateCheckboxContext;
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
 * Custom passthrough(pt) options.
 * @see {@link TriStateCheckboxProps.pt}
 */
export interface TriStateCheckboxPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TriStateCheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: TriStateCheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: TriStateCheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the check icon's DOM element.
     */
    checkIcon?: TriStateCheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the uncheck icon's DOM element.
     */
    uncheckIcon?: TriStateCheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the nullable icon's DOM element.
     */
    nullableIcon?: TriStateCheckboxPassThroughOptionType;
    /**
     * Used to pass attributes to the hidden value label's DOM element.
     */
    hiddenValueLabel?: TriStateCheckboxPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TriStateCheckboxPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in TriStateCheckbox component.
 */
export interface TriStateCheckboxState {
    [key: string]: any;
}

/**
 * Defines current options in TriStateCheckbox component.
 */
export interface TriStateCheckboxContext {
    /**
     * Current active state as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current disabled state as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid properties in TriStateCheckbox component.
 */
export interface TriStateCheckboxProps {
    /**
     * Value of the component.
     * @defaultValue null
     */
    modelValue?: Nullable<boolean>;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: object | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: string | object | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TriStateCheckboxPassThroughOptions}
     */
    pt?: PassThrough<TriStateCheckboxPassThroughOptions>;
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
 * Defines valid slots in TriStateCheckbox component.
 */
export interface TriStateCheckboxSlots {
    /**
     * Custom check icon template.
     * @param {Object} scope - checkicon slot's params.
     */
    checkicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom uncheck icon template.
     * @param {Object} scope - uncheckicon slot's params.
     */
    uncheckicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom nullable icon template.
     * @param {Object} scope - nullableicon slot's params.
     */
    nullableicon(scope: {
        /**
         * Style class of the icon.
         */
        class: string;
    }): VNode[];
}

/**
 * Defines valid emits in TriStateCheckbox component.
 */
export interface TriStateCheckboxEmits {
    /**
     * Emitted when the value changes.
     * @param {boolean|null|undefined} value - New value.
     */
    'update:modelValue'(value: Nullable<boolean>): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

/**
 * **PrimeVue - TriStateCheckbox**
 *
 * _TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value._
 *
 * [Live Demo](https://www.primevue.org/tristatecheckbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class TriStateCheckbox extends ClassComponent<TriStateCheckboxProps, TriStateCheckboxSlots, TriStateCheckboxEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        TriStateCheckbox: GlobalComponentConstructor<TriStateCheckbox>;
    }
}

export default TriStateCheckbox;
