/**
 *
 * MeterGroup is a group of process status indicators.
 *
 * [Live Demo](https://primevue.org/metergroup)
 *
 * @module metergroup
 *
 */

import { VNode } from 'vue';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type MeterGroupPassThroughOptionType = MeterGroupPassThroughAttributes | ((options: MeterGroupPassThroughMethodOptions) => MeterGroupPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface MeterGroupPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: MeterGroupProps;
    /**
     * Defines current inline state.
     */
    context: MeterGroupContext;
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
 * @see {@link MeterGroupProps.pt}
 */
export interface MeterGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MeterGroupPassThroughOptionType;
    /**
     * Used to pass attributes to the label list's DOM element.
     */
    labellist?: MeterGroupPassThroughOptionType;
    /**
     * Used to pass attributes to the label list item's DOM element.
     */
    labellistitem?: MeterGroupPassThroughOptionType;
    /**
     * Used to pass attributes to the label list type's DOM element.
     */
    labellisttype?: MeterGroupPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: MeterGroupPassThroughOptionType;
    /**
     * Used to pass attributes to the meter container's DOM element.
     */
    metercontainer?: MeterGroupPassThroughOptionType;
    /**
     * Used to pass attributes to the meter's DOM element.
     */
    meter?: MeterGroupPassThroughOptionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface MeterGroupPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current options in MeterGroup component.
 */
export interface MeterGroupContext {
    /**
     * Current value of the meter item
     */
    value: MeterItem;
    /**
     * Current index of the meter item
     */
    index: number;
}

/**
 * Defines valid properties of a meter item.
 */
export interface MeterItem {
    /**
     * Current label of the meter item.
     */
    label: string;
    /**
     * Current value of the meter item.
     */
    value: number;
    /**
     * Current color of the meter item.
     */
    color: string;
    /**
     * Current icon of the meter item.
     */
    icon: string;
    /**
     * Optional keys.
     */
    [key: string]: any;
}

/**
 * Defines valid properties in MeterGroup component.
 */
export interface MeterGroupProps {
    /**
     * Current value of the metergroup.
     */
    value?: MeterItem[] | undefined;
    /**
     * Mininum boundary value.
     * @defaultValue 0
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     * @defaultValue 100
     */
    max?: number | undefined;
    /**
     * Specifies the layout of the component, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Specifies the label position of the component, valid values are 'start' and 'end'.
     * @defaultValue end
     */
    labelPosition?: 'start' | 'end' | undefined;
    /**
     * Specifies the label orientation of the component, valid values are 'horizontal' and 'vertical'.
     * @defaultValue horizontal
     */
    labelOrientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {MeterGroupPassThroughOptions}
     */
    pt?: PassThrough<MeterGroupPassThroughOptions>;
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
 * Defines valid slots in MeterGroup component.
 */
export interface MeterGroupSlots {
    /**
     * Custom label template.
     */
    label(scope: {
        /**
         * Current value of the component
         */
        value: MeterItem[];
        /**
         * Total percent of the metergroup items
         */
        totalPercent: number;
        /**
         * Array of sequential sum of values of metergroup items
         */
        percentages: number[];
    }): VNode[];
    /**
     * Custom meter template.
     */
    meter(scope: {
        /**
         * Current value of the meter item
         */
        value: MeterItem;
        /**
         * Current index of the meter item
         */
        index: number;
        /**
         * Style class of the meter item
         */
        class: string;
        /**
         * Current orientation of the component
         */
        orientation: string;
        /**
         * Current width of the meter item
         */
        size: string;
        /**
         * Total percent of the metergroup items
         */
        totalPercent: number;
    }): VNode[];
    /**
     * Custom icon template.
     */
    icon(scope: {
        /**
         * Current value of the component
         */
        value: MeterItem;
        /**
         * Style class of the icon
         */
        class: string;
    }): VNode[];
    /**
     * Custom start template.
     */
    start(scope: {
        /**
         * Current value of the component
         */
        value: MeterItem[];
        /**
         * Total percent of the metergroup items
         */
        totalPercent: number;
        /**
         * Array of sequential sum of values of metergroup items
         */
        percentages: number[];
    }): VNode[];
    /**
     * Custom end template.
     */
    end(scope: {
        /**
         * Current value of the component
         */
        value: MeterItem[];
        /**
         * Total percent of the metergroup items
         */
        totalPercent: number;
        /**
         * Array of sequential sum of values of metergroup items
         */
        percentages: number[];
    }): VNode[];
}

/**
 * Defines valid emits in MeterGroup component.
 */
export interface MeterGroupEmits {}

/**
 * **PrimeVue - MeterGroup**
 *
 * _MeterGroup is a group of process status indicators._
 *
 * [Live Demo](https://www.primevue.org/metergroup/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class MeterGroup extends ClassComponent<MeterGroupProps, MeterGroupSlots, MeterGroupEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        MeterGroup: GlobalComponentConstructor<MeterGroup>;
    }
}

export default MeterGroup;
