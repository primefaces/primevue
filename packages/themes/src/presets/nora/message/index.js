export default {
    root: {
        margin: '1rem 0',
        borderRadius: '{content.border.radius}',
        borderWidth: '1px',
        transitionDuration: '{transition.duration}'
    },
    content: {
        padding: '0.5rem 0.75rem',
        gap: '0.5rem'
    },
    text: {
        fontSize: '1rem',
        fontWeight: '700'
    },
    icon: {
        size: '1.125rem'
    },
    closeButton: {
        width: '1.75rem',
        height: '1.75rem',
        borderRadius: '50%',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            offset: '{focus.ring.offset}'
        }
    },
    closeIcon: {
        size: '1rem'
    },
    colorScheme: {
        light: {
            info: {
                background: '{blue.800}',
                borderColor: '{blue.800}',
                color: '{blue.50}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{blue.600}',
                    focusRing: {
                        color: '{blue.50}',
                        shadow: 'none'
                    }
                }
            },
            success: {
                background: '{green.800}',
                borderColor: '{green.800}',
                color: '{green.50}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{green.600}',
                    focusRing: {
                        color: '{green.50}',
                        shadow: 'none'
                    }
                }
            },
            warn: {
                background: '{yellow.600}',
                borderColor: '{yellow.600}',
                color: '{yellow.50}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{yellow.400}',
                    focusRing: {
                        color: '{yellow.50}',
                        shadow: 'none'
                    }
                }
            },
            error: {
                background: '{red.800}',
                borderColor: '{red.800}',
                color: '{red.50}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{red.600}',
                    focusRing: {
                        color: '{red.50}',
                        shadow: 'none'
                    }
                }
            },
            secondary: {
                background: '{surface.200}',
                borderColor: '{surface.200}',
                color: '{surface.700}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.50}',
                    focusRing: {
                        color: '{surface.700}',
                        shadow: 'none'
                    }
                }
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.900}',
                color: '{surface.50}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.700}',
                    focusRing: {
                        color: '{surface.50}',
                        shadow: 'none'
                    }
                }
            }
        },
        dark: {
            info: {
                background: '{blue.200}',
                borderColor: '{blue.200}',
                color: '{blue.950}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{blue.50}',
                    focusRing: {
                        color: '{blue.950}',
                        shadow: 'none'
                    }
                }
            },
            success: {
                background: '{green.200}',
                borderColor: '{green.200}',
                color: '{green.950}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{green.50}',
                    focusRing: {
                        color: '{green.950}',
                        shadow: 'none'
                    }
                }
            },
            warn: {
                background: '{yellow.200}',
                borderColor: '{yellow.200}',
                color: '{yellow.950}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{yellow.50}',
                    focusRing: {
                        color: '{yellow.950}',
                        shadow: 'none'
                    }
                }
            },
            error: {
                background: '{red.200}',
                borderColor: '{red.200}',
                color: '{red.950}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{red.50}',
                    focusRing: {
                        color: '{red.950}',
                        shadow: 'none'
                    }
                }
            },
            secondary: {
                background: '{surface.700}',
                borderColor: '{surface.700}',
                color: '{surface.200}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.500}',
                    focusRing: {
                        color: '{surface.200}',
                        shadow: 'none'
                    }
                }
            },
            contrast: {
                background: '{surface.0}',
                borderColor: '{surface.0}',
                color: '{surface.950}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.200}',
                    focusRing: {
                        color: '{surface.950}',
                        shadow: 'none'
                    }
                }
            }
        }
    }
};
