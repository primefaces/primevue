import { VNode } from 'vue';

interface PasswordProps {
    modelValue?: string;
    promptLabel?: string;
    mediumRegex?: string;
    strongRegex?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
    appendTo?: string;
    toggleMask?: boolean;
    hideIcon?: string;
    showIcon?: string;
    inputStyle?: any;
    inputClass?: string;
    style?: any;
    class?: string;
    panelClass?: string;
}

declare class Password {
    $props: PasswordProps;
    $emit(eventName: 'update:modelValue', value: string): this;
    $slots: {
        header: VNode[];
        footer: VNode[];
        content: VNode[];
    }
}

export default Password;
