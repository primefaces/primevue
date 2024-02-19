export default {
    variables: {
        colorScheme: {
            light: {
                connector: {
                    borderColor: '{surface.200}'
                },
                item: {
                    textColor: '{surface.700}',
                    textColorActive: '{primary.color}'
                },
                marker: {
                    background: '{surface.0}',
                    backgroundActive: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.500}',
                    textColorActive: '{primary.color}'
                }
            },
            dark: {
                connector: {
                    borderColor: '{surface.700}'
                },
                item: {
                    textColor: '{surface.0}',
                    textColorActive: '{primary.color}'
                },
                marker: {
                    background: '{surface.900}',
                    backgroundActive: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.400}',
                    textColorActive: '{primary.color}'
                }
            }
        }
    }
};
