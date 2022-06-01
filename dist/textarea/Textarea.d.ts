import { TextareaHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface TextareaProps extends TextareaHTMLAttributes {
    /**
     * Value of the component.
     */
    modelValue?: string | undefined;
    /**
     * When present, height of textarea changes as being typed.
     */
    autoResize?: boolean | undefined;
}

export interface TextareaSlots {
}

export declare type TextareaEmits = {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string) => void;
}

declare class Textarea extends ClassComponent<TextareaProps, TextareaSlots, TextareaEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Textarea: GlobalComponentConstructor<Textarea>
    }
}

/**
 *
 * Textarea is a multi-line text input element.
 *
 * Demos:
 *
 * - [Textarea](https://www.primefaces.org/primevue/showcase/#/textarea)
 *
 */
export default Textarea;
