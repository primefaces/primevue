/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module stepper
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { StepperPanelPassThroughOptionType } from '../stepperpanel';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type StepperPassThroughOptionType = StepperPassThroughAttributes | ((options: StepperPassThroughMethodOptions) => StepperPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepperPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepperProps;
    /**
     * Defines current inline state.
     */
    state: StepperState;
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
 * @see {@link StepperProps.pt}
 */
export interface StepperPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepperPassThroughOptionType;
    /**
     * Used to pass attributes to the nav's DOM element.
     */
    nav?: StepperPassThroughOptionType;
    /**
     * Used to pass attributes to the panel container's DOM element.
     */
    panelContainer?: StepperPassThroughOptionType;
    /**
     * Used to pass attributes to the end handler's DOM element.
     */
    stepperpanel?: StepperPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface StepperPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Stepper component.
 */
export interface StepperState {
    /**
     * Current active index state.
     */
    d_activeStep: number;
    /**
     * Unique id for the Stepper component.
     */
    id: string;
}

/**
 * Custom tab change event.
 * @see {@link StepperEmits['step-change']}
 */
export interface StepperChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Index of the selected stepper panel
     */
    index: number;
}

/**
 * Defines valid properties in Stepper component.
 */
export interface StepperProps {
    /**
     * Active step index of stepper.
     * @defaultValue 0
     */
    activeStep?: number | undefined;
    /**
     * Orientation of the stepper.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Whether the steps are clickable or not.
     * @defaultValue false
     */
    linear?: boolean | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepperPassThroughOptions}
     */
    pt?: PassThrough<StepperPassThroughOptions>;
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
 * Defines valid slots in Stepper component.
 */
export interface StepperSlots {
    /**
     * Custom start template.
     */
    start(): VNode[];
    /**
     * Custom end template.
     */
    end(): VNode[];
}

/**
 * Defines valid emits in Stepper component.
 */
export interface StepperEmits {
    /**
     * Emitted when the value changes.
     * @param {number | number[]} value - New value.
     */
    'update:activeStep'(value: number): void;
    /**
     * Callback to invoke when an active panel is changed.
     */
    'step-change'(event: StepperChangeEvent): void;
}

/**
 * **PrimeVue - Stepper**
 *
 * _Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process._
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Stepper extends ClassComponent<StepperProps, StepperSlots, StepperEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Stepper: GlobalComponentConstructor<Stepper>;
    }
}

export default Stepper;
