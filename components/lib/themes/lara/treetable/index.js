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
    resizeIndicatorColor: '{primary.color}',
    sortIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}'
    },
    nodeToggleButton: {
        hoverBackground: '{content.hover.background}',
        highlightHoverBackground: '{content.background}',
        color: '{text.color}',
        hoverColor: '{text.muted.color}'
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
