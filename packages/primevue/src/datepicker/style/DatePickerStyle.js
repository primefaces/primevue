import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-datepicker {
    display: inline-flex;
    max-width: 100%;
}

.p-datepicker-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-datepicker-dropdown {
    cursor: pointer;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt('datepicker.dropdown.width')};
    border-top-right-radius: ${dt('datepicker.dropdown.border.radius')};
    border-bottom-right-radius: ${dt('datepicker.dropdown.border.radius')};
    background: ${dt('datepicker.dropdown.background')};
    border: 1px solid ${dt('datepicker.dropdown.border.color')};
    border-left: 0 none;
    color: ${dt('datepicker.dropdown.color')};
    transition: background ${dt('datepicker.transition.duration')}, color ${dt('datepicker.transition.duration')}, border-color ${dt('datepicker.transition.duration')}, outline-color ${dt('datepicker.transition.duration')};
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: ${dt('datepicker.dropdown.hover.background')};
    border-color: ${dt('datepicker.dropdown.hover.border.color')};
    color: ${dt('datepicker.dropdown.hover.color')};
}

.p-datepicker-dropdown:not(:disabled):active {
    background: ${dt('datepicker.dropdown.active.background')};
    border-color: ${dt('datepicker.dropdown.active.border.color')};
    color: ${dt('datepicker.dropdown.active.color')};
}

.p-datepicker-dropdown:focus-visible {
    box-shadow: ${dt('datepicker.dropdown.focus.ring.shadow')};
    outline: ${dt('datepicker.dropdown.focus.ring.width')} ${dt('datepicker.dropdown.focus.ring.style')} ${dt('datepicker.dropdown.focus.ring.color')};
    outline-offset: ${dt('datepicker.dropdown.focus.ring.offset')};
}

.p-datepicker:has(.p-datepicker-input-icon-container) {
    position: relative;
}

.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
    padding-right: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
}

.p-datepicker-input-icon-container {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: ${dt('form.field.padding.x')};
    margin-top: calc(-1 * (${dt('icon.size')} / 2));
    color: ${dt('datepicker.input.icon.color')};
}

.p-fluid .p-datepicker {
    display: flex;
}

.p-fluid .p-datepicker-input {
    width: 1%;
}

.p-datepicker .p-datepicker-panel {
    min-width: 100%;
}

.p-datepicker-panel {
    width: auto;
    padding: ${dt('datepicker.panel.padding')};
    background: ${dt('datepicker.panel.background')};
    color: ${dt('datepicker.panel.color')};
    border: 1px solid ${dt('datepicker.panel.border.color')};
    border-radius: ${dt('datepicker.panel.border.radius')};
    box-shadow: ${dt('datepicker.panel.shadow')};
}

.p-datepicker-panel-inline {
    display: inline-block;
    overflow-x: auto;
    box-shadow: none;
}

.p-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${dt('datepicker.header.padding')};
    font-weight: ${dt('datepicker.header.font.weight')};
    background: ${dt('datepicker.header.background')};
    color: ${dt('datepicker.header.color')};
    border-bottom: 1px solid ${dt('datepicker.header.border.color')};
}

.p-datepicker-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${dt('datepicker.title.gap')};
    font-weight: ${dt('datepicker.title.font.weight')};
}

.p-datepicker-select-year,
.p-datepicker-select-month {
    border: none;
    background: transparent;
    margin: 0;
    cursor: pointer;
    font-weight: inherit;
    transition: background ${dt('datepicker.transition.duration')}, color ${dt('datepicker.transition.duration')}, border-color ${dt('datepicker.transition.duration')}, outline-color ${dt('datepicker.transition.duration')}, box-shadow ${dt(
        'datepicker.transition.duration'
    )};
}

.p-datepicker-select-month {
    padding: ${dt('datepicker.view.month.padding')};
    color: ${dt('datepicker.view.month.color')};
    border-radius: ${dt('datepicker.view.month.border.radius')};
}

.p-datepicker-select-year {
    padding: ${dt('datepicker.view.year.padding')};
    color: ${dt('datepicker.view.year.color')};
    border-radius: ${dt('datepicker.view.year.border.radius')};
}

.p-datepicker-select-month:enabled:hover {
    background: ${dt('datepicker.view.month.hover.background')};
    color: ${dt('datepicker.view.month.hover.color')};
}

.p-datepicker-select-year:enabled:hover {
    background: ${dt('datepicker.view.year.hover.background')};
    color: ${dt('datepicker.view.year.hover.color')};
}

.p-datepicker-calendar-container {
    display: flex;
}

.p-datepicker-calendar-container .p-datepicker-calendar {
    flex: 1 1 auto;
    border-left: 1px solid ${dt('datepicker.group.border.color')};
    padding-right: ${dt('datepicker.group.gap')};
    padding-left: ${dt('datepicker.group.gap')};
}

.p-datepicker-calendar-container .p-datepicker-calendar:first-child {
    padding-left: 0;
    border-left: 0 none;
}

.p-datepicker-calendar-container .p-datepicker-calendar:last-child {
    padding-right: 0;
}

.p-datepicker-day-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: ${dt('datepicker.day.view.margin')};
}

.p-datepicker-weekday-cell {
    padding: ${dt('datepicker.week.day.padding')};
}

.p-datepicker-weekday {
    font-weight: ${dt('datepicker.week.day.font.weight')};
    color: ${dt('datepicker.week.day.color')};
}

.p-datepicker-day-cell {
    padding: ${dt('datepicker.date.padding')};
}

.p-datepicker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: ${dt('datepicker.date.width')};
    height: ${dt('datepicker.date.height')};
    border-radius: ${dt('datepicker.date.border.radius')};
    transition: background ${dt('datepicker.transition.duration')}, color ${dt('datepicker.transition.duration')}, border-color ${dt('datepicker.transition.duration')},
        box-shadow ${dt('datepicker.transition.duration')}, outline-color ${dt('datepicker.transition.duration')};
    border: 1px solid transparent;
    outline-color: transparent;
    color: ${dt('datepicker.date.color')};
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: ${dt('datepicker.date.hover.background')};
    color: ${dt('datepicker.date.hover.color')};
}

.p-datepicker-day:focus-visible {
    box-shadow: ${dt('datepicker.date.focus.ring.shadow')};
    outline: ${dt('datepicker.date.focus.ring.width')} ${dt('datepicker.date.focus.ring.style')} ${dt('datepicker.date.focus.ring.color')};
    outline-offset: ${dt('datepicker.date.focus.ring.offset')};
}

.p-datepicker-day-selected {
    background: ${dt('datepicker.date.selected.background')};
    color: ${dt('datepicker.date.selected.color')};
}

.p-datepicker-today > .p-datepicker-day {
    background: ${dt('datepicker.today.background')};
    color: ${dt('datepicker.today.color')};
}

.p-datepicker-today > .p-datepicker-day-selected {
    background: ${dt('datepicker.date.selected.background')};
    color: ${dt('datepicker.date.selected.color')};
}

.p-datepicker-weeknumber {
    text-align: center
}

.p-datepicker-month-view {
    margin: ${dt('datepicker.month.view.margin')};
}

.p-datepicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${dt('datepicker.date.padding')};
    transition: background ${dt('datepicker.transition.duration')}, color ${dt('datepicker.transition.duration')}, border-color ${dt('datepicker.transition.duration')}, box-shadow ${dt('datepicker.transition.duration')}, outline-color ${dt(
        'datepicker.transition.duration'
    )};
    border-radius: ${dt('datepicker.month.border.radius')};
    outline-color: transparent;
    color: ${dt('datepicker.date.color')};
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color:  ${dt('datepicker.date.hover.color')};
    background: ${dt('datepicker.date.hover.background')};
}

.p-datepicker-month-selected {
    color: ${dt('datepicker.date.selected.color')};
    background: ${dt('datepicker.date.selected.background')};
}

.p-datepicker-month:not(.p-disabled):focus-visible {
    box-shadow: ${dt('datepicker.date.focus.ring.shadow')};
    outline: ${dt('datepicker.date.focus.ring.width')} ${dt('datepicker.date.focus.ring.style')} ${dt('datepicker.date.focus.ring.color')};
    outline-offset: ${dt('datepicker.date.focus.ring.offset')};
}

.p-datepicker-year-view {
    margin: ${dt('datepicker.year.view.margin')};
}

.p-datepicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: ${dt('datepicker.date.padding')};
    transition: background ${dt('datepicker.transition.duration')}, color ${dt('datepicker.transition.duration')}, border-color ${dt('datepicker.transition.duration')}, box-shadow ${dt('datepicker.transition.duration')}, outline-color ${dt(
        'datepicker.transition.duration'
    )};
    border-radius: ${dt('datepicker.year.border.radius')};
    outline-color: transparent;
    color: ${dt('datepicker.date.color')};
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color: ${dt('datepicker.date.hover.color')};
    background: ${dt('datepicker.date.hover.background')};
}

.p-datepicker-year-selected {
    color: ${dt('datepicker.date.selected.color')};
    background: ${dt('datepicker.date.selected.background')};
}

.p-datepicker-year:not(.p-disabled):focus-visible {
    box-shadow: ${dt('datepicker.date.focus.ring.shadow')};
    outline: ${dt('datepicker.date.focus.ring.width')} ${dt('datepicker.date.focus.ring.style')} ${dt('datepicker.date.focus.ring.color')};
    outline-offset: ${dt('datepicker.date.focus.ring.offset')};
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  ${dt('datepicker.buttonbar.padding')};
    border-top: 1px solid ${dt('datepicker.buttonbar.border.color')};
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-datepicker-time-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${dt('datepicker.time.picker.border.color')};
    padding: 0;
    gap: ${dt('datepicker.time.picker.gap')};
}

.p-datepicker-calendar-container + .p-datepicker-time-picker {
    padding: ${dt('datepicker.time.picker.padding')};
}

.p-datepicker-time-picker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${dt('datepicker.time.picker.button.gap')};
}

.p-datepicker-time-picker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-datepicker-time-picker {
    border-top: 0 none;
}
`;

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
    pcInput: 'p-datepicker-input',
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
    day: ({ instance, props, date }) => {
        let selectedDayClass = '';

        if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
            selectedDayClass = date.day === props.modelValue[0].getDate() || date.day === props.modelValue[1].getDate() ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
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
    theme,
    classes,
    inlineStyles
});
