/**
 *
 * Rating component is a star based selection input.
 *
 * [Live Demo](https://www.primevue.org/rating/)
 *
 * @module rating
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Custom change event.
 * @see {@link RatingEmits.change}
 */
export interface RatingChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Selected option value
     */
    value: number;
}

/**
 * Defines valid properties in Rating component.
 */
export interface RatingProps {
    /**
     * Value of the rating.
     */
    modelValue?: number | undefined;
    /**
     * Name of the element.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that component is read-only.
     * @defaultValue false
     */
    readonly?: boolean | undefined;
    /**
     * Number of stars.
     * @defaultValue 5
     */
    stars?: number | undefined;
    /**
     * When specified a cancel icon is displayed to allow clearing the value.
     * @defaultValue true
     */
    cancel?: boolean | undefined;
    /**
     * Icon for the on state.
     * @defaultValue pi pi-star
     */
    onIcon?: string | undefined;
    /**
     * Icon for the off state.
     * @defaultValue pi pi-star-fill
     */
    offIcon?: string | undefined;
    /**
     * Icon for the cancelable state.
     * @defaultValue pi pi-ban
     */
    cancelIcon?: string | undefined;
}

/**
 * Defines valid slots in Rating component.
 */
export interface RatingSlots {
    /**
     * Custom cancel icon template.
     */
    cancelicon(): VNode[];
    /**
     * Custom on icon template.
     * @param {Object} scope - on icon slot's params.
     */
    onicon(scope: {
        /**
         * Item value
         */
        value: number;
    }): VNode[];
    /**
     * Custom off icon template.
     * @param {Object} scope - off icon slot's params.
     */
    officon(scope: {
        /**
         * Item value
         */
        value: number;
    }): VNode[];
}

/**
 * Defines valid emits in Rating component.
 */
export interface RatingEmits {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue'(value: number): void;
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {RatingChangeEvent} event - Custom change event.
     */
    change(event: RatingChangeEvent): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

/**
 * **PrimeVue - Rating**
 *
 * _Rating component is a star based selection input._
 *
 * [Live Demo](https://www.primevue.org/rating/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Rating extends ClassComponent<RatingProps, RatingSlots, RatingEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Rating: GlobalComponentConstructor<Rating>;
    }
}

export default Rating;
