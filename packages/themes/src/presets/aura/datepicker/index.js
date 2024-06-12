export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    panel: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        borderRadius: '{content.border.radius}',
        shadow: '{overlay.popover.shadow}',
        padding: '{overlay.popover.padding}'
    },
    header: {
        background: '{content.background}',
        borderColor: '{content.border.color}',
        color: '{content.color}',
        padding: '0 0 0.5rem 0',
        fontWeight: '500',
        gap: '0.5rem'
    },
    title: {
        gap: '0.5rem',
        fontWeight: '500'
    },
    dropdown: {
        width: '2.5rem',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.border.color}',
        activeBorderColor: '{form.field.border.color}',
        borderRadius: '{form.field.border.radius}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    inputIcon: {
        color: '{form.field.icon.color}'
    },
    selectMonth: {
        hoverBackground: '{content.hover.background}',
        color: '{content.color}',
        hoverColor: '{content.hover.color}',
        padding: '0.25rem 0.5rem',
        borderRadius: '{content.border.radius}'
    },
    selectYear: {
        hoverBackground: '{content.hover.background}',
        color: '{content.color}',
        hoverColor: '{content.hover.color}',
        padding: '0.25rem 0.5rem',
        borderRadius: '{content.border.radius}'
    },
    group: {
        borderColor: '{content.border.color}',
        gap: '{overlay.popover.padding}'
    },
    dayView: {
        margin: '0.5rem 0 0 0'
    },
    weekDay: {
        padding: '0.25rem',
        fontWeight: '500',
        color: '{content.color}'
    },
    date: {
        hoverBackground: '{content.hover.background}',
        selectedBackground: '{primary.color}',
        rangeSelectedBackground: '{highlight.background}',
        color: '{content.color}',
        hoverColor: '{content.hover.color}',
        selectedColor: '{primary.contrast.color}',
        rangeSelectedColor: '{highlight.color}',
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        padding: '0.25rem',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    monthView: {
        margin: '0.5rem 0 0 0'
    },
    month: {
        borderRadius: '{content.border.radius}'
    },
    yearView: {
        margin: '0.5rem 0 0 0'
    },
    year: {
        borderRadius: '{content.border.radius}'
    },
    buttonbar: {
        padding: '0.5rem 0 0 0',
        borderColor: '{content.border.color}'
    },
    timePicker: {
        padding: '0.5rem 0 0 0',
        borderColor: '{content.border.color}',
        gap: '0.5rem',
        buttonGap: '0.25rem'
    },
    colorScheme: {
        light: {
            dropdown: {
                background: '{surface.100}',
                hoverBackground: '{surface.200}',
                activeBackground: '{surface.300}',
                color: '{surface.600}',
                hoverColor: '{surface.700}',
                activeColor: '{surface.800}'
            },
            today: {
                background: '{surface.200}',
                color: '{surface.900}'
            }
        },
        dark: {
            dropdown: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                activeBackground: '{surface.600}',
                color: '{surface.300}',
                hoverColor: '{surface.200}',
                activeColor: '{surface.100}'
            },
            today: {
                background: '{surface.700}',
                color: '{surface.0}'
            }
        }
    }
};
