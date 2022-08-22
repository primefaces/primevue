import Vue from 'vue';

declare class Button extends Vue {
    label?: string;
    icon?: string;
    iconPos?: string;
    badge?: string;
    badgeClass?: string;
    loading?: boolean;
    loadingIcon?: string;
}

export default Button;