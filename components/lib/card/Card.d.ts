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

/**
 * Defines valid properties in Card component.
 */
export interface CardProps {}

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
