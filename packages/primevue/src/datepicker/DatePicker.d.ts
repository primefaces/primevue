/**
 *
 * DatePicker is a form component to work with dates.
 *
 * [Live Demo](https://www.primevue.org/datepicker/)
 *
 * @module datepicker
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonPassThroughOptions, ButtonProps } from 'primevue/button';
import type { InputTextPassThroughOptions } from 'primevue/inputtext';
import type { PassThroughOptions } from 'primevue/passthrough';
import { TransitionProps, VNode } from 'vue';

export declare type DatePickerPassThroughOptionType = DatePickerPassThroughAttributes | ((options: DatePickerPassThroughMethodOptions) => DatePickerPassThroughAttributes | string) | string | null | undefined;

export declare type DatePickerPassThroughTransitionType = TransitionProps | ((options: DatePickerPassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DatePickerPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: DatePickerProps;
    /**
     * Defines current inline state.
     */
    state: DatePickerState;
    /**
     * Defines current options.
     */
    context: DatePickerContext;
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
export interface DatePickerSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: DatePickerProps;
    /**
     * Defines current inline state.
     */
    state: DatePickerState;
}

/**
 * Custom DatePicker responsive options metadata.
 */
export interface DatePickerResponsiveOptions {
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
 * Custom DatePicker month change event.
 * @see {@link DatePickerEmitsOptions['month-change']]}
 */
export interface DatePickerMonthChangeEvent {
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
 * Custom DatePicker year change event.
 * @see {@link DatePickerEmitsOptions['year-change']]}
 */
export interface DatePickerYearChangeEvent {
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
 * Custom DatePicker blur event.
 * @see {@link DatePickerEmitsOptions.blur}
 */
export interface DatePickerBlurEvent {
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
 * @see {@link DatePickerProps.pt}
 */
export interface DatePickerPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the InputText component.
     * @see {@link InputTextPassThroughOptions}
     */
    pcInputText?: InputTextPassThroughOptions<DatePickerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the dropdown's DOM element.
     */
    dropdown?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the dropdown icon's DOM element.
     */
    dropdownIcon?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the input icon container's DOM element.
     */
    inputIconContainer?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the input icon's DOM element.
     */
    inputIcon?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the calendar container's DOM element.
     */
    calendarContainer?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the calendar's DOM element.
     */
    calendar?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the previous button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcPrevButton?: ButtonPassThroughOptions<DatePickerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the view month's DOM element.
     */
    selectMonth?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the view year's DOM element.
     */
    selectYear?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the decade's DOM element.
     */
    decade?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the next button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcNextButton?: ButtonPassThroughOptions<DatePickerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the table's DOM element.
     */
    dayView?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the table header's DOM element.
     */
    tableHeader?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the table header row's DOM element.
     */
    tableHeaderRow?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the week header's DOM element.
     */
    weekHeader?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the week header label's DOM element.
     */
    weekHeaderLabel?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the table header cell's DOM element.
     */
    tableHeaderCell?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the week day cell's DOM element.
     */
    weekDayCell?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the week day's DOM element.
     */
    weekDay?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the table body's DOM element.
     */
    tableBody?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the table body row's DOM element.
     */
    tableBodyRow?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the week number's DOM element.
     */
    weekNumber?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the week label container's DOM element.
     */
    weekLabelContainer?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the day cell's DOM element.
     */
    dayCell?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the day's DOM element.
     */
    day?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the month view's DOM element.
     */
    monthView?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the month's DOM element.
     */
    month?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the year view's DOM element.
     */
    yearView?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the year's DOM element.
     */
    year?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the time picker's DOM element.
     */
    timePicker?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the hour picker's DOM element.
     */
    hourPicker?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the hour's DOM element.
     */
    hour?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the separator container's DOM element.
     */
    separatorContainer?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the minute picker's DOM element.
     */
    minutePicker?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the minute's DOM element.
     */
    minute?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the second picker's DOM element.
     */
    secondPicker?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the second's DOM element.
     */
    second?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the ampm picker's DOM element.
     */
    ampmPicker?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the ampm's DOM element.
     */
    ampm?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the buttonbar's DOM element.
     */
    buttonbar?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the increment button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcIncrementButton?: ButtonPassThroughOptions<DatePickerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the decrement button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcDecrementButton?: ButtonPassThroughOptions<DatePickerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the today button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcTodayButton?: ButtonPassThroughOptions<DatePickerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the clear button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    pcClearButton?: ButtonPassThroughOptions<DatePickerSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the aria selected day's DOM element.
     */
    hiddenSelectedDay?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the aria month's DOM element.
     */
    hiddenMonth?: DatePickerPassThroughOptionType;
    /**
     * Used to pass attributes to the aria year's DOM element.
     */
    hiddenYear?: DatePickerPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: DatePickerPassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DatePickerPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in DatePicker component.
 */
export interface DatePickerState {
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
 * Defines current date options in DatePicker component.
 */
export interface DatePickerDateContext {
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
 * Defines current options in DatePicker component.
 */
export interface DatePickerContext {
    /**
     * Current date.
     */
    date: DatePickerDateContext;
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
    month: DatePickerMonthOptions;
    /**
     * Current month index state.
     */
    monthIndex: number;
    /**
     * Current year state.
     */
    year: DatePickerYearOptions;
}

/**
 * Defines current month options.
 */
export interface DatePickerMonthOptions {
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
export interface DatePickerYearOptions {
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
 * Defines valid properties in DatePicker component.
 */
export interface DatePickerProps {
    /**
     * Value of the component.
     * @defaultValue null
     */
    modelValue?: Date | Array<Date> | Array<Date | null> | undefined | null;
    /**
     * The default value for the input when not controlled by `modelValue`.
     */
    defaultValue?: Date | Array<Date> | Array<Date | null> | undefined | null;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
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
     * When enabled, displays the datepicker as inline instead of an overlay.
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
     * Icon of the datepicker button.
     */
    icon?: string | undefined;
    /**
     * Icon to show in the previous button.
     */
    prevIcon?: string | undefined;
    /**
     * Icon to show in the next button.
     */
    nextIcon?: string | undefined;
    /**
     * Icon to show in each of the increment buttons.
     */
    incrementIcon?: string | undefined;
    /**
     * Icon to show in each of the decrement buttons.
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
    responsiveOptions?: DatePickerResponsiveOptions[];
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
     * When enabled, datepicker will show week numbers.
     * @defaultValue false
     */
    showWeek?: boolean | undefined;
    /**
     * Whether to allow entering the date manually via typing.
     * @defaultValue true
     */
    manualInput?: boolean | undefined;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
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
     * Inline style of the overlay panel.
     */
    panelStyle?: object | undefined;
    /**
     * Style class of the overlay panel.
     */
    panelClass?: string | object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the today button component.
     * @type {ButtonProps}
     * @defaultValue { severity: 'secondary', text: true, size: 'small' }
     */
    todayButtonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the clear button component.
     * @type {ButtonProps}
     * @defaultValue { severity: 'secondary', text: true, size: 'small' }
     */
    clearButtonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the navigator button component.
     * @type {ButtonProps}
     * @defaultValue { severity: 'secondary', text: true }
     */
    navigatorButtonProps?: object | undefined;
    /**
     * Used to pass all properties of the ButtonProps to the timepicker button component.
     * @type {ButtonProps}
     * @defaultValue { severity: 'secondary', text: true }
     */
    timepickerButtonProps?: object | undefined;
    /**
     * Spans 100% width of the container when enabled.
     * @defaultValue null
     */
    fluid?: boolean | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Form control object, typically used for handling validation and form state.
     */
    formControl?: Record<string, any> | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {DatePickerPassThroughOptions}
     */
    pt?: PassThrough<DatePickerPassThroughOptions>;
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
 * Defines valid options of the date slot in DatePicker component.
 */
export interface DatePickerDateSlotOptions {
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
 * Defines valid slots in DatePicker component.
 */
export interface DatePickerSlots {
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
        date: DatePickerDateSlotOptions;
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
    previcon(scope: {
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
    /**
     * Custom dropdown button template.
     */
    dropdownbutton(scope: {
        /**
         * Toggle function.
         * @param {Event} event - Browser event
         */
        toggleCallback: (event: Event) => void;
    }): VNode[];
}

/**
 * Defines valid emits in DatePicker component.
 */
export interface DatePickerEmitsOptions {
    /**
     * Emitted when the value changes.
     * @param {string | Date | string[] | Date[] | undefined} value - New value.
     */
    'update:modelValue'(value: Date | Array<Date> | Array<Date | null> | undefined | null): void;
    /**
     * Emitted when the value changes in uncontrolled mode.
     * @param {string | Date | string[] | Date[] | undefined} value - New value.
     */
    'value-change'(value: Date | Array<Date> | Array<Date | null> | undefined | null): void;
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
     * @param {DatePickerMonthChangeEvent} event - Custom month change event.
     */
    'month-change'(event: DatePickerMonthChangeEvent): void;
    /**
     * Callback to invoke when a year is changed using the navigators.
     * @param {DatePickerYearChangeEvent} event - Custom year change event.
     */
    'year-change'(event: DatePickerYearChangeEvent): void;
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Focus event
     */
    focus(event: Event): void;
    /**
     * Callback to invoke on blur of input field.
     * @param {DatePickerBlurEvent} event - Blur event
     */
    blur(event: DatePickerBlurEvent): void;
    /**
     * Callback to invoke when a key is pressed.
     */
    keydown(event: Event): void;
}

export declare type DatePickerEmits = EmitFn<DatePickerEmitsOptions>;

/**
 * **PrimeVue - DatePicker**
 *
 * _DatePicker  is a form component to work with dates._
 *
 * [Live Demo](https://www.primevue.org/calendar/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const DatePicker: DefineComponent<DatePickerProps, DatePickerSlots, DatePickerEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DatePicker: DefineComponent<DatePickerProps, DatePickerSlots, DatePickerEmits>;
    }
}

export default DatePicker;
