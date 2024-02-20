export default {
    colorScheme: {
        light: {
            panel: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                textColor: '{surface.700}'
            },
            item: {
                backgroundFocus: '{surface.100}',
                text: {
                    color: '{surface.700}',
                    colorFocus: '{surface.800}'
                },
                icon: {
                    color: '{surface.400}',
                    colorFocus: '{surface.500}'
                }
            }
        },
        dark: {
            panel: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                textColor: '{surface.0}'
            },
            item: {
                backgroundFocus: '{surface.800}',
                text: {
                    color: '{surface.0}',
                    colorFocus: '{surface.0}'
                },
                icon: {
                    color: '{surface.500}',
                    colorFocus: '{surface.400}'
                }
            }
        }
    }
};
