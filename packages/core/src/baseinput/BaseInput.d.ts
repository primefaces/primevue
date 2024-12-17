/**
 *
 * [Live Demo](https://primevue.org/)
 *
 * @module baseinput
 *
 */
import { BaseEditableHolderEmitsOptions, BaseEditableHolderProps } from '@primevue/core/baseeditableholder';

export interface BaseInputProps extends BaseEditableHolderProps {
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Spans 100% width of the container when enabled.
     */
    fluid?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
}

export interface BaseInputEmitsOptions extends BaseEditableHolderEmitsOptions {}
