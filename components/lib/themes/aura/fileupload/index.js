export default {
    colorScheme: {
        light: {
            root: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                color: '{surface.700}'
            },
            content: {
                highlightBackground: '{highlight.background}',
                highlightBorderColor: '{highlight.color}'
            },
            file: {
                borderColor: '{surface.200}'
            }
        },
        dark: {
            root: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                color: '{surface.0}'
            },
            content: {
                highlightBackground: '{highlight.background}',
                highlightBorderColor: '{highlight.color}'
            },
            file: {
                borderColor: '{surface.700}'
            }
        }
    }
};