import { style } from '@primeuix/styles/datepicker';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' || props.showClear ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, state }) => [
        'p-datepicker p-component p-inputwrapper',
        {
            'p-invalid': instance.$invalid,
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': state.focused || state.overlayVisible,
            'p-focus': state.focused || state.overlayVisible,
            'p-datepicker-fluid': instance.$fluid
        }
    ],
    pcInputText: 'p-datepicker-input',
    clearIcon: 'p-datepicker-clear-icon',
    dropdown: 'p-datepicker-dropdown',
    inputIconContainer: 'p-datepicker-input-icon-container',
    inputIcon: 'p-datepicker-input-icon',
    panel: ({ props }) => [
        'p-datepicker-panel p-component',
        {
            'p-datepicker-panel-inline': props.inline,
            'p-disabled': props.disabled,
            'p-datepicker-timeonly': props.timeOnly
        }
    ],
    calendarContainer: 'p-datepicker-calendar-container',
    calendar: 'p-datepicker-calendar',
    header: 'p-datepicker-header',
    pcPrevButton: 'p-datepicker-prev-button',
    title: 'p-datepicker-title',
    selectMonth: 'p-datepicker-select-month',
    selectYear: 'p-datepicker-select-year',
    decade: 'p-datepicker-decade',
    pcNextButton: 'p-datepicker-next-button',
    dayView: 'p-datepicker-day-view',
    weekHeader: 'p-datepicker-weekheader p-disabled',
    weekNumber: 'p-datepicker-weeknumber',
    weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
    weekDayCell: 'p-datepicker-weekday-cell',
    weekDay: 'p-datepicker-weekday',
    dayCell: ({ date }) => [
        'p-datepicker-day-cell',
        {
            'p-datepicker-other-month': date.otherMonth,
            'p-datepicker-today': date.today
        }
    ],
    day: ({ instance, props, state, date }) => {
        let selectedDayClass = '';

        if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
            const start = typeof state.rawValue[0] === 'string' ? instance.parseValue(state.rawValue[0])[0] : state.rawValue[0];
            const end = typeof state.rawValue[1] === 'string' ? instance.parseValue(state.rawValue[1])[0] : state.rawValue[1];

            selectedDayClass = instance.isDateEquals(start, date) || instance.isDateEquals(end, date) ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
        }

        return [
            'p-datepicker-day',
            {
                'p-datepicker-day-selected': !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
                'p-disabled': props.disabled || !date.selectable
            },
            selectedDayClass
        ];
    },
    monthView: 'p-datepicker-month-view',
    month: ({ instance, props, month, index }) => [
        'p-datepicker-month',
        {
            'p-datepicker-month-selected': instance.isMonthSelected(index),
            'p-disabled': props.disabled || !month.selectable
        }
    ],
    yearView: 'p-datepicker-year-view',
    year: ({ instance, props, year }) => [
        'p-datepicker-year',
        {
            'p-datepicker-year-selected': instance.isYearSelected(year.value),
            'p-disabled': props.disabled || !year.selectable
        }
    ],
    timePicker: 'p-datepicker-time-picker',
    hourPicker: 'p-datepicker-hour-picker',
    pcIncrementButton: 'p-datepicker-increment-button',
    pcDecrementButton: 'p-datepicker-decrement-button',
    separator: 'p-datepicker-separator',
    minutePicker: 'p-datepicker-minute-picker',
    secondPicker: 'p-datepicker-second-picker',
    ampmPicker: 'p-datepicker-ampm-picker',
    buttonbar: 'p-datepicker-buttonbar',
    pcTodayButton: 'p-datepicker-today-button',
    pcClearButton: 'p-datepicker-clear-button'
};

export default BaseStyle.extend({
    name: 'datepicker',
    style,
    classes,
    inlineStyles
});
