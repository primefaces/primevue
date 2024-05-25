export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    header: {
        borderColor: '{treetable.border.color}',
        borderWidth: '1px 0 1px 0',
        padding: '0.75rem 1rem'
    },
    headerCell: {
        selectedBackground: '{highlight.background}',
        borderColor: '{treetable.border.color}',
        hoverColor: '{content.hover.color}',
        selectedColor: '{highlight.color}',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: 'inset {focus.ring.shadow}'
        }
    },
    columnTitle: {
        fontWeight: '700'
    },
    row: {
        background: '{content.background}',
        hoverBackground: '{content.hover.background}',
        selectedBackground: '{highlight.background}',
        color: '{content.color}',
        hoverColor: '{sr.hover.color}',
        selectedColor: '{highlight.color}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: 'inset {focus.ring.shadow}'
        }
    },
    bodyCell: {
        borderColor: '{treetable.border.color}',
        padding: '0.75rem 1rem',
        gap: '0.5rem'
    },
    footerCell: {
        borderColor: '{treetable.border.color}',
        padding: '0.75rem 1rem'
    },
    columnFooter: {
        fontWeight: '700'
    },
    footer: {
        borderColor: '{treetable.border.color}',
        borderWidth: '0 0 1px 0',
        padding: '0.75rem 1rem'
    },
    columnResizerWidth: '0.5rem',
    resizeIndicator: {
        width: '1px',
        color: '{primary.color}'
    },
    sortIcon: {
        color: '{text.muted.color}',
        hoverColor: '{text.hover.muted.color}'
    },
    loadingIcon: {
        size: '2rem'
    },
    nodeToggleButton: {
        hoverBackground: '{content.hover.background}',
        selectedHoverBackground: '{content.background}',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        selectedHoverColor: '{primary.color}',
        size: '1.75rem',
        borderRadius: '50%',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    paginatorTop: {
        borderColor: '{content.border.color}',
        borderWidth: '0 0 1px 0'
    },
    paginatorBottom: {
        borderColor: '{content.border.color}',
        borderWidth: '0 0 1px 0'
    },
    colorScheme: {
        light: {
            root: {
                borderColor: '{content.border.color}'
            },
            header: {
                background: '{surface.50}',
                color: '{text.color}'
            },
            headerCell: {
                background: '{surface.50}',
                hoverBackground: '{surface.100}',
                color: '{text.color}'
            },
            footer: {
                background: '{surface.50}',
                color: '{text.color}'
            },
            footerCell: {
                background: '{surface.50}',
                color: '{text.color}'
            },
            bodyCell: {
                selectedBorderColor: '{primary.100}'
            }
        },
        dark: {
            root: {
                borderColor: '{surface.800}'
            },
            header: {
                background: '{surface.800}',
                color: '{text.color}'
            },
            headerCell: {
                background: '{surface.800}',
                hoverBackground: '{surface.700}',
                color: '{text.color}'
            },
            footer: {
                background: '{surface.800}',
                color: '{text.color}'
            },
            footerCell: {
                background: '{surface.800}',
                color: '{text.color}'
            },
            bodyCell: {
                selectedBorderColor: '{primary.900}'
            }
        }
    }
};
