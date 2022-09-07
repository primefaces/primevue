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
     * Can be used to add different icon.
     * Default value is pi pi-star.
     */
    onIcon?: string | undefined;
    /**
     * Can be used to add different icon.
     * Default value is pi pi-star-fill.
     */
    offIcon?: string | undefined;
    /**
     * Can be used to add different cancel icon.
     * Default value is pi pi-ban.
     */
     cancelIcon?: string | undefined;
}

export interface RatingSlots {
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
    'change': (event: RatingChangeEvent) => void;
}

declare class Rating extends ClassComponent<RatingProps, RatingSlots, RatingEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Rating: GlobalComponentConstructor<Rating>
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
