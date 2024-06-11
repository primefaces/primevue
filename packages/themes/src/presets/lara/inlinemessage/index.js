export default {
    root: {
        padding: '{form.field.padding.y} {form.field.padding.x}',
        borderRadius: '{content.border.radius}',
        gap: '0.5rem'
    },
    text: {
        fontWeight: '500'
    },
    icon: {
        size: '1.125rem'
    },
    colorScheme: {
        light: {
            info: {
                background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                borderColor: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                color: '{blue.600}',
                shadow: 'none'
            },
            success: {
                background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                borderColor: 'color-mix(in srgb, {green.50}, transparent 5%)',
                color: '{green.600}',
                shadow: 'none'
            },
            warn: {
                background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                borderColor: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                color: '{yellow.600}',
                shadow: 'none'
            },
            error: {
                background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                borderColor: 'color-mix(in srgb, {red.50}, transparent 5%)',
                color: '{red.600}',
                shadow: 'none'
            },
            secondary: {
                background: '{surface.100}',
                borderColor: '{surface.100}',
                color: '{surface.600}',
                shadow: 'none'
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.900}',
                color: '{surface.50}',
                shadow: 'none'
            }
        },
        dark: {
            info: {
                background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                color: '{blue.500}',
                shadow: 'none'
            },
            success: {
                background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {green.500}, transparent 84%)',
                color: '{green.500}',
                shadow: 'none'
            },
            warn: {
                background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                color: '{yellow.500}',
                shadow: 'none'
            },
            error: {
                background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {red.500}, transparent 84%)',
                color: '{red.500}',
                shadow: 'none'
            },
            secondary: {
                background: '{surface.800}',
                borderColor: '{surface.800}',
                color: '{surface.300}',
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
