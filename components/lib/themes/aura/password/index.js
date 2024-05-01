export default {
    colorScheme: {
        light: {
            meter: {
                borderColor: '{surface.200}'
            },
            icon: {
                color: '{surface.500}'
            },
            strength: {
                weakBackground: '{red.500}',
                mediumBackground: '{amber.500}',
                strongBackground: '{green.500}'
            },
            overlay: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                color: '{surface.700}'
            }
        },
        dark: {
            meter: {
                borderColor: '{surface.700}'
            },
            icon: {
                color: '{surface.400}'
            },
            strength: {
                weakBackground: '{red.400}',
                mediumBackground: '{amber.400}',
                strongBackground: '{green.400}'
            },
            overlay: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                color: '{surface.0}'
            }
        }
    }
};
