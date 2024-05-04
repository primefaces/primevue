export default {
    header: {
        background: '{content.background}',
        borderColor: '{datatable.border.color}',
        color: '{content.color}'
    },
    headerCell: {
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        borderColor: '{datatable.border.color}',
        color: '{content.color}',
        hoverColor: '{content.hover.color}'
    },
    row: {
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        color: '{content.color}',
        hoverColor: '{content.hover.color}'
    },
    bodyCell: {
        borderColor: '{datatable.border.color}'
    },
    footerCell: {
        background: '{content.background}',
        borderColor: '{datatable.border.color}',
        color: '{content.color}'
    },
    footer: {
        background: '{content.background}',
        borderColor: '{datatable.border.color}',
        color: '{content.color}'
    },
    dropPointColor: '{primary.color}',
    resizeIndicatorColor: '{primary.color}',
    sortIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}'
    },
    rowToggleButton: {
        hoverBackground: '{content.hover.background}',
        highlightHoverBackground: '{content.background}',
        color: '{text.color}',
        hoverColor: '{text.muted.color}'
    },
    filter: {
        overlay: {
            background: '{content.background}',
            borderColor: '{content.border.color}',
            color: '{content.color}'
        },
        rule: {
            borderColor: '{content.border.color}'
        },
        filterConstraint: {
            hoverBackground: '{content.hover.background}',
            selectedBackground: '{highlight.background}',
            color: '{text.color}',
            hoverColor: '{text.hover.color}',
            selectedColor: '{highlight.color}',
            separator: {
                borderColor: '{content.border.color}'
            }
        }
    },
    colorScheme: {
        light: {
            root: {
                borderColor: '{content.border.color}'
            },
            row: {
                stripedBackground: '{surface.50}'
            },
            bodyCell: {
                selectedBorderColor: '{primary.100}'
            }
        },
        dark: {
            root: {
                borderColor: '{surface.800}'
            },
            row: {
                stripedBackground: '{surface.950}'
            },
            bodyCell: {
                selectedBorderColor: '{primary.900}'
            }
        }
    }
};
