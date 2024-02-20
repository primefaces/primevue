export default {
    colorScheme: {
        light: {
            info: {
                background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                borderColor: '{blue.200}',
                textColor: '{blue.600}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)'
            },
            success: {
                background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                borderColor: '{green.200}',
                textColor: '{green.600}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)'
            },
            warn: {
                background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                borderColor: '{yellow.200}',
                textColor: '{yellow.600}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)'
            },
            error: {
                background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                borderColor: '{red.200}',
                textColor: '{red.600}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)'
            },
            secondary: {
                background: '{surface.100}',
                borderColor: '{surface.200}',
                textColor: '{surface.600}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.950}',
                textColor: '{surface.50}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
            }
        },
        dark: {
            info: {
                background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                textColor: '{blue.500}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)'
            },
            success: {
                background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                textColor: '{green.500}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)'
            },
            warn: {
                background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                textColor: '{yellow.500}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)'
            },
            error: {
                background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                textColor: '{red.500}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)'
            },
            secondary: {
                background: '{surface.800}',
                borderColor: '{surface.700}',
                textColor: '{surface.300}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)'
            },
            contrast: {
                background: '{surface.0}',
                borderColor: '{surface.100}',
                textColor: '{surface.950}',
                boxShadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)'
            }
        }
    }
};
