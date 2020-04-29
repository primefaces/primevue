import Vue from 'vue';

export declare class ToggleButton extends Vue {
    value?: boolean;
    onIcon?: string;
    offIcon?: string;
    onLabel?: string;
    offLabel?: string;
    iconPos?: string;
    ariaLabelledBy?: string;
    $emit(eventName: string, event: Event): this;
}