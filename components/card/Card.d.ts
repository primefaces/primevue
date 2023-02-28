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
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface CardProps {}

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
 * @group Interfaces
 */
export declare type CardEmits = {};

/**
 * **PrimeVue - Card**
 *
 * _Card is a flexible container component._
 *
 * [Live Demo](https://www.primevue.org/card/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 * @group Component
 */
export declare class Card extends ClassComponent<CardProps, CardSlots, CardEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Card: GlobalComponentConstructor<Card>;
    }
}

/**
 *
 * Card is a flexible container component.
 *
 * Demos:
 *
 * - [Card](https://www.primefaces.org/primevue/card)
 *
 */
export default Card;
