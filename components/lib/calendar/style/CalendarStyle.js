import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ props, state }) => [
        'p-datepicker p-component p-inputwrapper',
        {
            'p-invalid': props.invalid,
            'p-inputwrapper-filled': props.modelValue,
            'p-inputwrapper-focus': state.focused,
            'p-focus': state.focused || state.overlayVisible
        }
    ],
    input: 'p-datepicker-input',
    dropdownButton: 'p-datepicker-dropdown',
    inputIconContainer: 'p-datepicker-input-icon-container',
    inputIcon: 'p-datepicker-input-icon',
    panel: ({ instance, props }) => [
        'p-datepicker-panel p-component',
        {
            'p-datepicker-panel-inline': props.inline,
            'p-disabled': props.disabled,
            'p-datepicker-timeonly': props.timeOnly,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    group: 'p-datepicker-calendar-container',
    calendar: 'p-datepicker-calendar',
    header: 'p-datepicker-header',
    previousButton: 'p-datepicker-prev-button',
    title: 'p-datepicker-title',
    monthTitle: 'p-datepicker-view-month p-link',
    yearTitle: 'p-datepicker-view-year p-link',
    decadeTitle: 'p-datepicker-decade',
    nextButton: 'p-datepicker-next-button',
    grid: 'p-datepicker-day-view',
    weekHeader: 'p-datepicker-weekheader p-disabled',
    weekNumber: 'p-datepicker-weeknumber',
    weekLabelContainer: 'p-disabled',
    weekDay: 'p-datepicker-weekday-cell',
    weekDayLabel: 'p-date-picker-weekday',
    day: ({ date }) => ['p-datepicker-day-cell', { 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today }],
    dayLabel: ({ instance, props, date }) => ['p-datepicker-day', { 'p-datepicker-day-selected': instance.isSelected(date) && date.selectable, 'p-disabled': props.disabled || !date.selectable }],
    monthPicker: 'p-datepicker-month-view',
    month: ({ instance, props, month, index }) => ['p-datepicker-month', { 'p-datepicker-month-selected': instance.isMonthSelected(index), 'p-disabled': props.disabled || !month.selectable }],
    yearPicker: 'p-datepicker-year-view',
    year: ({ instance, props, year }) => ['p-datepicker-year', { 'p-datepicker-year-selected': instance.isYearSelected(year.value), 'p-disabled': props.disabled || !year.selectable }],
    timePicker: 'p-datepicker-time-picker',
    hourPicker: 'p-datepicker-hour-picker',
    incrementButton: 'p-datepicker-increment-button',
    decrementButton: 'p-datepicker-decrement-button',
    separatorContainer: 'p-datepicker-separator',
    minutePicker: 'p-minute-picker',
    secondPicker: 'p-second-picker',
    ampmPicker: 'p-ampm-picker',
    buttonbar: 'p-datepicker-buttonbar',
    todayButton: 'p-datepicker-today-button',
    clearButton: 'p-datepicker-clear-button'
};

export default BaseStyle.extend({
    name: 'calendar',
    classes,
    inlineStyles
});
