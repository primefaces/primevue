import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

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
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that component is read-only.
     */
    readonly?: boolean | undefined;
    /**
     * Number of stars.
     * Default value is 5.
     */
    stars?: number | undefined;
    /**
     * When specified a cancel icon is displayed to allow clearing the value.
     * Default value is true.
     */
    cancel?: boolean | undefined;
    /**
     * Icon for the on state.
     * Default value is pi pi-star.
     */
    onIcon?: string | undefined;
    /**
     * Icon for the off state.
     * Default value is pi pi-star-fill.
     */
    offIcon?: string | undefined;
    /**
     * Icon for the cancelable state.
     * Default value is pi pi-ban.
     */
    cancelIcon?: string | undefined;
}

export interface RatingSlots {
    /**
     * Custom cancel icon template.
     */
    cancelicon: () => VNode[];
    /**
     * Custom on icon template.
     * @param {Object} scope - on icon slot's params.
     */
    onicon: (scope: {
        /**
         * Item value
         */
        value: number;
    }) => VNode[];
    /**
     * Custom off icon template.
     * @param {Object} scope - off icon slot's params.
     */
    officon: (scope: {
        /**
         * Item value
         */
        value: number;
    }) => VNode[];
}

export declare type RatingEmits = {
    /**
     * Emitted when the value changes.
     * @param {number} value - New value.
     */
    'update:modelValue': (value: number) => void;
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {RatingChangeEvent} event - Custom change event.
     */
    change: (event: RatingChangeEvent) => void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus: (event: Event) => void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur: (event: Event) => void;
};

declare class Rating extends ClassComponent<RatingProps, RatingSlots, RatingEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Rating: GlobalComponentConstructor<Rating>;
    }
}

/**
 *
 * Rating component is a star based selection input.
 *
 * Demos:
 *
 * - [Rating](https://www.primefaces.org/primevue/rating)
 *
 */
export default Rating;
