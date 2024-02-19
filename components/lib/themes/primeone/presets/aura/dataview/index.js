export default {
    variables: {
        colorScheme: {
            light: {
                header: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                content: {
                    background: '{surface.0}',
                    textColor: '{surface.700}'
                },
                footer: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
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
                    textColor: '{surface.0}'
                },
                footer: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                }
            }
        }
    }
};
