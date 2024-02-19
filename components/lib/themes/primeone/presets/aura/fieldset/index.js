export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                legend: {
                    backgroundHover: '{surface.100}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}'
                },
                toggleIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}',
                    textColor: '{surface.0}'
                },
                legend: {
                    backgroundHover: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}'
                },
                toggleIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                }
            }
        }
    }
};
