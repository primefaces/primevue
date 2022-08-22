import Vue, { VNode } from 'vue';

declare class SpeedDial extends Vue {
    model?: any[];
    visible?: boolean;
    direction?: string;
    transitionDelay?: number;
    type?: string;
    radius?: number;
    mask?: boolean;
    disabled?: boolean;
    hideOnClickOutside?: boolean;
    buttonClassName?: string;
    maskStyle?: string;
    maskClassName?: string;
    showIcon?: string;
    hideIcon?: string;
    rotateAnimation?: boolean;
    className?: string;
    styles?: any;
    tooltipOptions?: any;
    $emit(eventName: 'click', event: Event): this;
    $emit(eventName: 'show'): this;
    $emit(eventName: 'hide'): this;
    $slots: {
        item: VNode[];
        button: VNode[];
    };
}

export default SpeedDial;