export default {
    root: {
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
        fontWeight: '500'
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
                background: 'color-mix(in srgb, {blue.50}, transparent 5%)',
                borderColor: '{blue.200}',
                color: '{blue.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{blue.100}',
                    focusRing: {
                        color: '{blue.600}',
                        shadow: 'none'
                    }
                }
            },
            success: {
                background: 'color-mix(in srgb, {green.50}, transparent 5%)',
                borderColor: '{green.200}',
                color: '{green.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{green.100}',
                    focusRing: {
                        color: '{green.600}',
                        shadow: 'none'
                    }
                }
            },
            warn: {
                background: 'color-mix(in srgb,{yellow.50}, transparent 5%)',
                borderColor: '{yellow.200}',
                color: '{yellow.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{yellow.100}',
                    focusRing: {
                        color: '{yellow.600}',
                        shadow: 'none'
                    }
                }
            },
            error: {
                background: 'color-mix(in srgb, {red.50}, transparent 5%)',
                borderColor: '{red.200}',
                color: '{red.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{red.100}',
                    focusRing: {
                        color: '{red.600}',
                        shadow: 'none'
                    }
                }
            },
            secondary: {
                background: '{surface.100}',
                borderColor: '{surface.200}',
                color: '{surface.600}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.200}',
                    focusRing: {
                        color: '{surface.600}',
                        shadow: 'none'
                    }
                }
            },
            contrast: {
                background: '{surface.900}',
                borderColor: '{surface.950}',
                color: '{surface.50}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.800}',
                    focusRing: {
                        color: '{surface.50}',
                        shadow: 'none'
                    }
                }
            }
        },
        dark: {
            info: {
                background: 'color-mix(in srgb, {blue.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {blue.700}, transparent 64%)',
                color: '{blue.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{blue.500}',
                        shadow: 'none'
                    }
                }
            },
            success: {
                background: 'color-mix(in srgb, {green.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {green.700}, transparent 64%)',
                color: '{green.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{green.500}',
                        shadow: 'none'
                    }
                }
            },
            warn: {
                background: 'color-mix(in srgb, {yellow.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {yellow.700}, transparent 64%)',
                color: '{yellow.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{yellow.500}',
                        shadow: 'none'
                    }
                }
            },
            error: {
                background: 'color-mix(in srgb, {red.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {red.700}, transparent 64%)',
                color: '{red.500}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{red.500}',
                        shadow: 'none'
                    }
                }
            },
            secondary: {
                background: '{surface.800}',
                borderColor: '{surface.700}',
                color: '{surface.300}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.700}',
                    focusRing: {
                        color: '{surface.300}',
                        shadow: 'none'
                    }
                }
            },
            contrast: {
                background: '{surface.0}',
                borderColor: '{surface.100}',
                color: '{surface.950}',
                shadow: '0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)',
                closeButton: {
                    hoverBackground: '{surface.100}',
                    focusRing: {
                        color: '{surface.950}',
                        shadow: 'none'
                    }
                }
            }
        }
    }
};
