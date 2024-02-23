export default {
    colorScheme: {
        light: {
            connector: {
                background: '{surface.200}',
                backgroundHighlight: '{primary.color}'
            },
            title: {
                textColor: '{surface.700}',
                textColorHighlight: '{primary.color}'
            },
            marker: {
                background: '{surface.0}',
                backgroundHighlight: '{surface.0}',
                borderColor: '{surface.200}',
                textColor: '{surface.500}',
                textColorHighlight: '{primary.color}'
            },
            content: {
                background: '{surface.0}',
                textColor: '{surface.700}'
            }
        },
        dark: {
            connector: {
                background: '{surface.700}',
                backgroundHighlight: '{primary.color}'
            },
            title: {
                textColor: '{surface.0}',
                textColorHighlight: '{primary.color}'
            },
            marker: {
                background: '{surface.900}',
                backgroundHighlight: '{surface.900}',
                borderColor: '{surface.700}',
                textColor: '{surface.400}',
                textColorHighlight: '{primary.color}'
            },
            content: {
                background: '{surface.900}',
                textColor: '{surface.0}'
            }
        }
    }
};
