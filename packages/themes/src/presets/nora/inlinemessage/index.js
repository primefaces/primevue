export default {
    root: {
        padding: '{form.field.padding.y} {form.field.padding.x}',
        borderRadius: '{content.border.radius}',
        gap: '0.5rem'
    },
    text: {
        fontWeight: '700'
    },
    icon: {
        size: '1rem'
    },
    colorScheme: {
        light: {
            info: {
                background: '{blue.800}',
                borderColor: '{blue.800}',
                color: '{blue.50}',
                shadow: 'none'
            },
            success: {
                background: '{green.800}',
                borderColor: '{green.800}',
                color: '{green.50}',
                shadow: 'none'
            },
            warn: {
                background: '{yellow.600}',
                borderColor: '{yellow.600}',
                color: '{yellow.50}',
                shadow: 'none'
            },
            error: {
                background: '{red.800}',
                borderColor: '{red.800}',
                color: '{red.50}',
                shadow: 'none'
            },
            secondary: {
                background: '{surface.200}',
                borderColor: '{surface.200}',
                color: '{surface.700}',
                shadow: 'none'
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.900}',
                color: '{surface.50}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
            }
        },
        dark: {
            info: {
                background: '{blue.200}',
                borderColor: '{blue.200}',
                color: '{blue.950}',
                shadow: 'none'
            },
            success: {
                background: '{green.200}',
                borderColor: '{green.200}',
                color: '{green.950}',
                shadow: 'none'
            },
            warn: {
                background: '{yellow.200}',
                borderColor: '{yellow.200}',
                color: '{yellow.950}',
                shadow: 'none'
            },
            error: {
                background: '{red.200}',
                borderColor: '{red.200}',
                color: '{red.950}',
                shadow: 'none'
            },
            secondary: {
                background: '{surface.700}',
                borderColor: '{surface.700}',
                color: '{surface.200}',
                shadow: 'none'
            },
            contrast: {
                background: '{surface.0}',
                borderColor: '{surface.0}',
                color: '{surface.950}',
                shadow: 'none'
            }
        }
    }
};
