import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-calendar {
        display: inline-flex;
        max-width: 100%;
    }

    .p-calendar .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-calendar-w-btn .p-inputtext {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-calendar-w-btn .p-datepicker-trigger {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-calendar .p-datepicker-trigger-icon {
        cursor: pointer;
    }

    /* Fluid */
    .p-fluid .p-calendar {
        display: flex;
    }

    .p-fluid .p-calendar .p-inputtext {
        width: 1%;
    }

    /* Datepicker */
    .p-calendar .p-datepicker {
        min-width: 100%;
    }

    .p-datepicker {
        width: auto;
    }

    .p-datepicker-inline {
        display: inline-block;
        overflow-x: auto;
    }

    /* Header */
    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datepicker-header .p-datepicker-title {
        margin: 0 auto;
    }

    .p-datepicker-prev,
    .p-datepicker-next {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Multiple Month DatePicker */
    .p-datepicker-multiple-month .p-datepicker-group-container {
        display: flex;
    }

    .p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {
        flex: 1 1 auto;
    }

    /* DatePicker Table */
    .p-datepicker table {
        width: 100%;
        border-collapse: collapse;
    }

    .p-datepicker td > span {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    /* Month Picker */
    .p-monthpicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /* Year Picker */
    .p-yearpicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /*  Button Bar */
    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Time Picker */
    .p-timepicker {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-timepicker button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-timepicker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    /* Touch UI */
    .p-datepicker-touch-ui,
    .p-calendar .p-datepicker-touch-ui {
        min-width: 80vw;
    }
}
`;

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
            'p-inputwrapper-filled': props.modelValue,
            'p-inputwrapper-focus': state.focused,
            'p-focus': state.focused || state.overlayVisible
        }
    ],
    input: 'p-inputtext p-component',
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
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
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
    css,
    classes,
    inlineStyles
});
