export default {
    colorScheme: {
        light: {
            header: {
                background: '{surface.0}',
                borderColor: '{surface.200}',
                textColor: '{surface.700}'
            },
            content: {
                background: '{surface.0}',
                backgroundHighlight: '{highlight.background}',
                borderColor: '{surface.200}',
                borderColorHighlight: '{highlight.textColor}',
                textColor: '{surface.700}'
            },
            file: {
                borderColor: '{surface.200}'
            }
        },
        dark: {
            header: {
                background: '{surface.900}',
                borderColor: '{surface.700}',
                textColor: '{surface.0}'
            },
            content: {
                background: '{surface.900}',
                backgroundHighlight: '{highlight.background}',
                borderColor: '{surface.700}',
                borderColorHighlight: '{highlight.textColor}',
                textColor: '{surface.0}'
            },
            file: {
                borderColor: '{surface.200}'
            }
        }
    }
};
