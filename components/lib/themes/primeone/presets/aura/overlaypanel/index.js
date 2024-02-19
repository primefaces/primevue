export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                closeIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}',
                    backgroundHover: '{surface.100}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                },
                closeIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}',
                    backgroundHover: '{surface.800}'
                }
            }
        }
    }
};
