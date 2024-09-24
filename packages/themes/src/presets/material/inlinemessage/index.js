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
        size: '1rem'
    },
    colorScheme: {
        light: {
            info: {
                background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                borderColor: '{blue.200}',
                color: '{blue.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)'
            },
            success: {
                background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                borderColor: '{green.200}',
                color: '{green.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)'
            },
            warn: {
                background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                borderColor: '{yellow.200}',
                color: '{yellow.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)'
            },
            error: {
                background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                borderColor: '{red.200}',
                color: '{red.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)'
            },
            secondary: {
                background: '{surface.100}',
                borderColor: '{surface.200}',
                color: '{surface.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.950}',
                color: '{surface.50}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
            }
        },
        dark: {
            info: {
                background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                color: '{blue.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)'
            },
            success: {
                background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                color: '{green.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)'
            },
            warn: {
                background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                color: '{yellow.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)'
            },
            error: {
                background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                color: '{red.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)'
            },
            secondary: {
                background: '{surface.800}',
                borderColor: '{surface.700}',
                color: '{surface.300}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
            },
            contrast: {
                background: '{surface.0}',
                borderColor: '{surface.100}',
                color: '{surface.950}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
            }
        }
    }
};
