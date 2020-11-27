import Vue, { VNode } from 'vue';

declare class Card extends Vue {
    $slots: {
        header: VNode[];
        title: VNode[];
        subtitle: VNode[];
        content: VNode[];
        footer: VNode[];
    }
}

export default Card;