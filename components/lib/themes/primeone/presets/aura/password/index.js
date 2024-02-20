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
                backgroundWeak: '{red.500}',
                backgroundMedium: '{amber.500}',
                backgroundStrong: '{green.500}'
            },
            overlay: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                textColor: '{surface.700}'
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
                backgroundWeak: '{red.400}',
                backgroundMedium: '{amber.400}',
                backgroundStrong: '{green.400}'
            },
            overlay: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                textColor: '{surface.0}'
            }
        }
    }
};
