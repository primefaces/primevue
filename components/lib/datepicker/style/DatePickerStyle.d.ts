/**
 *
 * DatePicker is a form component to work with dates.
 *
 * [Live Demo](https://www.primevue.org/datepicker/)
 *
 * @module datepickerstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum DatePickerClasses {
    root = 'p-datepicker',
    pcInput = 'p-datepicker-input',
    dropdown = 'p-datepicker-dropdown',
    inputIconContainer = 'p-datepicker-input-icon-container',
    inputIcon = 'p-datepicker-input-icon',
    panel = 'p-datepicker-panel',
    calendarContainer = 'p-datepicker-calendar-container',
    calendar = 'p-datepicker-calendar',
    header = 'p-datepicker-header',
    pcPreviousButton = 'p-datepicker-prev-button',
    title = 'p-datepicker-title',
    viewMonth = 'p-datepicker-view-month',
    viewYear = 'p-datepicker-view-year',
    decade = 'p-datepicker-decade',
    pcNextButton = 'p-datepicker-next-button',
    dayView = 'p-datepicker-day-view',
    weekHeader = 'p-datepicker-weekheader',
    weekNumber = 'p-datepicker-weeknumber',
    weekLabelContainer = 'p-disabled',
    weekDayCell = 'p-datepicker-weekday-cell',
    weekDay = 'p-date-picker-weekday',
    dayCell = 'p-datepicker-day-cell',
    day = 'p-datepicker-day',
    monthView = 'p-datepicker-month-view',
    month = 'p-datepicker-month',
    yearView = 'p-datepicker-year-view',
    year = 'p-datepicker-year',
    timePicker = 'p-datepicker-time-picker',
    hourPicker = 'p-datepicker-hour-picker',
    pcIncrementButton = 'p-datepicker-increment-button',
    pcDecrementButton = 'p-datepicker-decrement-button',
    separator = 'p-datepicker-separator',
    minutePicker = 'p-datepicker-minute-picker',
    secondPicker = 'p-datepicker-second-picker',
    ampmPicker = 'p-datepicker-ampm-picker',
    buttonbar = 'p-datepicker-buttonbar',
    pcTodayButton = 'p-datepicker-today-button',
    pcClearButton = 'p-datepicker-clear-button'
}

export interface DatePickerStyle extends BaseStyle {}
