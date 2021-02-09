import { VNode } from 'vue';

interface CardProps {}

declare class Card {
    $props: CardProps;
    $slots: {
        header: VNode[];
        title: VNode[];
        subtitle: VNode[];
        content: VNode[];
        footer: VNode[];
    }
}

export default Card;
