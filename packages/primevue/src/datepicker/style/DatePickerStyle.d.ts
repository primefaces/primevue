/**
 *
 * DatePicker is a form component to work with dates.
 *
 * [Live Demo](https://www.primevue.org/datepicker/)
 *
 * @module datepickerstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum DatePickerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-datepicker',
    /**
     * Class name of the input element
     */
    pcInput = 'p-datepicker-input',
    /**
     * Class name of the dropdown element
     */
    dropdown = 'p-datepicker-dropdown',
    /**
     * Class name of the input icon container element
     */
    inputIconContainer = 'p-datepicker-input-icon-container',
    /**
     * Class name of the input icon element
     */
    inputIcon = 'p-datepicker-input-icon',
    /**
     * Class name of the clear icon element
     */
    clearIcon = 'p-datepicker-clear-icon',
    /**
     * Class name of the panel element
     */
    panel = 'p-datepicker-panel',
    /**
     * Class name of the calendar container element
     */
    calendarContainer = 'p-datepicker-calendar-container',
    /**
     * Class name of the calendar element
     */
    calendar = 'p-datepicker-calendar',
    /**
     * Class name of the header element
     */
    header = 'p-datepicker-header',
    /**
     * Class name of the previous button element
     */
    pcPrevButton = 'p-datepicker-prev-button',
    /**
     * Class name of the title element
     */
    title = 'p-datepicker-title',
    /**
     * Class name of the select month element
     */
    selectMonth = 'p-datepicker-select-month',
    /**
     * Class name of the select year element
     */
    selectYear = 'p-datepicker-select-year',
    /**
     * Class name of the decade element
     */
    decade = 'p-datepicker-decade',
    /**
     * Class name of the next button element
     */
    pcNextButton = 'p-datepicker-next-button',
    /**
     * Class name of the day view element
     */
    dayView = 'p-datepicker-day-view',
    /**
     * Class name of the week header element
     */
    weekHeader = 'p-datepicker-weekheader',
    /**
     * Class name of the week number element
     */
    weekNumber = 'p-datepicker-weeknumber',
    /**
     * Class name of the week label container element
     */
    weekLabelContainer = 'p-datepicker-weeklabel-container',
    /**
     * Class name of the week day cell element
     */
    weekDayCell = 'p-datepicker-weekday-cell',
    /**
     * Class name of the week day element
     */
    weekDay = 'p-datepicker-weekday',
    /**
     * Class name of the day cell element
     */
    dayCell = 'p-datepicker-day-cell',
    /**
     * Class name of the day element
     */
    day = 'p-datepicker-day',
    /**
     * Class name of the month view element
     */
    monthView = 'p-datepicker-month-view',
    /**
     * Class name of the month element
     */
    month = 'p-datepicker-month',
    /**
     * Class name of the year view element
     */
    yearView = 'p-datepicker-year-view',
    /**
     * Class name of the year element
     */
    year = 'p-datepicker-year',
    /**
     * Class name of the time picker element
     */
    timePicker = 'p-datepicker-time-picker',
    /**
     * Class name of the hour picker element
     */
    hourPicker = 'p-datepicker-hour-picker',
    /**
     * Class name of the increment button element
     */
    pcIncrementButton = 'p-datepicker-increment-button',
    /**
     * Class name of the decrement button element
     */
    pcDecrementButton = 'p-datepicker-decrement-button',
    /**
     * Class name of the separator element
     */
    separator = 'p-datepicker-separator',
    /**
     * Class name of the minute picker element
     */
    minutePicker = 'p-datepicker-minute-picker',
    /**
     * Class name of the second picker element
     */
    secondPicker = 'p-datepicker-second-picker',
    /**
     * Class name of the ampm picker element
     */
    ampmPicker = 'p-datepicker-ampm-picker',
    /**
     * Class name of the buttonbar element
     */
    buttonbar = 'p-datepicker-buttonbar',
    /**
     * Class name of the today button element
     */
    pcTodayButton = 'p-datepicker-today-button',
    /**
     * Class name of the clear button element
     */
    pcClearButton = 'p-datepicker-clear-button'
}

export interface DatePickerStyle extends BaseStyle {}
