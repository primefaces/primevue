export default {
    root: {
        borderRadius: '{content.border.radius}',
        borderWidth: '1px',
        transitionDuration: '{transition.duration}'
    },
    content: {
        padding: '0.75rem 1rem',
        gap: '0.5rem'
    },
    text: {
        fontSize: '1rem',
        fontWeight: '500'
    },
    icon: {
        size: '1.25rem'
    },
    closeButton: {
        width: '2rem',
        height: '2rem',
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
                background: 'color-mix(in srgb, {colorinfo.100}, transparent 5%)',
                borderColor: 'transparent',
                color: '{colorinfo.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{colorinfo.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {colorinfo.200}'
                    }
                }
            },
            success: {
                background: 'color-mix(in srgb, {colorsuccess.50}, transparent 5%)',
                borderColor: 'transparent',
                color: '{colorsuccess.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{colorsuccess.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {colorsuccess.200}'
                    }
                }
            },
            warn: {
                background: 'color-mix(in srgb,{colorwarning.100}, transparent 5%)',
                borderColor: 'transparent',
                color: '{colorwarning.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{colorwarning.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {colorwarning.200}'
                    }
                }
            },
            error: {
                background: 'color-mix(in srgb, {colordanger.100}, transparent 5%)',
                borderColor: 'transparent',
                color: '{colordanger.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{colordanger.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {colordanger.200}'
                    }
                }
            },
            secondary: {
                background: '{surface.100}',
                borderColor: 'transparent',
                color: '{surface.600}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.200}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {surface.200}'
                    }
                }
            },
            contrast: {
                background: '{surface.900}',
                borderColor: 'transparent',
                color: '{surface.100}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.800}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {surface.400}'
                    }
                }
            }
        },
        dark: {
            info: {
                background: 'color-mix(in srgb, {colorinfo.500}, transparent 84%)',
                borderColor: 'transparent',
                color: '{colorinfo.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colorinfo.500}, transparent 80%)'
                    }
                }
            },
            success: {
                background: 'color-mix(in srgb, {colorsuccess.500}, transparent 84%)',
                borderColor: 'transparent',
                color: '{colorsuccess.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colorsuccess.500}, transparent 80%)'
                    }
                }
            },
            warn: {
                background: 'color-mix(in srgb, {colorwarning.500}, transparent 84%)',
                borderColor: 'transparent',
                color: '{colorwarning.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colorwarning.500}, transparent 80%)'
                    }
                }
            },
            error: {
                background: 'color-mix(in srgb, {colordanger.500}, transparent 84%)',
                borderColor: 'transparent',
                color: '{colordanger.500}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: 'rgba(255, 255, 255, 0.05)',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colordanger.500}, transparent 80%)'
                    }
                }
            },
            secondary: {
                background: '{surface.800}',
                borderColor: 'transparent',
                color: '{surface.300}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.700}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)'
                    }
                }
            },
            contrast: {
                background: '{surface.0}',
                borderColor: 'transparent',
                color: '{surface.900}',
                shadow: 'none',
                closeButton: {
                    hoverBackground: '{surface.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {surface.900}, transparent 80%)'
                    }
                }
            }
        }
    }
};
