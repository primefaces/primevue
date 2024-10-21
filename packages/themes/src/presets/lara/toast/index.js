export default {
    root: {
        width: '25rem',
        borderRadius: '{content.border.radius}',
        borderWidth: '0 0 0 6px',
        transitionDuration: '{transition.duration}'
    },
    icon: {
        size: '1.25rem'
    },
    content: {
        padding: '{overlay.popover.padding}',
        gap: '0.5rem'
    },
    text: {
        gap: '0.5rem'
    },
    summary: {
        fontWeight: '500',
        fontSize: '1rem'
    },
    detail: {
        fontWeight: '500',
        fontSize: '0.875rem'
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
            blur: '1.5px',
            info: {
                background: 'color-mix(in srgb, {colorinfo.100}, transparent 5%)',
                borderColor: '{colorinfo.500}',
                color: '{colorinfo.600}',
                detailColor: '{surface.700}',
                shadow: '{overlay.popover.shadow}',
                closeButton: {
                    hoverBackground: '{colorinfo.100}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: '0 0 0 0.2rem {colorinfo.200}'
                    }
                }
            },
            success: {
                background: 'color-mix(in srgb, {colorsuccess.100}, transparent 5%)',
                borderColor: '{colorsuccess.500}',
                color: '{colorsuccess.600}',
                detailColor: '{surface.700}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: '{colorwarning.500}',
                color: '{colorwarning.600}',
                detailColor: '{surface.700}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: '{colordanger.500}',
                color: '{colordanger.600}',
                detailColor: '{surface.700}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: '{surface.500}',
                color: '{surface.600}',
                detailColor: '{surface.700}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: '{primary.color}',
                color: '{surface.100}',
                detailColor: '{surface.0}',
                shadow: '{overlay.popover.shadow}',
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
            blur: '10px',
            info: {
                background: 'color-mix(in srgb, {colorinfo.500}, transparent 84%)',
                borderColor: 'color-mix(in srgb, {colorinfo.700}, transparent 64%)',
                color: '{colorinfo.500}',
                detailColor: '{surface.0}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: 'color-mix(in srgb, {colorsuccess.700}, transparent 64%)',
                color: '{colorsuccess.500}',
                detailColor: '{surface.0}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: 'color-mix(in srgb, {colorwarning.700}, transparent 64%)',
                color: '{colorwarning.500}',
                detailColor: '{surface.0}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: 'color-mix(in srgb, {colordanger.700}, transparent 64%)',
                color: '{colordanger.500}',
                detailColor: '{surface.0}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: '{surface.700}',
                color: '{surface.300}',
                detailColor: '{surface.0}',
                shadow: '{overlay.popover.shadow}',
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
                borderColor: '{surface.100}',
                color: '{surface.900}',
                detailColor: '{surface.900}',
                shadow: '{overlay.popover.shadow}',
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
