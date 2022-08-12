import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type CalendarValueType = Date | Date[] | undefined;

type CalendarSlotDateType = { day: number; month: number; year: number; today: boolean; selectable: boolean }

type CalendarSelectionModeType = 'single' | 'multiple' | 'range' | undefined;

type CalendarViewType = 'date' | 'month' | 'year' | undefined;

type CalendarHourFormatType = '12' | '24' | undefined;

type CalendarAppendToType = 'body' | 'self' | string | undefined | HTMLElement;

export interface CalendarResponsiveOptions {
    /**
     * Breakpoint for responsive mode. Exp; @media screen and (max-width: ${breakpoint}) {...}
     */
    breakpoint: string;
    /**
     * The number of visible months on breakpoint.
     */
    numMonths: number;
}

export interface CalendarMonthChangeEvent {
    /**
     * New month.
     */
    month: number;
    /**
     * New year.
     */
    year: number;
}

export interface CalendarYearChangeEvent {
    /**
     * New month.
     */
    month: number;
    /**
     * New year.
     */
    year: number;
}

export interface CalendarBlurEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Input value
     */
    value: string;
}

export interface CalendarProps {
    /**
     * Value of the component.
     */
    modelValue?: CalendarValueType;
    /**
     * Defines the quantity of the selection, valid values are 'single', 'multiple' and 'range'.
     * @see CalendarSelectionModeType
     * Default value is 'single'.
     */
    selectionMode?: CalendarSelectionModeType;
    /**
     * Format of the date. Defaults to PrimeVue Locale configuration.
     */
    dateFormat?: string | undefined;
    /**
     * When enabled, displays the calendar as inline instead of an overlay.
     */
    inline?: boolean | undefined;
    /**
     * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
     * Default value is true.
     */
    showOtherMonths?: boolean | undefined;
    /**
     * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
     */
    selectOtherMonths?: boolean | undefined;
    /**
     * When enabled, displays a button with icon next to input.
     */
    showIcon?: boolean | undefined;
    /**
     * Icon of the calendar button.
     * Default value is 'pi pi-calendar'.
     */
    icon?: string | undefined;
    /**
     * Number of months to display.
     * Default value is 1.
     */
    numberOfMonths?: number | undefined;
    /**
     * An array of options for responsive design.
     * @see CalendarResponsiveOptions
     */
    responsiveOptions?: CalendarResponsiveOptions[];
    /**
     * Type of view to display, valid values are 'date', 'month' and 'year'.
     * @see CalendarViewType
     * Default value is 'date'.
     */
    view?: CalendarViewType;
    /**
     * When enabled, calendar overlay is displayed as optimized for touch devices.
     */
    touchUI?: boolean | undefined;
    /**
     * Whether the month should be rendered as a dropdown instead of text.
     *
     * @deprecated since version 3.9.0, Navigator is always on.
     */
    monthNavigator?: boolean | undefined;
    /**
     * Whether the year should be rendered as a dropdown instead of text.
     *
     * @deprecated since version 3.9.0, Navigator is always on.
     */
    yearNavigator?: boolean | undefined;
    /**
     * The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).
     *
     * @deprecated since version 3.9.0, Years are based on decades by default.
     */
    yearRange?: string | undefined;
    /**
     * The minimum selectable date.
     */
    minDate?: Date | undefined;
    /**
     * The maximum selectable date.
     */
    maxDate?: Date | undefined;
    /**
     * Array with dates to disable.
     */
    disabledDates?: Date[] | undefined;
    /**
     * Array with disabled weekday numbers.
     */
    disabledDays?: number[] | undefined;
    /**
     * Maximum number of selectable dates in multiple mode.
     */
    maxDateCount?: number | undefined;
    /**
     * When disabled, datepicker will not be visible with input focus.
     * Default value is true.
     */
    showOnFocus?: boolean | undefined;
    /**
     * Whether to automatically manage layering.
     * Default value is true.
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * Default value is 0.
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to display today and clear buttons at the footer.
     */
    showButtonBar?: boolean | undefined;
    /**
     * The cutoff year for determining the century for a date.
     * Default value is +10.
     */
    shortYearCutoff?: string | undefined;
    /**
     * Whether to display timepicker.
     */
    showTime?: boolean | undefined;
    /**
     * Whether to display timepicker only.
     */
    timeOnly?: boolean | undefined;
    /**
     * Specifies 12 or 24 hour format.
     */
    hourFormat?: CalendarHourFormatType;
    /**
     * Hours to change per step.
     * Default value is 1.
     */
    stepHour?: number | undefined;
    /**
     * Minutes to change per step.
     * Default value is 1.
     */
    stepMinute?: number | undefined;
    /**
     * Seconds to change per step.
     * Default value is 1.
     */
    stepSecond?: number | undefined;
    /**
     * Whether to show the seconds in time picker.
     */
    showSeconds?: boolean | undefined;
    /**
     * Whether to hide the overlay on date selection when showTime is enabled.
     */
    hideOnDateTimeSelect?: boolean | undefined;
    /**
     * Whether to hide the overlay on date selection is completed when selectionMode is range.
     */
    hideOnRangeSelection?: boolean | undefined;
    /**
     * Separator of time selector.
     * Default value is ':'.
     */
    timeSeparator?: string | undefined;
    /**
     * When enabled, calendar will show week numbers.
     */
    showWeek?: boolean | undefined;
    /**
     * Wheter to allow prevents entering the date manually via typing.
     * Default value is true.
     */
    manualInput?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     */
    readonly?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself.
     * @see CalendarAppendToType
     * Default value is 'body'.
     */
    appendTo?: CalendarAppendToType;
    /**
     * Identifier of the element.
     */
    id?: string | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: HTMLInputElement | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: any | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    panelProps?: HTMLDivElement | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

export interface CalendarSlots {
    /**
     * Custom header template of panel.
     */
    header: () => VNode[];
    /**
     * Custom footer template of panel.
     */
    footer: () => VNode[];
    /**
     * Custom date template.
     * @param {Object} scope - date slot's params.
     */
    date: (scope: {
        /**
         * Value of the component.
         */
        date: CalendarSlotDateType;
    }) => VNode[];
    /**
     * Custom decade template.
     * @param {CalendarDecadeSlot} scope - decade slot's params.
     */
    decade: (scope: {
        /**
         * An array containing the start and and year of a decade to display at header of the year picker.
         */
        years: string[] | undefined;
    }) => VNode[];
}

export declare type CalendarEmits = {
    /**
     * Emitted when the value changes.
     * @param {CalendarValueType} value - New value.
     */
    'update:modelValue': (value: CalendarValueType) => void;
    /**
     * Callback to invoke when input field is being typed.
     * @param {Event} event - Browser event
     */
    'input': (event: Event) => void;
    /**
     * Callback to invoke when a date is selected.
     * @param {Date} value - Selected value.
     */
    'date-select': (value: Date) => void;
    /**
     * Callback to invoke when datepicker panel is shown.
     */
    'show': () => void;
    /**
     * Callback to invoke when datepicker panel is hidden.
     */
    'hide': () => void;
    /**
     * Callback to invoke when today button is clicked.
     * @param {Date} date - Today as a date instance.
     */
    'today-click': (date: Date) => void;
    /**
     * Callback to invoke when clear button is clicked.
     * @param {Event} event - Browser event.
     */
    'clear-click': (event: Event) => void;
    /**
     * Callback to invoke when a month is changed using the navigators.
     * @param {CalendarMonthChangeEvent} event - Custom month change event.
     */
    'month-change': (event: CalendarMonthChangeEvent) => void;
    /**
     * Callback to invoke when a year is changed using the navigators.
     * @param {CalendarYearChangeEvent} event - Custom year change event.
     */
    'year-change': (event: CalendarYearChangeEvent) => void;
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Focus event
     */
    'focus': (event: Event) => void;
    /**
     * Callback to invoke on blur of input field.
     * @param {CalendarBlurEvent} event - Blur event
     */
    'blur': (event: CalendarBlurEvent) => void;
    /**
     * Callback to invoke when a key is pressed.
     */
    'keydown': (event: Event) => void;
}

declare class Calendar extends ClassComponent<CalendarProps, CalendarSlots, CalendarEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Calendar: GlobalComponentConstructor<Calendar>
    }
}

/**
 *
 * Calendar is an input component to select a date.
 *
 * Demos:
 *
 * - [Calendar](https://www.primefaces.org/primevue/showcase/#/calendar)
 *
 */
export default Calendar;
