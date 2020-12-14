import Vue from 'vue';

declare class Chip extends Vue {
    label?: string;
    icon?: string;
    image?: string;
    removable?: boolean;
    removeIcon?: string;
}

export default Chip;