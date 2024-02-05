import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ props, state }) => [
        'p-calendar p-component p-inputwrapper',
        {
            'p-calendar-w-btn': props.showIcon && props.iconDisplay === 'button',
            'p-input-icon-right': props.showIcon && props.iconDisplay === 'input',
            'p-calendar-timeonly': props.timeOnly,
            'p-calendar-disabled': props.disabled,
            'p-invalid': props.invalid,
            'p-inputwrapper-filled': props.modelValue,
            'p-inputwrapper-focus': state.focused,
            'p-focus': state.focused || state.overlayVisible
        }
    ],
    input: ({ props, instance }) => [
        'p-inputtext p-component',
        {
            'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
        }
    ],
    dropdownButton: 'p-datepicker-trigger',
    inputIcon: 'p-datepicker-trigger-icon',
    panel: ({ instance, props, state }) => [
        'p-datepicker p-component',
        {
            'p-datepicker-mobile': instance.queryMatches,
            'p-datepicker-inline': props.inline,
            'p-disabled': props.disabled,
            'p-datepicker-timeonly': props.timeOnly,
            'p-datepicker-multiple-month': props.numberOfMonths > 1,
            'p-datepicker-monthpicker': state.currentView === 'month',
            'p-datepicker-yearpicker': state.currentView === 'year',
            'p-datepicker-touch-ui': props.touchUI,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    groupContainer: 'p-datepicker-group-container',
    group: 'p-datepicker-group',
    header: 'p-datepicker-header',
    previousButton: 'p-datepicker-prev p-link',
    previousIcon: 'p-datepicker-prev-icon',
    title: 'p-datepicker-title',
    monthTitle: 'p-datepicker-month p-link',
    yearTitle: 'p-datepicker-year p-link',
    decadeTitle: 'p-datepicker-decade',
    nextButton: 'p-datepicker-next p-link',
    nextIcon: 'p-datepicker-next-icon',
    container: 'p-datepicker-calendar-container',
    table: 'p-datepicker-calendar',
    weekHeader: 'p-datepicker-weekheader p-disabled',
    weekNumber: 'p-datepicker-weeknumber',
    weekLabelContainer: 'p-disabled',
    day: ({ date }) => [{ 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today }],
    dayLabel: ({ instance, date }) => [{ 'p-highlight': instance.isSelected(date) && date.selectable, 'p-disabled': !date.selectable }],
    monthPicker: 'p-monthpicker',
    month: ({ instance, month, index }) => ['p-monthpicker-month', { 'p-highlight': instance.isMonthSelected(index), 'p-disabled': !month.selectable }],
    yearPicker: 'p-yearpicker',
    year: ({ instance, year }) => ['p-yearpicker-year', { 'p-highlight': instance.isYearSelected(year.value), 'p-disabled': !year.selectable }],
    timePicker: 'p-timepicker',
    hourPicker: 'p-hour-picker',
    incrementButton: 'p-link',
    decrementButton: 'p-link',
    separatorContainer: 'p-separator',
    minutePicker: 'p-minute-picker',
    secondPicker: 'p-second-picker',
    ampmPicker: 'p-ampm-picker',
    buttonbar: 'p-datepicker-buttonbar',
    todayButton: 'p-button-text',
    clearButton: 'p-button-text'
};

export default BaseStyle.extend({
    name: 'calendar',
    classes,
    inlineStyles
});
