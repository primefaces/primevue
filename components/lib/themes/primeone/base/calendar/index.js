export default {
    css: ({ dt }) => `
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
    width: ${dt('calendar.dropdown.width')};
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
    background: ${dt('calendar.dropdown.background')};
    border: 1px solid ${dt('calendar.dropdown.border.color')};
    border-left: 0 none;
    background: ${dt('calendar.dropdown.background')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: ${dt('calendar.dropdown.hover.background')};
    border-color: ${dt('calendar.dropdown.hover.border.color')};
    background: ${dt('calendar.dropdown.hover.background')};
}

.p-datepicker-dropdown:not(:disabled):active {
    background: ${dt('calendar.dropdown.active.background')};
    border-color: ${dt('calendar.dropdown.active.border.color')};
    background: ${dt('calendar.dropdown.active.background')};
}

.p-datepicker-dropdown:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-datepicker:has(.p-datepicker-input-icon) {
    position: relative;
}

.p-datepicker:has(.p-datepicker-input-icon) .p-datepicker-input {
    padding-right: 2.5rem;
}

.p-datepicker-input-icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: .75rem;
    margin-top: -.5rem;
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
    padding: 0.75rem;
    background: ${dt('calendar.background')};
    color: ${dt('calendar.color')};
    border: 1px solid ${dt('calendar.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
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
    padding: 0 0 0.5rem 0;
    font-weight: 500;
    background: ${dt('calendar.header.background')};
    color: ${dt('calendar.header.color')};
    border-bottom: 1px solid ${dt('calendar.header.border.color')};
}

.p-datepicker-title {
    margin: 0 auto;
    line-height: 1.75rem;
}

.p-datepicker-view-year,
.p-datepicker-view-month {
    font-weight: 500;
    padding: 0.25rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-datepicker-view-month {
    margin-right: 0.5rem;
    color: ${dt('calendar.month.picker.color')};
}

.p-datepicker-view-year {
    margin-right: 0.5rem;
    color: ${dt('calendar.year.picker.color')};
}

.p-datepicker-view-month:enabled:hover {
    background: ${dt('calendar.month.picker.hover.background')};
    color: ${dt('calendar.month.picker.hover.color')};
}

.p-datepicker-view-year:enabled:hover {
    background: ${dt('calendar.year.picker.hover.background')};
    color: ${dt('calendar.year.picker.hover.color')};
}

.p-datepicker-calendar-container {
    display: flex;
}

.p-datepicker-calendar-container .p-datepicker-calendar {
    flex: 1 1 auto;
    border-left: 1px solid ${dt('calendar.group.border.color')};
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-top: 0;
    padding-bottom: 0;
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
    margin: 0.5rem 0 0 0;
}

.p-datepicker-weekday-cell {
    padding: 0.25rem;
}

.p-datepicker-weekday {
    font-weight: 500;
}

.p-datepicker-day-cell {
    padding: 0.25rem;
}

.p-datepicker-day {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border: 1px solid transparent;
    outline-color: transparent;
    color: ${dt('calendar.date.color')};
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: ${dt('calendar.date.hover.background')};
    color: ${dt('calendar.date.hover.color')};
}

.p-datepicker-day:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-datepicker-day-selected {
    background: ${dt('calendar.date.selected.background')};
    color: ${dt('calendar.date.selected.color')};
}

.p-datepicker-today > .p-datepicker-day {
    background: ${dt('calendar.today.background')};
    color: ${dt('calendar.today.color')};
}

.p-datepicker-today > .p-datepicker-day-selected {
    background: ${dt('calendar.date.selected.background')};
    color: ${dt('calendar.date.selected.color')};
}

.p-datepicker-month-view {
    margin: 0.5rem 0 0 0;
}

.p-datepicker-month {
    width: 33.3%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.25rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    color: ${dt('calendar.month.color')};
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color:  ${dt('calendar.month.hover.color')};
    background: ${dt('calendar.month.hover.background')};
}

.p-datepicker-month-selected {
    color: ${dt('calendar.month.selected.color')};
    background: ${dt('calendar.month.selected.background')};
}

.p-datepicker-month:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} solid ${dt('focus.ring.color')};
    outline-offset: 0;
}

.p-datepicker-year-view {
    margin: 0.5rem 0 0 0;
}

.p-datepicker-year {
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.25rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    color: ${dt('calendar.year.color')};
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color:  ${dt('calendar.year.hover.color')};
    background: ${dt('calendar.year.hover.background')};
}

.p-datepicker-year-selected {
    color: ${dt('calendar.year.selected.color')};
    background: ${dt('calendar.year.selected.background')};
}

.p-datepicker-year:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} solid ${dt('focus.ring.color')};
    outline-offset: 0;
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 0 0;
    border-top: 1px solid ${dt('calendar.buttonbar.border.color')};
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-timepicker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${dt('calendar.timepicker.border.color')};
    padding: 0;
}

.p-datepicker-calendar-group + .p-timepicker {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
}

.p-timepicker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0.5rem;
}

.p-timepicker button:last-child {
    margin-top: 0.2em;
}

.p-timepicker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
}
`
};
