export default {
    variables: {
        colorScheme: {
            light: {
                header: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                headerCell: {
                    background: '{surface.0}',
                    backgroundHover: '{surface.100}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}'
                },
                row: {
                    background: '{surface.0}',
                    backgroundStriped: '{surface.50}',
                    backgroundHover: '{surface.100}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}'
                },
                bodyCell: {
                    borderColor: '{surface.200}',
                    borderColorSelected: '{primary.100}'
                },
                footerCell: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                footer: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                resizerColor: '{primary.color}',
                sortIcon: {
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
                header: {
                    background: '{surface.900}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}'
                },
                headerCell: {
                    background: '{surface.900}',
                    backgroundHover: '{surface.800}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}'
                },
                row: {
                    background: '{surface.900}',
                    backgroundStriped: '{surface.950}',
                    backgroundHover: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}'
                },
                bodyCell: {
                    borderColor: '{surface.800}',
                    borderColorSelected: '{primary.900}'
                },
                footerCell: {
                    background: '{surface.900}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}'
                },
                footer: {
                    background: '{surface.900}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}'
                },
                resizerColor: '{primary.color}',
                sortIcon: {
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
