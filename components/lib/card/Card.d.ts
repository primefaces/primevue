/**
 *
 * Card is a flexible container component.
 *
 * [Live Demo](https://www.primevue.org/card/)
 *
 * @module card
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type CardPassThroughOptionType = CardPassThroughAttributes | null | undefined;

/**
 * Custom passthrough(pt) options.
 * @see {@link CardProps.pt}
 */
export interface CardPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: CardPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: CardPassThroughOptionType;
    /**
     * Uses to pass attributes to the body's DOM element.
     */
    body?: CardPassThroughOptionType;
    /**
     * Uses to pass attributes to the title's DOM element.
     */
    title?: CardPassThroughOptionType;
    /**
     * Uses to pass attributes to the subtitle's DOM element.
     */
    subtitle?: CardPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: CardPassThroughOptionType;
    /**
     * Uses to pass attributes to the footer's DOM element.
     */
    footer?: CardPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CardPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in Card component.
 */
export interface CardProps {
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {CardPassThroughOptions}
     */
    pt?: CardPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Card component.
 */
export interface CardSlots {
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom title template.
     */
    title(): VNode[];
    /**
     * Custom subtitle template.
     */
    subtitle(): VNode[];
    /**
     * Custom content template.
     */
    content(): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
}

/**
 * Defines valid emits in Card component.
 */
export interface CardEmits {}

/**
 * **PrimeVue - Card**
 *
 * _Card is a flexible container component._
 *
 * [Live Demo](https://www.primevue.org/card/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Card extends ClassComponent<CardProps, CardSlots, CardEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Card: GlobalComponentConstructor<Card>;
    }
}

export default Card;
