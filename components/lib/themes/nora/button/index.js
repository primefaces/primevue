export default {
    root: {
        borderRadius: '{form.field.border.radius}',
        roundedBorderRadius: '2rem',
        gap: '0.5rem',
        paddingX: '{form.field.padding.x}',
        paddingY: '{form.field.padding.y}',
        iconOnlyWidth: '2.5rem',
        sm: {
            fontSize: '0.875rem',
            paddingX: '0.625rem',
            paddingY: '0.375rem'
        },
        lg: {
            fontSize: '1.125rem',
            paddingX: '0.875rem',
            paddingY: '0.625rem'
        },
        label: {
            fontWeight: '700'
        },
        raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            offset: '{focus.ring.offset}'
        },
        badgeSize: '1rem',
        transitionDuration: '{form.field.transition.duration}'
    },
    colorScheme: {
        light: {
            root: {
                primary: {
                    background: '{primary.color}',
                    hoverBackground: '{primary.hover.color}',
                    activeBackground: '{primary.active.color}',
                    borderColor: '{primary.color}',
                    hoverBorderColor: '{primary.hover.color}',
                    activeBorderColor: '{primary.active.color}',
                    color: '{primary.contrast.color}',
                    hoverColor: '{primary.contrast.color}',
                    activeColor: '{primary.contrast.color}',
                    focusRing: {
                        color: '{primary.color}',
                        shadow: 'none'
                    }
                },
                secondary: {
                    background: '{surface.200}',
                    hoverBackground: '{surface.300}',
                    activeBackground: '{surface.400}',
                    borderColor: '{surface.200}',
                    hoverBorderColor: '{surface.300}',
                    activeBorderColor: '{surface.400}',
                    color: '{surface.700}',
                    hoverColor: '{surface.800}',
                    activeColor: '{surface.900}',
                    focusRing: {
                        color: '{surface.700}',
                        shadow: 'none'
                    }
                },
                info: {
                    background: '{sky.600}',
                    hoverBackground: '{sky.700}',
                    activeBackground: '{sky.800}',
                    borderColor: '{sky.600}',
                    hoverBorderColor: '{sky.700}',
                    activeBorderColor: '{sky.800}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{sky.600}',
                        shadow: 'none'
                    }
                },
                success: {
                    background: '{green.600}',
                    hoverBackground: '{green.700}',
                    activeBackground: '{green.800}',
                    borderColor: '{green.600}',
                    hoverBorderColor: '{green.700}',
                    activeBorderColor: '{green.800}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{green.600}',
                        shadow: 'none'
                    }
                },
                warn: {
                    background: '{orange.600}',
                    hoverBackground: '{orange.700}',
                    activeBackground: '{orange.800}',
                    borderColor: '{orange.600}',
                    hoverBorderColor: '{orange.700}',
                    activeBorderColor: '{orange.800}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{orange.600}',
                        shadow: 'none'
                    }
                },
                help: {
                    background: '{purple.600}',
                    hoverBackground: '{purple.700}',
                    activeBackground: '{purple.800}',
                    borderColor: '{purple.600}',
                    hoverBorderColor: '{purple.700}',
                    activeBorderColor: '{purple.800}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{purple.600}',
                        shadow: 'none'
                    }
                },
                danger: {
                    background: '{red.600}',
                    hoverBackground: '{red.700}',
                    activeBackground: '{red.800}',
                    borderColor: '{red.600}',
                    hoverBorderColor: '{red.700}',
                    activeBorderColor: '{red.800}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{red.600}',
                        shadow: 'none'
                    }
                },
                contrast: {
                    background: '{surface.950}',
                    hoverBackground: '{surface.900}',
                    activeBackground: '{surface.800}',
                    borderColor: '{surface.950}',
                    hoverBorderColor: '{surface.900}',
                    activeBorderColor: '{surface.800}',
                    color: '{surface.0}',
                    hoverColor: '{surface.0}',
                    activeColor: '{surface.0}',
                    focusRing: {
                        color: '{surface.950}',
                        shadow: 'none'
                    }
                }
            },
            outlined: {
                primary: {
                    hoverBackground: '{primary.50}',
                    activeBackground: '{primary.100}',
                    borderColor: '{primary.color}',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    borderColor: '{surface.600}',
                    color: '{surface.600}'
                },
                success: {
                    hoverBackground: '{green.50}',
                    activeBackground: '{green.100}',
                    borderColor: '{green.600}',
                    color: '{green.600}'
                },
                info: {
                    hoverBackground: '{sky.50}',
                    activeBackground: '{sky.100}',
                    borderColor: '{sky.600}',
                    color: '{sky.600}'
                },
                warn: {
                    hoverBackground: '{orange.50}',
                    activeBackground: '{orange.100}',
                    borderColor: '{orange.600}',
                    color: '{orange.600}'
                },
                help: {
                    hoverBackground: '{purple.50}',
                    activeBackground: '{purple.100}',
                    borderColor: '{purple.600}',
                    color: '{purple.600}'
                },
                danger: {
                    hoverBackground: '{red.50}',
                    activeBackground: '{red.100}',
                    borderColor: '{red.600}',
                    color: '{red.600}'
                },
                contrast: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    borderColor: '{surface.950}',
                    color: '{surface.950}'
                },
                plain: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    borderColor: '{surface.900}',
                    color: '{surface.900}'
                }
            },
            text: {
                primary: {
                    hoverBackground: '{primary.50}',
                    activeBackground: '{primary.100}',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    color: '{surface.600}'
                },
                success: {
                    hoverBackground: '{green.50}',
                    activeBackground: '{green.100}',
                    color: '{green.600}'
                },
                info: {
                    hoverBackground: '{sky.50}',
                    activeBackground: '{sky.100}',
                    color: '{sky.600}'
                },
                warn: {
                    hoverBackground: '{orange.50}',
                    activeBackground: '{orange.100}',
                    color: '{orange.600}'
                },
                help: {
                    hoverBackground: '{purple.50}',
                    activeBackground: '{purple.100}',
                    color: '{purple.600}'
                },
                danger: {
                    hoverBackground: '{red.50}',
                    activeBackground: '{red.100}',
                    color: '{red.600}'
                },
                plain: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    color: '{surface.900}'
                }
            },
            link: {
                color: '{primary.color}',
                hoverColor: '{primary.color}',
                activeColor: '{primary.color}'
            }
        },
        dark: {
            root: {
                primary: {
                    background: '{primary.color}',
                    hoverBackground: '{primary.hover.color}',
                    activeBackground: '{primary.active.color}',
                    borderColor: '{primary.color}',
                    hoverBorderColor: '{primary.hover.color}',
                    activeBorderColor: '{primary.active.color}',
                    color: '{primary.contrast.color}',
                    hoverColor: '{primary.contrast.color}',
                    activeColor: '{primary.contrast.color}',
                    focusRing: {
                        color: '{primary.color}',
                        shadow: 'none'
                    }
                },
                secondary: {
                    background: '{surface.700}',
                    hoverBackground: '{surface.600}',
                    activeBackground: '{surface.500}',
                    borderColor: '{surface.700}',
                    hoverBorderColor: '{surface.600}',
                    activeBorderColor: '{surface.500}',
                    color: '{surface.200}',
                    hoverColor: '{surface.100}',
                    activeColor: '{surface.0}',
                    focusRing: {
                        color: '{surface.200}',
                        shadow: 'none'
                    }
                },
                info: {
                    background: '{sky.500}',
                    hoverBackground: '{sky.400}',
                    activeBackground: '{sky.300}',
                    borderColor: '{sky.500}',
                    hoverBorderColor: '{sky.400}',
                    activeBorderColor: '{sky.300}',
                    color: '{sky.950}',
                    hoverColor: '{sky.950}',
                    activeColor: '{sky.950}',
                    focusRing: {
                        color: '{sky.500}',
                        shadow: 'none'
                    }
                },
                success: {
                    background: '{green.500}',
                    hoverBackground: '{green.400}',
                    activeBackground: '{green.300}',
                    borderColor: '{green.500}',
                    hoverBorderColor: '{green.400}',
                    activeBorderColor: '{green.300}',
                    color: '{green.950}',
                    hoverColor: '{green.950}',
                    activeColor: '{green.950}',
                    focusRing: {
                        color: '{green.500}',
                        shadow: 'none'
                    }
                },
                warn: {
                    background: '{orange.500}',
                    hoverBackground: '{orange.400}',
                    activeBackground: '{orange.300}',
                    borderColor: '{orange.500}',
                    hoverBorderColor: '{orange.400}',
                    activeBorderColor: '{orange.300}',
                    color: '{orange.950}',
                    hoverColor: '{orange.950}',
                    activeColor: '{orange.950}',
                    focusRing: {
                        color: '{orange.500}',
                        shadow: 'none'
                    }
                },
                help: {
                    background: '{purple.500}',
                    hoverBackground: '{purple.400}',
                    activeBackground: '{purple.300}',
                    borderColor: '{purple.500}',
                    hoverBorderColor: '{purple.400}',
                    activeBorderColor: '{purple.300}',
                    color: '{purple.950}',
                    hoverColor: '{purple.950}',
                    activeColor: '{purple.950}',
                    focusRing: {
                        color: '{purple.500}',
                        shadow: 'none'
                    }
                },
                danger: {
                    background: '{red.500}',
                    hoverBackground: '{red.400}',
                    activeBackground: '{red.300}',
                    borderColor: '{red.500}',
                    hoverBorderColor: '{red.400}',
                    activeBorderColor: '{red.300}',
                    color: '{red.950}',
                    hoverColor: '{red.950}',
                    activeColor: '{red.950}',
                    focusRing: {
                        color: '{red.500}',
                        shadow: 'none'
                    }
                },
                contrast: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.100}',
                    activeBackground: '{surface.200}',
                    borderColor: '{surface.0}',
                    hoverBorderColor: '{surface.100}',
                    activeBorderColor: '{surface.200}',
                    color: '{surface.950}',
                    hoverColor: '{surface.950}',
                    activeColor: '{surface.950}',
                    focusRing: {
                        color: '{surface.0}',
                        shadow: 'none'
                    }
                }
            },
            outlined: {
                primary: {
                    hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                    borderColor: '{primary.color}',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: 'rgba(255,255,255,0.04)',
                    activeBackground: 'rgba(255,255,255,0.16)',
                    borderColor: '{surface.400}',
                    color: '{surface.400}'
                },
                success: {
                    hoverBackground: '{green.950}',
                    activeBackground: '{green.900}',
                    borderColor: '{green.500}',
                    color: '{green.500}'
                },
                info: {
                    hoverBackground: '{sky.950}',
                    activeBackground: '{sky.900}',
                    borderColor: '{sky.500}',
                    color: '{sky.500}'
                },
                warn: {
                    hoverBackground: '{orange.950}',
                    activeBackground: '{orange.900}',
                    borderColor: '{orange.500}',
                    color: '{orange.500}'
                },
                help: {
                    hoverBackground: '{purple.950}',
                    activeBackground: '{purple.900}',
                    borderColor: '{purple.500}',
                    color: '{purple.500}'
                },
                danger: {
                    hoverBackground: '{red.950}',
                    activeBackground: '{red.900}',
                    borderColor: '{red.500}',
                    color: '{red.500}'
                },
                contrast: {
                    hoverBackground: '{surface.800}',
                    activeBackground: '{surface.700}',
                    borderColor: '{surface.0}',
                    color: '{surface.0}'
                },
                plain: {
                    hoverBackground: '{surface.800}',
                    activeBackground: '{surface.700}',
                    borderColor: '{surface.0}',
                    color: '{surface.0}'
                }
            },
            text: {
                primary: {
                    hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: '{surface.800}',
                    activeBackground: '{surface.700}',
                    color: '{surface.400}'
                },
                success: {
                    hoverBackground: 'color-mix(in srgb, {green.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {green.400}, transparent 84%)',
                    color: '{green.500}'
                },
                info: {
                    hoverBackground: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                    color: '{sky.500}'
                },
                warn: {
                    hoverBackground: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                    color: '{orange.500}'
                },
                help: {
                    hoverBackground: 'color-mix(in srgb, {purple.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {purple.400}, transparent 84%)',
                    color: '{purple.500}'
                },
                danger: {
                    hoverBackground: 'color-mix(in srgb, {red.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {red.400}, transparent 84%)',
                    color: '{red.500}'
                },
                plain: {
                    hoverBackground: '{surface.800}',
                    activeBackground: '{surface.700}',
                    color: '{surface.0}'
                }
            },
            link: {
                color: '{primary.color}',
                hoverColor: '{primary.color}',
                activeColor: '{primary.color}'
            }
        }
    }
};
