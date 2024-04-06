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
    inputIcon: 'p-datepicker-input-icon',
    panel: ({ instance, props }) => [
        'p-datepicker-panel p-component',
        {
            'p-datepicker-mobile': instance.queryMatches,
            'p-datepicker-panel-inline': props.inline,
            'p-disabled': props.disabled,
            'p-datepicker-timeonly': props.timeOnly,
            'p-datepicker-touch-ui': props.touchUI,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    group: 'p-datepicker-calendar-container',
    calendar: 'p-datepicker-calendar',
    header: 'p-datepicker-header',
    previousButton: 'p-datepicker-prev p-link',
    previousIcon: 'p-datepicker-prev-icon',
    title: 'p-datepicker-title',
    monthTitle: 'p-datepicker-view-month p-link',
    yearTitle: 'p-datepicker-view-year p-link',
    decadeTitle: 'p-datepicker-decade',
    nextButton: 'p-datepicker-next p-link',
    nextIcon: 'p-datepicker-next-icon',
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
    timePicker: 'p-timepicker',
    hourPicker: 'p-hour-picker',
    incrementButton: 'p-link',
    decrementButton: 'p-link',
    separatorContainer: 'p-separator',
    minutePicker: 'p-minute-picker',
    secondPicker: 'p-second-picker',
    ampmPicker: 'p-ampm-picker',
    buttonbar: 'p-datepicker-buttonbar',
    todayButton: 'p-buttonbar-button',
    clearButton: 'p-buttonbar-button'
};

export default BaseStyle.extend({
    name: 'calendar',
    classes,
    inlineStyles
});
