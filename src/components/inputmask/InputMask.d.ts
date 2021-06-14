interface InputMaskProps {
    modelValue?: string;
    slotChar?: string;
    mask?: string;
    autoClear?: boolean;
    unmask?: boolean;
}

declare class InputMask {
    $props: InputMaskProps;
    $emit(eventName: 'update:modelValue', value: string): this;
    $emit(eventName: 'focus', event: Event): this;
    $emit(eventName: 'blur', event: Event): this;
    $emit(eventName: 'keydown', event: Event): this;
    $emit(eventName: 'keypress', event: Event): this;
    $emit(eventName: 'paste', event: Event): this;
    $emit(eventName: 'complete', event: Event): this;
}

export default InputMask;
