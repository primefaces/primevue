const CalendarProps = [
    {
        name: "modelValue",
        type: "any",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "selectionMode",
        type: "string",
        default: "single",
        description: 'Defines the quantity of the selection, valid values are "single", "multiple" and "range".'
    },
    {
        name: "dateFormat",
        type: "string",
        default: "null",
        description: "Format of the date. Defaults to PrimeVue Locale configuration."
    },
    {
        name: "inline",
        type: "boolean",
        default: "false",
        description: "When enabled, displays the calendar as inline instead of an overlay."
    },
    {
        name: "showOtherMonths",
        type: "boolean",
        default: "true",
        description: "Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option."
    },
    {
        name: "selectOtherMonths",
        type: "boolean",
        default: "false",
        description: "Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true."
    },
    {
        name: "showIcon",
        type: "boolean",
        default: "false",
        description: "When enabled, displays a button with icon next to input."
    },
    {
        name: "icon",
        type: "string",
        default: "pi pi-calendar",
        description: "Icon of the calendar button."
    },
    {
        name: "numberOfMonths",
        type: "number",
        default: "1",
        description: "Number of months to display."
    },
    {
        name: "view",
        type: "string",
        default: "date",
        description: 'Type of view to display, valid valids are "date" for datepicker and "month" for month picker.'
    },
    {
        name: "touchUI",
        type: "boolean",
        default: "false",
        description: "When enabled, calendar overlay is displayed as optimized for touch devices."
    },
    {
        name: "monthNavigator",
        type: "boolean",
        default: "false",
        description: "Whether the month should be rendered as a dropdown instead of text."
    },
    {
        name: "yearNavigator",
        type: "boolean",
        default: "false",
        description: "Whether the year should be rendered as a dropdown instead of text."
    },
    {
        name: "yearRange",
        type: "string",
        default: "null",
        description: "The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020)."
    },
    {
        name: "panelClass",
        type: "string",
        default: "null",
        description: "Style class of the datetimepicker panel."
    },
    {
        name: "minDate",
        type: "Date",
        default: "null",
        description: "The minimum selectable date."
    },

    {
        name: "maxDate",
        type: "Date",
        default: "null",
        description: "The maximum selectable date."
    },
    {
        name: "disabledDates",
        type: "array",
        default: "null",
        description: "Array with dates to disable."
    },
    {
        name: "disabledDays",
        type: "array",
        default: "null",
        description: "Array with disabled weekday numbers."
    },
    {
        name: "maxDateCount",
        type: "number",
        default: "null",
        description: "Maximum number of selectable dates in multiple mode."
    },
    {
        name: "showOnFocus",
        type: "boolean",
        default: "true",
        description: "When disabled, datepicker will not be visible with input focus."
    },
    {
        name: "autoZIndex",
        type: "boolean",
        default: "true",
        description: "Whether to automatically manage layering."
    },
    {
        name: "baseZIndex",
        type: "number",
        default: "0",
        description: "Base zIndex value to use in layering."
    },
    {
        name: "showButtonBar",
        type: "boolean",
        default: "false",
        description: "Whether to display today and clear buttons at the footer"
    },
    {
        name: "shortYearCutoff",
        type: "string",
        default: "+10",
        description: "The cutoff year for determining the century for a date."
    },
    {
        name: "showTime",
        type: "boolean",
        default: "false",
        description: "Whether to display timepicker."
    },
    {
        name: "timeOnly",
        type: "boolean",
        default: "false",
        description: "Whether to display timepicker only."
    },
    {
        name: "hourFormat",
        type: "string",
        default: "24",
        description: "Specifies 12 or 24 hour format."
    },
    {
        name: "stepHour",
        type: "number",
        default: "1",
        description: "Hours to change per step."
    },
    {
        name: "stepMinute",
        type: "number",
        default: "1",
        description: "Minutes to change per step."
    },
    {
        name: "stepSeconds",
        type: "number",
        default: "1",
        description: "Seconds to change per step."
    },
    {
        name: "showSeconds",
        type: "boolean",
        default: "false",
        description: "Whether to show the seconds in time picker."
    },
    {
        name: "hideOnDateTimeSelect",
        type: "boolean",
        default: "false",
        description: "Whether to hide the overlay on date selection when showTime is enabled."
    },
    {
        name: "timeSeparator",
        type: "string",
        default: ":",
        description: "Separator of time selector."
    },
    {
        name: "showWeek",
        type: "boolean",
        default: "false",
        description: "When enabled, calendar will show week numbers."
    },
    {
        name: "manualInput",
        type: "boolean",
        default: "true",
        description: "Wheter to allow prevents entering the date manually via typing."
    },
    {
        name: "appendTo",
        type: "string",
        default: "body",
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: "inputStyle",
        type: "any",
        default: "null",
        description: "Inline style of the input field."
    },
    {
        name: "inputClass",
        type: "string",
        default: "null",
        description: "Style class of the input field."
    }
];

const CalendarEvents = [
    {
        name: "date-select",
        description: "Callback to invoke when a date is selected.",
        arguments: [
            {
                name: "value",
                type: "Date",
                description: "Selected value"
            }
        ]
    },
    {
        name: "show",
        description: "Callback to invoke when datepicker panel is shown."
    },
    {
        name: "hide",
        description: "Callback to invoke when datepicker panel is hidden."
    },
    {
        name: "today-click",
        description: "Callback to invoke when today button is clicked.",
        arguments: [
            {
                name: "date",
                type: "Date",
                description: "Today as a date instance"
            }
        ]
    },
    {
        name: "clear-click",
        description: "Callback to invoke when clear button is clicked.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Click event"
            }
        ]
    },
    {
        name: "month-change",
        description: "Callback to invoke when a month is changed using the navigators.",
        arguments: [
            {
                name: "event.month",
                type: "number",
                description: "New month"
            },
            {
                name: "event.year",
                type: "number",
                description: "New year"
            }
        ]
    },
    {
        name: "year-change",
        description: "Callback to invoke when a year is changed using the navigators.",
        arguments: [
            {
                name: "event.month",
                type: "number",
                description: "New month"
            },
            {
                name: "event.year",
                type: "number",
                description: "New year"
            }
        ]
    }
];

const CalendarSlots = [
    {
        name: "header",
        description: "Custom content for the component header."
    },
    {
        name: "footer",
        description: "Custom content for the component footer."
    },
    {
        name: "date",
        description: "Custom content for the calendar cell."
    }
];

module.exports = {
    calendar: {
        name: "Calendar",
        description: "Calendar is an input component to select a date.",
        props: CalendarProps,
        events: CalendarEvents,
        slots: CalendarSlots
    }
};
