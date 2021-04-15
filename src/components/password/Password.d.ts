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
    inputStyle?: any;
    inputClass?: string;
    panelClass?: string;
}

declare class Password {
    $props: PasswordProps;
    $emit(eventName: string, event: Event): this;
}

export default Password;
