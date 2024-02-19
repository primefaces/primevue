export default {
    variables: {
        colorScheme: {
            root: {
                background: '{surface.0}'
            },
            light: {
                item: {
                    textColor: '{surface.500}',
                    textColorHover: '{surface.700}',
                    iconColor: '{surface.400}'
                },
                separator: {
                    color: '{surface.400}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}'
                },
                item: {
                    textColor: '{surface.400}',
                    textColorHover: '{surface.0}',
                    iconColor: '{surface.500}'
                },
                separator: {
                    color: '{surface.500}'
                }
            }
        }
    }
};
