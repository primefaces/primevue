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
    width: ${dt('datepicker.dropdown.width')};
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
    background: ${dt('datepicker.dropdown.background')};
    border: 1px solid ${dt('datepicker.dropdown.border.color')};
    border-left: 0 none;
    background: ${dt('datepicker.dropdown.background')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-datepicker-dropdown:not(:disabled):hover {
    background: ${dt('datepicker.dropdown.hover.background')};
    border-color: ${dt('datepicker.dropdown.hover.border.color')};
    background: ${dt('datepicker.dropdown.hover.background')};
}

.p-datepicker-dropdown:not(:disabled):active {
    background: ${dt('datepicker.dropdown.active.background')};
    border-color: ${dt('datepicker.dropdown.active.border.color')};
    background: ${dt('datepicker.dropdown.active.background')};
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
    background: ${dt('datepicker.background')};
    color: ${dt('datepicker.color')};
    border: 1px solid ${dt('datepicker.border.color')};
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
    background: ${dt('datepicker.header.background')};
    color: ${dt('datepicker.header.color')};
    border-bottom: 1px solid ${dt('datepicker.header.border.color')};
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
    color: ${dt('datepicker.month.picker.color')};
}

.p-datepicker-view-year {
    margin-right: 0.5rem;
    color: ${dt('datepicker.year.picker.color')};
}

.p-datepicker-view-month:enabled:hover {
    background: ${dt('datepicker.month.picker.hover.background')};
    color: ${dt('datepicker.month.picker.hover.color')};
}

.p-datepicker-view-year:enabled:hover {
    background: ${dt('datepicker.year.picker.hover.background')};
    color: ${dt('datepicker.year.picker.hover.color')};
}

.p-datepicker-datepicker-container {
    display: flex;
}

.p-datepicker-datepicker-container .p-datepicker-datepicker {
    flex: 1 1 auto;
    border-left: 1px solid ${dt('datepicker.group.border.color')};
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-top: 0;
    padding-bottom: 0;
}

.p-datepicker-datepicker-container .p-datepicker-datepicker:first-child {
    padding-left: 0;
    border-left: 0 none;
}

.p-datepicker-datepicker-container .p-datepicker-datepicker:last-child {
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
    color: ${dt('datepicker.date.color')};
}

.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
    background: ${dt('datepicker.date.hover.background')};
    color: ${dt('datepicker.date.hover.color')};
}

.p-datepicker-day:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
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
    color: ${dt('datepicker.month.color')};
}

.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
    color:  ${dt('datepicker.month.hover.color')};
    background: ${dt('datepicker.month.hover.background')};
}

.p-datepicker-month-selected {
    color: ${dt('datepicker.month.selected.color')};
    background: ${dt('datepicker.month.selected.background')};
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
    color: ${dt('datepicker.year.color')};
}

.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
    color:  ${dt('datepicker.year.hover.color')};
    background: ${dt('datepicker.year.hover.background')};
}

.p-datepicker-year-selected {
    color: ${dt('datepicker.year.selected.color')};
    background: ${dt('datepicker.year.selected.background')};
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
    border-top: 1px solid ${dt('datepicker.buttonbar.border.color')};
}

.p-datepicker-buttonbar .p-button {
    width: auto;
}

.p-datepicker-time-picker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${dt('datepicker.timepicker.border.color')};
    padding: 0;
}

.p-datepicker-datepicker-group + .p-timepicker {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
}

.p-datepicker-time-picker > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0.5rem;
}

.p-datepicker-time-picker button:last-child {
    margin-top: 0.2em;
}

.p-datepicker-time-picker span {
    font-size: 1rem;
}

.p-datepicker-timeonly .p-datepicker-time-picker {
    border-top: 0 none;
}
`
};
