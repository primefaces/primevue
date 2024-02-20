export default {
    colorScheme: {
        light: {
            primary: {
                background: '{primary.100}',
                textColor: '{primary.700}'
            },
            secondary: {
                background: '{surface.100}',
                textColor: '{surface.600}'
            },
            success: {
                background: '{green.100}',
                textColor: '{green.700}'
            },
            info: {
                background: '{sky.100}',
                textColor: '{sky.700}'
            },
            warn: {
                background: '{orange.100}',
                textColor: '{orange.700}'
            },
            danger: {
                background: '{red.100}',
                textColor: '{red.700}'
            },
            contrast: {
                background: '{surface.950}',
                textColor: '{surface.0}'
            }
        },
        dark: {
            primary: {
                background: 'color-mix(in srgb, var(--p-primary-500), transparent 84%)',
                textColor: '{primary.300}'
            },
            secondary: {
                background: '{surface.800}',
                textColor: '{surface.300}'
            },
            success: {
                background: 'color-mix(in srgb, var(--p-green-500), transparent 84%)',
                textColor: '{green.300}'
            },
            info: {
                background: 'color-mix(in srgb, var(--p-sky-500), transparent 84%)',
                textColor: '{sky.300}'
            },
            warn: {
                background: 'color-mix(in srgb, var(--p-orange-500), transparent 84%)',
                textColor: '{orange.300}'
            },
            danger: {
                background: 'color-mix(in srgb, var(--p-red-500), transparent 84%)',
                textColor: '{red.300}'
            },
            contrast: {
                background: '{surface.0}',
                textColor: '{surface.950}'
            }
        }
    }
};
