export default {
    root: {
        width: '25rem',
        borderRadius: '{content.border.radius}',
        borderWidth: '0 0 0 6px',
        transitionDuration: '{transition.duration}'
    },
    icon: {
        size: '1.125rem'
    },
    content: {
        padding: '{overlay.popover.padding}',
        gap: '0.5rem'
    },
    text: {
        gap: '0.5rem'
    },
    summary: {
        fontWeight: '700',
        fontSize: '1rem'
    },
    detail: {
        fontWeight: '500',
        fontSize: '0.875rem'
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
            blur: '0',
            info: {
                background: '{blue.800}',
                borderColor: '{blue.800}',
                color: '{blue.50}',
                detailColor: '{blue.50}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{green.50}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{yellow.50}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{red.50}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{surface.700}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{surface.0}',
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
            blur: '0',
            info: {
                background: '{blue.200}',
                borderColor: '{blue.200}',
                color: '{blue.950}',
                detailColor: '{blue.950}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{green.950}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{yellow.950}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{red.950}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{surface.200}',
                shadow: '{overlay.popover.shadow}',
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
                detailColor: '{surface.950}',
                shadow: '{overlay.popover.shadow}',
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
