/**
 *
 * StepperPanel is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module stepperpanel
 *
 */
import { TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../../../core/src/basecomponent';
import { PassThroughOptions } from '../passthrough';
import { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type StepperPanelPassThroughOptionType = StepperPanelPassThroughAttributes | ((options: StepperPanelPassThroughMethodOptions) => StepperPanelPassThroughAttributes | string) | string | null | undefined;

export declare type StepperPanelPassThroughTransitionType = TransitionProps | ((options: StepperPanelPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepperPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepperPanelProps;
    /**
     * Defines current options.
     */
    context: StepperPanelContext;
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
 * @see {@link StepperPanelProps.pt}
 */
export interface StepperPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: StepperPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the item header's DOM element.
     */
    itemHeader?: StepperPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the item number's DOM element.
     */
    itemNumber?: StepperPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the item title's DOM element.
     */
    itemTitle?: StepperPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: StepperPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the panel content container's DOM element.
     */
    panelContentContainer?: StepperPanelPassThroughOptionType;
    /**
     * Used to pass attributes to the panel content's DOM element.
     */
    panelContent?: StepperPanelPassThroughOptionType;
    /**
     * Used to control Vue Transition API.
     */
    transition?: StepperPanelPassThroughTransitionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface StepperPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in StepperPanel component.
 */
export interface StepperPanelProps {
    /**
     * Orientation of tab headers.
     */
    header?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepperPanelPassThroughOptions}
     */
    pt?: PassThrough<StepperPanelPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in StepperPanel component.
 */
export interface StepperPanelContext {
    /**
     * Current index of the stepperpanel.
     */
    index: number;
    /**
     * Count of stepperpanels
     */
    count: number;
    /**
     * Whether the stepperpanel is first.
     */
    first: boolean;
    /**
     * Whether the stepperpanel is last.
     */
    last: boolean;
    /**
     * Whether the stepperpanel is active.
     */
    active: boolean;
    /**
     * Whether the stepperpanel is highlighted.
     */
    highlighted: boolean;
    /**
     * Whether the stepperpanel is disabled.
     */
    disabled: boolean;
}

/**
 * Defines valid slots in StepperPanel slots.
 */
export interface StepperPanelSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
    /**
     * Custom header template.
     */
    header(scope: {
        /**
         * Index of the stepperpanel
         */
        index: number;
        /**
         * Current active state of the stepperpanel
         */
        active: boolean;
        /**
         * Current highlighted state of the stepperpanel
         */
        highlighted: boolean;
        /**
         * Style class of the stepperpanel
         */
        class: string;
        /**
         * Style class of the stepperpanel
         */
        headerClass: string;
        /**
         * Style class of the number content container
         */
        numberClass: string;
        /**
         * Style class of the title content container
         */
        titleClass: string;
        /**
         * Header click function.
         * @param {Event} event - Browser event
         */
        clickCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom content template.
     */
    content(scope: {
        /**
         * Index of the stepperpanel
         */
        index: number;
        /**
         * Current active state of the stepperpanel
         */
        active: boolean;
        /**
         * Current highlighted state of the stepperpanel
         */
        highlighted: boolean;
        /**
         * Style class of the stepperpanel
         */
        class: string;
        /**
         * Content click function.
         * @param {Event} event - Browser event
         */
        clickCallback: (event: Event) => void;
        /**
         * Content previous panel click function.
         * @param {Event} event - Browser event
         */
        prevCallback: (event: Event) => void;
        /**
         * Content next panel click function.
         * @param {Event} event - Browser event
         */
        nextCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom separator template.
     */
    separator(scope: {
        /**
         * Index of the stepperpanel
         */
        index: number;
        /**
         * Current active state of the stepperpanel
         */
        active: boolean;
        /**
         * Current highlighted state of the stepperpanel
         */
        highlighted: boolean;
        /**
         * Style class of the stepperpanel
         */
        class: string;
    }): VNode[];
}

export interface StepperPanelEmitsOptions {}

export declare type StepperPanelEmits = EmitFn<StepperPanelEmitsOptions>;

/**
 * @deprecated since v4. Use the new structure of Stepper instead.
 *
 * **PrimeVue - StepperPanel**
 *
 * _StepperPanel is a helper component for Stepper component._
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const StepperPanel: DefineComponent<StepperPanelProps, StepperPanelSlots, StepperPanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        StepperPanel: GlobalComponentConstructor<StepperPanelProps, StepperPanelSlots, StepperPanelEmits>;
    }
}

export default StepperPanel;
