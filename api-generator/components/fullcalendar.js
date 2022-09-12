const FullCalendarProps = [
    {
        name: "events",
        type: "array",
        default: "null",
        description: "An array of events to display."
    },
    {
        name: "options",
        type: "object",
        default: "null",
        description: "A configuration object to define properties of FullCalendar."
    }
];

module.exports = {
    fullcalendar: {
        name: "FullCalendar",
        description: "An event calendar based on the FullCalendar library.",
        props: FullCalendarProps
    }
};
