export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    background: '{surface.0}',
                    textColor: '{surface.700}'
                },
                node: {
                    backgroundHover: '{surface.100}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}'
                },
                nodeIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}'
                },
                toggle: {
                    backgroundHover: '{surface.100}',
                    backgroundHoverHighlight: '{surface.0}',
                    color: '{surface.500}',
                    colorHover: '{surface.600}'
                },
                indeterminate: {
                    color: '{surface.500}'
                }
            },
            dark: {
                root: {
                    background: '{surface.900}',
                    textColor: '{surface.0}'
                },
                node: {
                    backgroundHover: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}'
                },
                nodeIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                },
                toggle: {
                    backgroundHover: '{surface.800}',
                    backgroundHoverHighlight: '{surface.900}',
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                },
                indeterminate: {
                    color: '{surface.400}'
                }
            }
        }
    }
};
