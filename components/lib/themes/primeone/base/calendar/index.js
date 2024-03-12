export default {
    css: ({ dt }) => `
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

.p-fluid .p-calendar {
    display: flex;
}

.p-fluid .p-calendar .p-inputtext {
    width: 1%;
}

.p-calendar .p-datepicker {
    min-width: 100%;
}

.p-datepicker {
    width: auto;
    padding: 0.75rem;
    background: var(--p-calendar-background);
    color: var(--p-calendar-text-color);
    border: 1px solid var(--p-calendar-border-color);
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-datepicker-inline {
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
    background: var(--p-calendar-header-background);
    color: var(--p-calendar-header-text-color);
    border-bottom: 1px solid var(--p-calendar-header-border-color);
}

.p-datepicker-title {
    margin: 0 auto;
    line-height: 1.75rem;
}

.p-datepicker-prev,
.p-datepicker-next {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: var(--p-calendar-navigator-color);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-datepicker-prev:enabled:hover,
.p-datepicker-next:enabled:hover {
    color: var(--p-calendar-navigator-color-hover);
    background: var(--p-calendar-navigator-background-hover);
}

.p-datepicker-prev:focus-visible,
.p-datepicker-next:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-datepicker-year,
.p-datepicker-month {
    font-weight: 500;
    padding: 0.25rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-datepicker-month {
    margin-right: 0.5rem;
    color: var(--p-calendar-month-picker-text-color);
}

.p-datepicker-year {
    margin-right: 0.5rem;
    color: var(--p-calendar-year-picker-text-color);
}

.p-datepicker-month:enabled:hover {
    color: var(--p-calendar-month-picker-text-color-hover);
    background: var(--p-calendar-month-picker-background-hover);
}

.p-datepicker-year:enabled:hover {
    color: var(--p-calendar-year-picker-text-color-hover);
    background: var(--p-calendar-year-picker-background-hover);
}

.p-datepicker-multiple-month .p-datepicker-group-container {
    display: flex;
}

.p-datepicker-multiple-month .p-datepicker-group {
    flex: 1 1 auto;
    border-left: 1px solid var(--p-calendar-group-border-color);
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-top: 0;
    padding-bottom: 0;
}

.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
    border-left: 0 none;
}

.p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
}

.p-datepicker table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
}

.p-datepicker table th {
    padding: 0.25rem;
    font-weight: 500;
}

.p-datepicker table th > span {
    width: 2rem;
    height: 2rem;
}

.p-datepicker table td {
    padding: 0.25rem;
}

.p-datepicker td > span {
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
    color: var(--p-calendar-date-text-color);
}

.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: var(--p-calendar-date-background-hover);
    color: var(--p-calendar-date-text-color-hover);
}

.p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-datepicker table td > span.p-highlight {
    background: var(--p-calendar-date-background-highlight);
    color: var(--p-calendar-date-text-color-highlight);
}

.p-datepicker table td.p-datepicker-today > span {
    background: var(--p-calendar-today-background);
    color: var(--p-calendar-today-text-color);
}

.p-datepicker table td.p-datepicker-today > span.p-highlight {
    background: var(--p-calendar-date-background-highlight);
    color: var(--p-calendar-date-text-color-highlight);
}

.p-monthpicker {
    margin: 0.5rem 0 0 0;
}

.p-monthpicker-month {
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
    color: var(--p-calendar-month-text-color);
}

.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-calendar-month-background-hover);
    color: var(--p-calendar-month-text-color-hover);
}

.p-monthpicker-month.p-highlight {
    background: var(--p-calendar-month-background-selected);
    color: var(--p-calendar-month-text-color-selected);
}

.p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} solid ${dt('focus.ring.color')};
    outline-offset: 0;
}

/* Year Picker */
.p-yearpicker {
    margin: 0.5rem 0 0 0;
}

.p-yearpicker-year {
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
    color: var(--p-calendar-year-text-color);
}

.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    background: var(--p-calendar-year-background-hover);
    color: var(--p-calendar-year-text-color-hover);
}

.p-yearpicker-year.p-highlight {
    background: var(--p-calendar-year-background-selected);
    color: var(--p-calendar-year-text-color-selected);
}

.p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} solid ${dt('focus.ring.color')};
    outline-offset: 0;
}

.p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 0 0;
    border-top: 1px solid var(--p-calendar-buttonbar-border-color);
}

.p-datepicker-buttonbar .p-button {
    width: auto;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
}

.p-timepicker {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--p-calendar-timepicker-border-color);
    padding: 0;
}

.p-datepicker .p-datepicker-group-container+.p-timepicker {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
}

.p-timepicker>div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 0.5rem;
}

.p-timepicker button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: var(--p-calendar-timepicker-spin-color);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-timepicker button:enabled:hover {
    background: var(--p-calendar-timepicker-spin-background-hover);
    color: var(--p-calendar-timepicker-spin-color-hover);
}

.p-timepicker button:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
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

/* Touch UI */
.p-datepicker-touch-ui,
.p-calendar .p-datepicker-touch-ui {
    min-width: 80vw;
}

.p-datepicker.p-datepicker-mobile table th,
.p-datepicker.p-datepicker-mobile table td {
    padding: 0.25rem;
}
`
};
