import Vue from 'vue';

declare class Button extends Vue {
    label?: string;
    icon?: string;
    iconPos?: string;
    badge?: string;
    badgeClass?: string;
}

export default Button;