export default {
    variables: {
        colorScheme: {
            light: {
                nav: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}'
                },
                header: {
                    borderColor: '{surface.200}',
                    textColor: '{surface.500}',
                    textColorHover: '{surface.700}'
                }
            },
            dark: {
                nav: {
                    background: '{surface.900}',
                    borderColor: '{surface.700}'
                },
                header: {
                    borderColor: '{surface.700}',
                    textColor: '{surface.400}',
                    textColorHover: '{surface.0}'
                }
            }
        }
    }
};
