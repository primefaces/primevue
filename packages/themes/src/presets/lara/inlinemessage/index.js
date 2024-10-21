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
                background: 'color-mix(in srgb, {colorinfo.50}, transparent 5%)',
                borderColor: 'color-mix(in srgb, {colorinfo.50}, transparent 5%)',
                color: '{colorinfo.600}',
                shadow: 'none'
            },
            success: {
                background: 'color-mix(in srgb, {colorsuccess.100}, transparent 5%)',
                borderColor: 'color-mix(in srgb, {colorsuccess.100}, transparent 5%)',
                color: '{colorsuccess.600}',
                shadow: 'none'
            },
            warn: {
                background: 'color-mix(in srgb,{colorwarning.100}, transparent 5%)',
                borderColor: 'color-mix(in srgb,{colorwarning.100}, transparent 5%)',
                color: '{colorwarning.600}',
                shadow: 'none'
            },
            error: {
                background: 'color-mix(in srgb, {colordanger.100}, transparent 5%)',
                borderColor: 'color-mix(in srgb, {colordanger.100}, transparent 5%)',
                color: '{colordanger.600}',
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
                color: '{surface.100}',
                shadow: 'none'
            }
        },
        dark: {
            info: {
                background: 'color-mix(in srgb, {colorinfo.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {colorinfo.500}, transparent 84%)',
                color: '{colorinfo.500}',
                shadow: 'none'
            },
            success: {
                background: 'color-mix(in srgb, {colorsuccess.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {colorsuccess.500}, transparent 84%)',
                color: '{colorsuccess.500}',
                shadow: 'none'
            },
            warn: {
                background: 'color-mix(in srgb, {colorwarning.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {colorwarning.500}, transparent 84%)',
                color: '{colorwarning.500}',
                shadow: 'none'
            },
            error: {
                background: 'color-mix(in srgb, {colordanger.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {colordanger.500}, transparent 84%)',
                color: '{colordanger.500}',
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
                color: '{surface.900}',
                shadow: 'none'
            }
        }
    }
};
