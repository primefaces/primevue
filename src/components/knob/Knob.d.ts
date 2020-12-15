import Vue from 'vue';

declare class Knob extends Vue {
    value?: number;
    size?: number;
    disabled?: boolean;
    readonly?: boolean;
    step?: number;
    min?: number;
    max?: number;
    valueColor?: string;
    rangeColor?: string;
    textColor?: string;
    strokeWidth?: number;
    showValue?: boolean;
    valueTemplate?: string;
    $emit(eventName: 'change', value: any): this;
}

export default Knob;