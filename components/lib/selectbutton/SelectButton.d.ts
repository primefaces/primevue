/**
 *
 * SelectButton is used to choose single or multiple items from a list using buttons.
 *
 * [Live Demo](https://www.primevue.org/selectbutton/)
 *
 * @module selectbutton
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type SelectButtonPassThroughOptionType = SelectButtonPassThroughAttributes | ((options: SelectButtonPassThroughMethodOptions) => SelectButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface SelectButtonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: SelectButtonProps;
    /**
     * Defines current inline state.
     */
    state: SelectButtonState;
    /**
     * Defines current options.
     */
    context: SelectButtonContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SelectButtonProps.pt}
 */
export interface SelectButtonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    button?: SelectButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: SelectButtonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SelectButtonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom change event.
 * @see {@link SelectButtonEmits.change}
 */
export interface SelectButtonChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Single value or an array of values that are selected.
     */
    value: any;
}

/**
 * Defines current inline state in SelectButton component.
 */
export interface SelectButtonState {
    /**
     * FocusedIndex state as a number.
     */
    focusedIndex: number;
}

/**
 * Defines current options in SelectButton component.
 */
export interface SelectButtonContext {
    /**
     * Current active state of the item as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current focused state of item as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Available option.
     */
    option: any;
}

/**
 * Defines valid properties in SelectButton component.
 */
export interface SelectButtonProps {
    /**
     * Value of the component.
     */
    modelValue?: any;
    /**
     * An array of selectitems to display as the available options.
     */
    options?: any[] | undefined;
    /**
     * Property name or getter function to use as the label of an option.
     */
    optionLabel?: string | ((data: any) => string) | undefined;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     */
    optionValue?: string | ((data: any) => any) | undefined;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     */
    optionDisabled?: string | ((data: any) => boolean) | undefined;
    /**
     * When specified, allows selecting multiple values.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * A property to uniquely identify an option.
     */
    dataKey?: string | undefined;
    /**
     * Whether selection can not be cleared.
     * @defaultValue false
     * @deprecated Use 'allowEmpty' property instead.
     */
    unselectable?: boolean | undefined;
    /**
     * Whether selection can be cleared.
     * @defaultValue true
     */
    allowEmpty?: boolean | undefined;
    /**
     * Identifier of the underlying element.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {SelectButtonPassThroughOptions}
     */
    pt?: PassThrough<SelectButtonPassThroughOptions>;
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
 * Defines valid slots in SelectButton component.
 */
export interface SelectButtonSlots {
    /**
     * Custom content for each option.
     * @param {Object} scope - option slot's params.
     */
    option(scope: {
        /**
         * Option instance
         */
        option: any;
        /**
         * Index of the option
         */
        index: number;
    }): VNode[];
}

/**
 * Defines valid emits in SelectButton component.
 */
export interface SelectButtonEmits {
    /**
     * Emitted when the value changes.
     * @param {*} value - New value.
     */
    'update:modelValue'(value: any): void;
    /**
     * Callback to invoke on value change.
     * @param {SelectButtonChangeEvent} event - Custom change event.
     */
    change(event: SelectButtonChangeEvent): void;
    /**
     * Callback to invoke on focus.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke on blur.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

/**
 * **PrimeVue - SelectButton**
 *
 * _SelectButton is used to choose single or multiple items from a list using buttons._
 *
 * [Live Demo](https://www.primevue.org/selectbutton/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class SelectButton extends ClassComponent<SelectButtonProps, SelectButtonSlots, SelectButtonEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SelectButton: GlobalComponentConstructor<SelectButton>;
    }
}

export default SelectButton;
