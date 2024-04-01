/**
 *
 * Calendar also known as DatePicker, is a form component to work with dates.
 *
 * [Live Demo](https://www.primevue.org/calendar/)
 *
 * @module calendar
 *
 */
import { HTMLAttributes, InputHTMLAttributes, TransitionProps, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, HintedString, PassThrough } from '../ts-helpers';

export declare type CalendarPassThroughOptionType = CalendarPassThroughAttributes | ((options: CalendarPassThroughMethodOptions) => CalendarPassThroughAttributes | string) | string | null | undefined;

export declare type CalendarPassThroughTransitionType = TransitionProps | ((options: CalendarPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface CalendarPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: CalendarProps;
    /**
     * Defines current inline state.
     */
    state: CalendarState;
    /**
     * Defines current options.
     */
    context: CalendarContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface CalendarSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: CalendarProps;
    /**
     * Defines current inline state.
     */
    state: CalendarState;
}

/**
 * Custom Calendar responsive options metadata.
 */
export interface CalendarResponsiveOptions {
    /**
     * Breakpoint for responsive mode. Exp; \@media screen and (max-width: ${breakpoint}) {...}
     */
    breakpoint: string;
    /**
     * The number of visible months on breakpoint.
     */
    numMonths: number;
}

/**
 * Custom Calendar month change event.
 * @see {@link CalendarEmits['month-change']]}
 */
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

/**
 * Custom Calendar year change event.
 * @see {@link CalendarEmits['year-change']]}
 */
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

/**
 * Custom Calendar blur event.
 * @see {@link CalendarEmits.blur}
 */
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

/**
 * Custom passthrough(pt) options.
 * @see {@link CalendarProps.pt}
 */
export interface CalendarPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    dropdownButton?: ButtonPassThroughOptions<CalendarSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the group container's DOM element.
     */
    groupContainer?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the group's DOM element.
     */
    group?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    previousButton?: ButtonPassThroughOptions<CalendarSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the month title's DOM element.
     */
    monthTitle?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the year title's DOM element.
     */
    yearTitle?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the decade title's DOM element.
     */
    decadeTitle?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    nextButton?: ButtonPassThroughOptions<CalendarSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the container's DOM element.
     */
    container?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the table's DOM element.
     */
    table?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the table header's DOM element.
     */
    tableHeader?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the table header row's DOM element.
     */
    tableHeaderRow?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the week header's DOM element.
     */
    weekHeader?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the week header label's DOM element.
     */
    weekHeaderLabel?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the table header cell's DOM element.
     */
    tableHeaderCell?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the week label's DOM element.
     */
    weekLabel?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the week day's DOM element.
     */
    weekDay?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the table body's DOM element.
     */
    tableBody?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the table body row's DOM element.
     */
    tableBodyRow?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the week number's DOM element.
     */
    weekNumber?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the week label container's DOM element.
     */
    weekLabelContainer?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the day's DOM element.
     */
    day?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the day label's DOM element.
     */
    dayLabel?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the month picker's DOM element.
     */
    monthPicker?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the month's DOM element.
     */
    month?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the year picker's DOM element.
     */
    yearPicker?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the year's DOM element.
     */
    year?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the time picker's DOM element.
     */
    timePicker?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the hour picker's DOM element.
     */
    hourPicker?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the hour's DOM element.
     */
    hour?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the separatorc ontainer's DOM element.
     */
    separatorContainer?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the minute picker's DOM element.
     */
    minutePicker?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the minute's DOM element.
     */
    minute?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the second picker's DOM element.
     */
    secondPicker?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the second's DOM element.
     */
    second?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the ampm picker's DOM element.
     */
    ampmPicker?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the ampm's DOM element.
     */
    ampm?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the buttonbar's DOM element.
     */
    buttonbar?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    todayButton?: ButtonPassThroughOptions<CalendarSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    clearButton?: ButtonPassThroughOptions<CalendarSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the aria selected day's DOM element.
     */
    hiddenSelectedDay?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the aria month's DOM element.
     */
    hiddenMonth?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the aria year's DOM element.
     */
    hiddenYear?: CalendarPassThroughOptionType;
    /**
     * Used to pass attributes to the datepicker mask's DOM element.
     */
    datepickerMask?: CalendarPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: CalendarPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface CalendarPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Calendar component.
 */
export interface CalendarState {
    /**
     * Current month as a number.
     */
    currentMonth: number;
    /**
     * Current year as a number.
     */
    currentYear: number;
    /**
     * Current hour as a number.
     */
    currentHour: number;
    /**
     * Current minute as a number.
     */
    currentMinute: number;
    /**
     * Current second as a number.
     */
    currentSecond: number;
    /**
     * Current pm state as a boolean.
     * @defaultValue false
     */
    pm: boolean;
    /**
     * Current focused state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current overlay visible state as a boolean.
     * @defaultValue false
     */
    overlayVisible: boolean;
    /**
     * Current view state as a string.
     * @defaultValue 'date'
     */
    currentView: string;
}

/**
 * Defines current date options in Calendar component.
 */
export interface CalendarDateContext {
    /**
     * Current date.
     */
    day: number;
    /**
     * Current month state.
     */
    month: number;
    /**
     * Current year state.
     */
    year: number;
    /**
     * Current today state of the calendar's day.
     */
    today: boolean;
    /**
     * Selectable state of the day.
     */
    selectable: boolean;
}

/**
 * Defines current options in Calendar component.
 */
export interface CalendarContext {
    /**
     * Current date.
     */
    date: CalendarDateContext;
    /**
     * Current today state of the calendar's day.
     * @defaultValue false
     */
    today: boolean;
    /**
     * Current other month state of the calendar's day.
     */
    otherMonth: boolean;
    /**
     * Current selected state of the calendar's day or month or year.
     * @defaultValue false
     */
    selected: boolean;
    /**
     * Current disabled state of the calendar's day or month or year.
     * @defaultValue false
     */
    disabled: boolean;
    /**
     * Current month state.
     */
    month: CalendarMonthOptions;
    /**
     * Current month index state.
     */
    monthIndex: number;
    /**
     * Current year state.
     */
    year: CalendarYearOptions;
}

/**
 * Defines current month options.
 */
export interface CalendarMonthOptions {
    /**
     * Month value.
     */
    value: string;
    /**
     * Selectable state of the month.
     */
    selectable: boolean;
}

/**
 * Defines current year options.
 */
export interface CalendarYearOptions {
    /**
     * Year value.
     */
    value: number;
    /**
     * Selectable state of the month.
     */
    selectable: boolean;
}

/**
 * Defines valid properties in Calendar component.
 */
export interface CalendarProps {
    /**
     * Value of the component.
     * @defaultValue null
     */
    modelValue?: Date | Array<Date> | Array<Date | null> | undefined | null;
    /**
     * Defines the quantity of the selection.
     * @defaultValue single
     */
    selectionMode?: 'single' | 'multiple' | 'range' | undefined;
    /**
     * Format of the date. Defaults to PrimeVue Locale configuration.
     */
    dateFormat?: string | undefined;
    /**
     * When enabled, displays the calendar as inline instead of an overlay.
     * @defaultValue false
     */
    inline?: boolean | undefined;
    /**
     * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
     * @defaultValue true
     */
    showOtherMonths?: boolean | undefined;
    /**
     * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
     * @defaultValue false
     */
    selectOtherMonths?: boolean | undefined;
    /**
     * When enabled, displays a button with icon next to input.
     * @defaultValue false
     */
    showIcon?: boolean | undefined;
    /**
     * Icon position of the component. This only applies if the showIcon option is set to true.
     * @defaultValue 'button'
     */
    iconDisplay?: 'button' | 'input' | undefined;
    /**
     * Icon of the calendar button.
     * @deprecated since v3.27.0. Use 'dropdownicon' slot.
     */
    icon?: string | undefined;
    /**
     * Icon to show in the previous button.
     * @deprecated since v3.27.0. Use 'previousicon' slot.
     */
    previousIcon?: string | undefined;
    /**
     * Icon to show in the next button.
     * @deprecated since v3.27.0. Use 'nexticon' slot.
     */
    nextIcon?: string | undefined;
    /**
     * Icon to show in each of the increment buttons.
     * @deprecated since v3.27.0. Use 'incrementicon' slot.
     */
    incrementIcon?: string | undefined;
    /**
     * Icon to show in each of the decrement buttons.
     * @deprecated since v3.27.0. Use 'decrementicon' slot.
     */
    decrementIcon?: string | undefined;
    /**
     * Number of months to display.
     * @defaultValue 1
     */
    numberOfMonths?: number | undefined;
    /**
     * An array of options for responsive design.
     */
    responsiveOptions?: CalendarResponsiveOptions[];
    /**
     * The breakpoint to define the maximum width boundary for datepicker panel.
     * @defaultValue 769px
     */
    breakpoint?: string | undefined;
    /**
     * Type of view to display.
     * @defaultValue date
     */
    view?: 'date' | 'month' | 'year' | undefined;
    /**
     * When enabled, calendar overlay is displayed as optimized for touch devices.
     * @defaultValue false
     */
    touchUI?: boolean | undefined;
    /**
     * Whether the month should be rendered as a dropdown instead of text.
     *
     * @deprecated since version 3.9.0, Navigator is always on.
     * @defaultValue false
     */
    monthNavigator?: boolean | undefined;
    /**
     * Whether the year should be rendered as a dropdown instead of text.
     *
     * @deprecated since version 3.9.0, Navigator is always on.
     * @defaultValue false
     */
    yearNavigator?: boolean | undefined;
    /**
     * The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).
     *
     * @deprecated since version 3.9.0, Years are based on decades by default.
     * @defaultValue false
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
     * @defaultValue true
     */
    showOnFocus?: boolean | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to display today and clear buttons at the footer.
     * @defaultValue false
     */
    showButtonBar?: boolean | undefined;
    /**
     * The cutoff year for determining the century for a date.
     * @defaultValue +10
     */
    shortYearCutoff?: string | undefined;
    /**
     * Whether to display timepicker.
     * @defaultValue false
     */
    showTime?: boolean | undefined;
    /**
     * Whether to display timepicker only.
     * @defaultValue false
     */
    timeOnly?: boolean | undefined;
    /**
     * Specifies hour format.
     * @defaultValue 24
     */
    hourFormat?: '12' | '24' | undefined;
    /**
     * Hours to change per step.
     * @defaultValue 1
     */
    stepHour?: number | undefined;
    /**
     * Minutes to change per step.
     * @defaultValue 1
     */
    stepMinute?: number | undefined;
    /**
     * Seconds to change per step.
     * @defaultValue 1
     */
    stepSecond?: number | undefined;
    /**
     * Whether to show the seconds in time picker.
     * @defaultValue false
     */
    showSeconds?: boolean | undefined;
    /**
     * Whether to hide the overlay on date selection when showTime is enabled.
     * @defaultValue false
     */
    hideOnDateTimeSelect?: boolean | undefined;
    /**
     * Whether to hide the overlay on date selection is completed when selectionMode is range.
     * @defaultValue false
     */
    hideOnRangeSelection?: boolean | undefined;
    /**
     * Separator of time selector.
     * @defaultValue :
     */
    timeSeparator?: string | undefined;
    /**
     * When enabled, calendar will show week numbers.
     * @defaultValue false
     */
    showWeek?: boolean | undefined;
    /**
     * Whether to allow entering the date manually via typing.
     * @defaultValue true
     */
    manualInput?: boolean | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @defaultValue false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @defaultValue false
     */
    readonly?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @defaultValue body
     */
    appendTo?: HintedString<'body' | 'self'> | undefined | HTMLElement;
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
    inputStyle?: object | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: string | object | undefined;
    /**
     * Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Inline style of the overlay panel.
     */
    panelStyle?: object | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: string | object | undefined;
    /**
     * Used to pass all properties of the HTMLDivElement to the overlay panel inside the component.
     */
    panelProps?: HTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {CalendarPassThroughOptions}
     */
    pt?: PassThrough<CalendarPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid options of the date slot in Calendar component.
 */
export interface CalendarDateSlotOptions {
    /**
     * Current date.
     */
    day: number;
    /**
     * Current month state.
     */
    month: number;
    /**
     * Current year state.
     */
    year: number;
    /**
     * Current today state of the calendar's day.
     */
    today: boolean;
    /**
     * Selectable state of the day.
     */
    selectable: boolean;
}

/**
 * Defines valid slots in Calendar component.
 */
export interface CalendarSlots {
    /**
     * Custom header template of panel.
     */
    header(): VNode[];
    /**
     * Custom footer template of panel.
     */
    footer(): VNode[];
    /**
     * Custom date template.
     */
    date(scope: {
        /**
         * Value of the component.
         */
        date: CalendarDateSlotOptions;
    }): VNode[];
    /**
     * Custom decade template.
     */
    decade(scope: {
        /**
         * An array containing the start and and year of a decade to display at header of the year picker.
         */
        years: string[] | undefined;
    }): VNode[];
    /**
     * Custom week header label template.
     */
    weekheaderlabel(): VNode[];
    /**
     * Custom week label template.
     * @param {Object} scope - weeklabel slot's params.
     */
    weeklabel(scope: {
        /**
         * Number of the week
         */
        weekNumber: number;
    }): VNode[];
    /**
     * Custom dropdown icon template.
     * @param {Object} scope - dropdown icon slot's params.
     */
    dropdownicon(scope: {
        /**
         * Style class of the dropdown icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom input icon template.
     * @param {Object} scope - input icon slot's params.
     */
    inputicon(scope: {
        /**
         * Style class of the input icon
         */
        class: any;
        /**
         * Click callback
         */
        clickCallback: () => void;
    }): VNode[];
    /**
     * Custom previous icon template.
     * @param {Object} scope - previous icon slot's params.
     */
    previousicon(scope: {
        /**
         * Style class of the previous icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom next icon template.
     * @param {Object} scope - next icon slot's params.
     */
    nexticon(scope: {
        /**
         * Style class of the next icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom increment icon template.
     * @param {Object} scope - increment icon slot's params.
     */
    incrementicon(scope: {
        /**
         * Style class of the increment icon
         */
        class: any;
    }): VNode[];
    /**
     * Custom decrement icon template.
     * @param {Object} scope - decrement icon slot's params.
     */
    decrementicon(scope: {
        /**
         * Style class of the decrement icon
         */
        class: any;
    }): VNode[];
}

/**
 * Defines valid emits in Calendar component.
 */
export interface CalendarEmits {
    /**
     * Emitted when the value changes.
     * @param {string | Date | string[] | Date[] | undefined} value - New value.
     */
    'update:modelValue'(value: Date | Array<Date> | Array<Date | null> | undefined | null): void;
    /**
     * Callback to invoke when input field is being typed.
     * @param {Event} event - Browser event
     */
    input(event: Event): void;
    /**
     * Callback to invoke when a date is selected.
     * @param {Date} value - Selected value.
     */
    'date-select'(value: Date): void;
    /**
     * Callback to invoke when datepicker panel is shown.
     */
    show(): void;
    /**
     * Callback to invoke when datepicker panel is hidden.
     */
    hide(): void;
    /**
     * Callback to invoke when today button is clicked.
     * @param {Date} date - Today as a date instance.
     */
    'today-click'(date: Date): void;
    /**
     * Callback to invoke when clear button is clicked.
     * @param {Event} event - Browser event.
     */
    'clear-click'(event: Event): void;
    /**
     * Callback to invoke when a month is changed using the navigators.
     * @param {CalendarMonthChangeEvent} event - Custom month change event.
     */
    'month-change'(event: CalendarMonthChangeEvent): void;
    /**
     * Callback to invoke when a year is changed using the navigators.
     * @param {CalendarYearChangeEvent} event - Custom year change event.
     */
    'year-change'(event: CalendarYearChangeEvent): void;
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Focus event
     */
    focus(event: Event): void;
    /**
     * Callback to invoke on blur of input field.
     * @param {CalendarBlurEvent} event - Blur event
     */
    blur(event: CalendarBlurEvent): void;
    /**
     * Callback to invoke when a key is pressed.
     */
    keydown(event: Event): void;
}

/**
 * **PrimeVue - Calendar**
 *
 * _Calendar also known as DatePicker, is a form component to work with dates._
 *
 * [Live Demo](https://www.primevue.org/calendar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Calendar extends ClassComponent<CalendarProps, CalendarSlots, CalendarEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Calendar: GlobalComponentConstructor<Calendar>;
    }
}

export default Calendar;
