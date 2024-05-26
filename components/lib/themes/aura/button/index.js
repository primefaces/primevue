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
            fontWeight: '500'
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
                    background: '{surface.100}',
                    hoverBackground: '{surface.200}',
                    activeBackground: '{surface.300}',
                    borderColor: '{surface.100}',
                    hoverBorderColor: '{surface.200}',
                    activeBorderColor: '{surface.300}',
                    color: '{surface.600}',
                    hoverColor: '{surface.700}',
                    activeColor: '{surface.800}',
                    focusRing: {
                        color: '{surface.600}',
                        shadow: 'none'
                    }
                },
                info: {
                    background: '{sky.500}',
                    hoverBackground: '{sky.600}',
                    activeBackground: '{sky.700}',
                    borderColor: '{sky.500}',
                    hoverBorderColor: '{sky.600}',
                    activeBorderColor: '{sky.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{sky.500}',
                        shadow: 'none'
                    }
                },
                success: {
                    background: '{green.500}',
                    hoverBackground: '{green.600}',
                    activeBackground: '{green.700}',
                    borderColor: '{green.500}',
                    hoverBorderColor: '{green.600}',
                    activeBorderColor: '{green.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{green.500}',
                        shadow: 'none'
                    }
                },
                warn: {
                    background: '{orange.500}',
                    hoverBackground: '{orange.600}',
                    activeBackground: '{orange.700}',
                    borderColor: '{orange.500}',
                    hoverBorderColor: '{orange.600}',
                    activeBorderColor: '{orange.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{orange.500}',
                        shadow: 'none'
                    }
                },
                help: {
                    background: '{purple.500}',
                    hoverBackground: '{purple.600}',
                    activeBackground: '{purple.700}',
                    borderColor: '{purple.500}',
                    hoverBorderColor: '{purple.600}',
                    activeBorderColor: '{purple.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{purple.500}',
                        shadow: 'none'
                    }
                },
                danger: {
                    background: '{red.500}',
                    hoverBackground: '{red.600}',
                    activeBackground: '{red.700}',
                    borderColor: '{red.500}',
                    hoverBorderColor: '{red.600}',
                    activeBorderColor: '{red.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: '{red.500}',
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
                    borderColor: '{primary.200}',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    borderColor: '{surface.200}',
                    color: '{surface.500}'
                },
                success: {
                    hoverBackground: '{green.50}',
                    activeBackground: '{green.100}',
                    borderColor: '{green.200}',
                    color: '{green.500}'
                },
                info: {
                    hoverBackground: '{sky.50}',
                    activeBackground: '{sky.100}',
                    borderColor: '{sky.200}',
                    color: '{sky.500}'
                },
                warn: {
                    hoverBackground: '{orange.50}',
                    activeBackground: '{orange.100}',
                    borderColor: '{orange.200}',
                    color: '{orange.500}'
                },
                help: {
                    hoverBackground: '{purple.50}',
                    activeBackground: '{purple.100}',
                    borderColor: '{purple.200}',
                    color: '{purple.500}'
                },
                danger: {
                    hoverBackground: '{red.50}',
                    activeBackground: '{red.100}',
                    borderColor: '{red.200}',
                    color: '{red.500}'
                },
                contrast: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    borderColor: '{surface.700}',
                    color: '{surface.950}'
                },
                plain: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    borderColor: '{surface.200}',
                    color: '{surface.700}'
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
                    color: '{surface.500}'
                },
                success: {
                    hoverBackground: '{green.50}',
                    activeBackground: '{green.100}',
                    color: '{green.500}'
                },
                info: {
                    hoverBackground: '{sky.50}',
                    activeBackground: '{sky.100}',
                    color: '{sky.500}'
                },
                warn: {
                    hoverBackground: '{orange.50}',
                    activeBackground: '{orange.100}',
                    color: '{orange.500}'
                },
                help: {
                    hoverBackground: '{purple.50}',
                    activeBackground: '{purple.100}',
                    color: '{purple.500}'
                },
                danger: {
                    hoverBackground: '{red.50}',
                    activeBackground: '{red.100}',
                    color: '{red.500}'
                },
                plain: {
                    hoverBackground: '{surface.50}',
                    activeBackground: '{surface.100}',
                    color: '{surface.700}'
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
                    background: '{surface.800}',
                    hoverBackground: '{surface.700}',
                    activeBackground: '{surface.600}',
                    borderColor: '{surface.800}',
                    hoverBorderColor: '{surface.700}',
                    activeBorderColor: '{surface.600}',
                    color: '{surface.300}',
                    hoverColor: '{surface.200}',
                    activeColor: '{surface.100}',
                    focusRing: {
                        color: '{surface.300}',
                        shadow: 'none'
                    }
                },
                info: {
                    background: '{sky.400}',
                    hoverBackground: '{sky.300}',
                    activeBackground: '{sky.200}',
                    borderColor: '{sky.400}',
                    hoverBorderColor: '{sky.300}',
                    activeBorderColor: '{sky.200}',
                    color: '{sky.950}',
                    hoverColor: '{sky.950}',
                    activeColor: '{sky.950}',
                    focusRing: {
                        color: '{sky.400}',
                        shadow: 'none'
                    }
                },
                success: {
                    background: '{green.400}',
                    hoverBackground: '{green.300}',
                    activeBackground: '{green.200}',
                    borderColor: '{green.400}',
                    hoverBorderColor: '{green.300}',
                    activeBorderColor: '{green.200}',
                    color: '{green.950}',
                    hoverColor: '{green.950}',
                    activeColor: '{green.950}',
                    focusRing: {
                        color: '{green.400}',
                        shadow: 'none'
                    }
                },
                warn: {
                    background: '{orange.400}',
                    hoverBackground: '{orange.300}',
                    activeBackground: '{orange.200}',
                    borderColor: '{orange.400}',
                    hoverBorderColor: '{orange.300}',
                    activeBorderColor: '{orange.200}',
                    color: '{orange.950}',
                    hoverColor: '{orange.950}',
                    activeColor: '{orange.950}',
                    focusRing: {
                        color: '{orange.400}',
                        shadow: 'none'
                    }
                },
                help: {
                    background: '{purple.400}',
                    hoverBackground: '{purple.300}',
                    activeBackground: '{purple.200}',
                    borderColor: '{purple.400}',
                    hoverBorderColor: '{purple.300}',
                    activeBorderColor: '{purple.200}',
                    color: '{purple.950}',
                    hoverColor: '{purple.950}',
                    activeColor: '{purple.950}',
                    focusRing: {
                        color: '{purple.400}',
                        shadow: 'none'
                    }
                },
                danger: {
                    background: '{red.400}',
                    hoverBackground: '{red.300}',
                    activeBackground: '{red.200}',
                    borderColor: '{red.400}',
                    hoverBorderColor: '{red.300}',
                    activeBorderColor: '{red.200}',
                    color: '{red.950}',
                    hoverColor: '{red.950}',
                    activeColor: '{red.950}',
                    focusRing: {
                        color: '{red.400}',
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
                    borderColor: '{primary.700}',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: 'rgba(255,255,255,0.04)',
                    activeBackground: 'rgba(255,255,255,0.16)',
                    borderColor: '{surface.700}',
                    color: '{surface.400}'
                },
                success: {
                    hoverBackground: 'color-mix(in srgb, {green.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {green.400}, transparent 84%)',
                    borderColor: '{green.700}',
                    color: '{green.400}'
                },
                info: {
                    hoverBackground: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                    borderColor: '{sky.700}',
                    color: '{sky.400}'
                },
                warn: {
                    hoverBackground: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                    borderColor: '{orange.700}',
                    color: '{orange.400}'
                },
                help: {
                    hoverBackground: 'color-mix(in srgb, {help.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {help.400}, transparent 84%)',
                    borderColor: '{purple.700}',
                    color: '{purple.400}'
                },
                danger: {
                    hoverBackground: 'color-mix(in srgb, {danger.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {danger.400}, transparent 84%)',
                    borderColor: '{red.700}',
                    color: '{red.400}'
                },
                contrast: {
                    hoverBackground: '{surface.800}',
                    activeBackground: '{surface.700}',
                    borderColor: '{surface.500}',
                    color: '{surface.0}'
                },
                plain: {
                    hoverBackground: '{surface.800}',
                    activeBackground: '{surface.700}',
                    borderColor: '{surface.600}',
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
                    color: '{green.400}'
                },
                info: {
                    hoverBackground: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                    color: '{sky.400}'
                },
                warn: {
                    hoverBackground: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                    color: '{orange.400}'
                },
                help: {
                    hoverBackground: 'color-mix(in srgb, {purple.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {purple.400}, transparent 84%)',
                    color: '{purple.400}'
                },
                danger: {
                    hoverBackground: 'color-mix(in srgb, {red.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {red.400}, transparent 84%)',
                    color: '{red.400}'
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
