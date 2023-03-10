/**
 *
 * Textarea is a multi-line text input element.
 *
 * [Live Demo](https://www.primevue.org/textarea/)
 *
 * @module textarea
 *
 */
import { TextareaHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Textarea component. In addition to these, all properties of TextareaHTMLAttributes can be used in this component.
 * @extends TextareaHTMLAttributes
 */
export interface TextareaProps extends TextareaHTMLAttributes {
    /**
     * Value of the component.
     */
    modelValue?: string | undefined;
    /**
     * When present, height of textarea changes as being typed.
     * @defaultValue false
     */
    autoResize?: boolean | undefined;
}

/**
 * Defines valid slots in Textarea component.
 */
export interface TextareaSlots {}

/**
 * Defines valid emits in Textarea component.
 */
export interface TextareaEmits {
    /**
     * Emitted when the value changes.
     * @param {string} value - New value.
     */
    'update:modelValue': (value: string) => void;
}

/**
 * **PrimeVue - Textarea**
 *
 * _Textarea is a multi-line text input element._
 *
 * [Live Demo](https://www.primevue.org/textarea/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class Textarea extends ClassComponent<TextareaProps, TextareaSlots, TextareaEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Textarea: GlobalComponentConstructor<Textarea>;
    }
}

export default Textarea;
