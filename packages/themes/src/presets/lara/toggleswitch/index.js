export default {
    root: {
        width: '3rem',
        height: '1.75rem',
        borderRadius: '30px',
        gap: '0.25rem',
        shadow: '{form.field.shadow}',
        focusRing: {
            width: '{form.field.focus.ring.width}',
            style: '{form.field.focus.ring.style}',
            color: '{form.field.focus.ring.color}',
            offset: '{form.field.focus.ring.offset}',
            shadow: '{form.field.focus.ring.shadow}'
        },
        borderWidth: '1px',
        borderColor: 'transparent',
        hoverBorderColor: 'transparent',
        checkedBorderColor: 'transparent',
        checkedHoverBorderColor: 'transparent',
        invalidBorderColor: '{form.field.invalid.border.color}',
        transitionDuration: '{form.field.transition.duration}',
        slideDuration: '0.2s'
    },
    handle: {
        borderRadius: '50%',
        size: '1.25rem'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.300}',
                disabledBackground: '{form.field.disabled.background}',
                hoverBackground: '{surface.400}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.hover.color}'
            },
            handle: {
                background: '{surface.0}',
                disabledBackground: '{form.field.disabled.color}',
                hoverBackground: '{surface.0}',
                checkedBackground: '{surface.0}',
                checkedHoverBackground: '{surface.0}',
                color: '{text.muted.color}',
                hoverColor: '{text.color}',
                checkedColor: '{primary.color}',
                checkedHoverColor: '{primary.hover.color}'
            }
        },
        dark: {
            root: {
                background: '{surface.700}',
                disabledBackground: '{surface.600}',
                hoverBackground: '{surface.600}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.hover.color}'
            },
            handle: {
                background: '{surface.400}',
                disabledBackground: '{surface.900}',
                hoverBackground: '{surface.300}',
                checkedBackground: '{surface.900}',
                checkedHoverBackground: '{surface.900}',
                color: '{surface.900}',
                hoverColor: '{surface.800}',
                checkedColor: '{primary.color}',
                checkedHoverColor: '{primary.hover.color}'
            }
        }
    }
};
