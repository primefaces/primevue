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
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, DesignToken, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type CardPassThroughOptionType = CardPassThroughAttributes | ((options: CardPassThroughMethodOptions) => CardPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CardPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: CardProps;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link CardProps.pt}
 */
export interface CardPassThroughOptions {
    /**
     * Used to pass attributes to the roots DOM element.
     */
    root?: CardPassThroughOptionType;
    /**
     * Used to pass attributes to the headers DOM element.
     */
    header?: CardPassThroughOptionType;
    /**
     * Used to pass attributes to the bodys DOM element.
     */
    body?: CardPassThroughOptionType;
    /**
     * Used to pass attributes to the captions DOM element.
     */
    caption?: CardPassThroughOptionType;
    /**
     * Used to pass attributes to the titles DOM element.
     */
    title?: CardPassThroughOptionType;
    /**
     * Used to pass attributes to the subtitles DOM element.
     */
    subtitle?: CardPassThroughOptionType;
    /**
     * Used to pass attributes to the contents DOM element.
     */
    content?: CardPassThroughOptionType;
    /**
     * Used to pass attributes to the footers DOM element.
     */
    footer?: CardPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
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
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {CardPassThroughOptions}
     */
    pt?: PassThrough<CardPassThroughOptions>;
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

declare module 'vue' {
    export interface GlobalComponents {
        Card: GlobalComponentConstructor<Card>;
    }
}

export default Card;
