import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface CardProps {
}

export interface CardSlots {
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom title template.
     */
    title: () => VNode[];
    /**
     * Custom subtitle template.
     */
    subtitle: () => VNode[];
    /**
     * Custom content template.
     */
    content: () => VNode[];
    /**
     * Custom footer template.
     */
    footer: () => VNode[];
}

export declare type CardEmits = {
}

declare class Card extends ClassComponent<CardProps, CardSlots, CardEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Card: GlobalComponentConstructor<Card>
    }
}

/**
 *
 * Card is a flexible container component.
 *
 * Demos:
 *
 * - [Card](https://www.primefaces.org/primevue/showcase/#/card)
 *
 */
export default Card;
