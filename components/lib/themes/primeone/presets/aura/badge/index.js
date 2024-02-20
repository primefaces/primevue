export default {
    colorScheme: {
        light: {
            primary: {
                background: '{primary.color}',
                textColor: '{primary.inverseColor}'
            },
            secondary: {
                background: '{surface.100}',
                textColor: '{surface.600}'
            },
            success: {
                background: '{green.500}',
                textColor: '{surface.0}'
            },
            info: {
                background: '{sky.500}',
                textColor: '{surface.0}'
            },
            warn: {
                background: '{orange.500}',
                textColor: '{surface.0}'
            },
            danger: {
                background: '{red.500}',
                textColor: '{surface.0}'
            },
            contrast: {
                background: '{surface.950}',
                textColor: '{surface.0}'
            }
        },
        dark: {
            primary: {
                background: '{primary.color}',
                textColor: '{primary.inverseColor}'
            },
            secondary: {
                background: '{surface.800}',
                textColor: '{surface.300}'
            },
            success: {
                background: '{green.400}',
                textColor: '{green.950}'
            },
            info: {
                background: '{sky.400}',
                textColor: '{sky.950}'
            },
            warn: {
                background: '{orange.400}',
                textColor: '{orange.950}'
            },
            danger: {
                background: '{red.400}',
                textColor: '{red.950}'
            },
            contrast: {
                background: '{surface.0}',
                textColor: '{surface.950}'
            }
        }
    }
};
