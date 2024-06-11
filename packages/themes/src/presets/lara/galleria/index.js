export default {
    root: {
        borderWidth: '1px',
        borderColor: '{content.border.color}',
        borderRadius: '{content.border.radius}',
        transitionDuration: '{transition.duration}'
    },
    navButton: {
        background: 'rgba(255, 255, 255, 0.1)',
        hoverBackground: 'rgba(255, 255, 255, 0.2)',
        color: '{surface.100}',
        hoverColor: '{surface.0}',
        size: '3rem',
        gutter: '0',
        prev: {
            borderRadius: '0 12px 12px 0'
        },
        next: {
            borderRadius: '12px 0 0 12px'
        },
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    navIcon: {
        size: '1.5rem'
    },
    thumbnailsContent: {
        padding: '1rem 0.25rem'
    },
    thumbnailNavButton: {
        size: '2rem',
        borderRadius: '{content.border.radius}',
        gutter: '0.5rem',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    thumbnailNavButtonIcon: {
        size: '1rem'
    },
    caption: {
        background: 'rgba(0, 0, 0, 0.5)',
        color: '{surface.100}',
        padding: '1rem'
    },
    indicatorList: {
        gap: '0.5rem',
        padding: '1rem'
    },
    indicatorButton: {
        width: '1rem',
        height: '1rem',
        activeBackground: '{primary.color}',
        borderRadius: '50%',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    insetIndicatorList: {
        background: 'rgba(0, 0, 0, 0.5)'
    },
    insetIndicatorButton: {
        background: 'rgba(255, 255, 255, 0.4)',
        hoverBackground: 'rgba(255, 255, 255, 0.6)',
        activeBackground: 'rgba(255, 255, 255, 0.9)'
    },
    mask: {
        background: '{mask.background}',
        color: '{mask.color}'
    },
    closeButton: {
        size: '3rem',
        gutter: '0.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        hoverBackground: 'rgba(255, 255, 255, 0.2)',
        color: '{surface.50}',
        hoverColor: '{surface.0}',
        borderRadius: '50%',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}'
        }
    },
    closeButtonIcon: {
        size: '1.5rem'
    },
    colorScheme: {
        light: {
            thumbnailsContent: {
                background: '{surface.50}'
            },
            thumbnailNavButton: {
                hoverBackground: '{surface.100}',
                color: '{surface.600}',
                hoverColor: '{surface.700}'
            },
            indicatorButton: {
                background: '{surface.200}',
                hoverBackground: '{surface.300}'
            }
        },
        dark: {
            thumbnailsContent: {
                background: '{surface.800}'
            },
            thumbnailNavButton: {
                hoverBackground: '{surface.700}',
                color: '{surface.400}',
                hoverColor: '{surface.0}'
            },
            indicatorButton: {
                background: '{surface.700}',
                hoverBackground: '{surface.600}'
            }
        }
    }
};
