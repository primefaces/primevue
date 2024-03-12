export default {
    colorScheme: {
        light: {
            connector: {
                background: '{surface.200}',
                activeBackground: '{primary.color}'
            },
            title: {
                color: '{surface.700}',
                activeColor: '{primary.color}'
            },
            marker: {
                background: '{surface.0}',
                activeBackground: '{surface.0}',
                borderColor: '{surface.200}',
                color: '{surface.500}',
                activeColor: '{primary.color}'
            },
            content: {
                background: '{surface.0}',
                color: '{surface.700}'
            }
        },
        dark: {
            connector: {
                background: '{surface.700}',
                activeBackground: '{primary.color}'
            },
            title: {
                color: '{surface.0}',
                activeColor: '{primary.color}'
            },
            marker: {
                background: '{surface.900}',
                activeBackground: '{surface.900}',
                borderColor: '{surface.700}',
                color: '{surface.400}',
                activeColor: '{primary.color}'
            },
            content: {
                background: '{surface.900}',
                color: '{surface.0}'
            }
        }
    }
};
