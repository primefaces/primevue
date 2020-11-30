import Vue from 'vue';

declare class ScrollTo extends Vue {
    target?: string;
    threshold?: number;
    icon?: boolean;
    behavior?: boolean;
}

export default ScrollTo;