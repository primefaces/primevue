export default {
    variables: {
        colorScheme: {
            light: {
                marker: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    contentColor: '{primary.color}'
                },
                connector: {
                    color: '{surface.200}'
                }
            },
            dark: {
                marker: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    contentColor: '{primary.color}'
                },
                connector: {
                    color: '{surface.700}'
                }
            }
        }
    }
};
