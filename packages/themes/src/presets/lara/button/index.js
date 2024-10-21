export default {
    root: {
        borderRadius: '{form.field.border.radius}',
        roundedBorderRadius: '2rem',
        gap: '0.5rem',
        paddingX: '16px',
        paddingY: '{form.field.padding.y}',
        iconOnlyWidth: '2.75rem',
        sm: {
            fontSize: '0.875rem',
            paddingX: '0.625rem',
            paddingY: '0.5rem'
        },
        lg: {
            fontSize: '1.125rem',
            paddingX: '0.875rem',
            paddingY: '0.75rem'
        },
        label: {
            fontWeight: '400'
        },
        raisedShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        focusRing: {
            width: '{form.field.focus.ring.width}',
            style: '{form.field.focus.ring.style}',
            offset: '{form.field.focus.ring.offset}'
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
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem {primary.200}'
                    }
                },
                secondary: {
                    background: '{primary.200}',
                    hoverBackground: '{primary.300}',
                    activeBackground: '{primary.300}',
                    borderColor: '{primary.100}',
                    hoverBorderColor: '{primary.200}',
                    activeBorderColor: '{primary.300}',
                    color: '{primary.500}',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.600}',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem {surface.200}'
                    }
                },
                info: {
                    background: '{colorinfo.500}',
                    hoverBackground: '{colorinfo.600}',
                    activeBackground: '{colorinfo.700}',
                    borderColor: '{colorinfo.500}',
                    hoverBorderColor: '{colorinfo.600}',
                    activeBorderColor: '{colorinfo.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem {colorinfo.200}'
                    }
                },
                success: {
                    background: '{colorsuccess.500}',
                    hoverBackground: '{colorsuccess.600}',
                    activeBackground: '{colorsuccess.700}',
                    borderColor: '{colorsuccess.500}',
                    hoverBorderColor: '{colorsuccess.600}',
                    activeBorderColor: '{colorsuccess.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem {colorsuccess.200}'
                    }
                },
                warn: {
                    background: '{colorwarning.500}',
                    hoverBackground: '{colorwarning.600}',
                    activeBackground: '{colorwarning.700}',
                    borderColor: '{colorwarning.500}',
                    hoverBorderColor: '{colorwarning.600}',
                    activeBorderColor: '{colorwarning.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem {colorwarning.200}'
                    }
                },
                danger: {
                    background: '{colordanger.500}',
                    hoverBackground: '{colordanger.600}',
                    activeBackground: '{colordanger.700}',
                    borderColor: '{colordanger.500}',
                    hoverBorderColor: '{colordanger.600}',
                    activeBorderColor: '{colordanger.700}',
                    color: '#ffffff',
                    hoverColor: '#ffffff',
                    activeColor: '#ffffff',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem {colordanger.200}'
                    }
                },
            },
            outlined: {
                primary: {
                    hoverBackground: '{primary.100}',
                    activeBackground: '{primary.100}',
                    borderColor: '{primary.500}',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: '{primary.100}',
                    activeBackground: '{primary.100}',
                    borderColor: '{primary.300}',
                    color: '{primary.500}'
                },
                success: {
                    hoverBackground: '{colorsuccess.100}',
                    activeBackground: '{colorsuccess.100}',
                    borderColor: '{colorsuccess.300}',
                    color: '{colorsuccess.500}'
                },
                info: {
                    hoverBackground: '{colorinfo.100}',
                    activeBackground: '{colorinfo.100}',
                    borderColor: '{colorinfo.300}',
                    color: '{colorinfo.500}'
                },
                warn: {
                    hoverBackground: '{colorwarning.100}',
                    activeBackground: '{colorwarning.100}',
                    borderColor: '{colorwarning.300}',
                    color: '{colorwarning.500}'
                },
                danger: {
                    hoverBackground: '{colordanger.100}',
                    activeBackground: '{colordanger.100}',
                    borderColor: '{colordanger.300}',
                    color: '{colordanger.500}'
                },
                plain: {
                    hoverBackground: '{surface.100}',
                    activeBackground: '{surface.100}',
                    borderColor: '{surface.300}',
                    color: '{surface.700}'
                }
            },
            text: {
                primary: {
                    hoverBackground: '{primary.100}',
                    activeBackground: '{primary.100}',
                    color: '{primary.color}'
                },
                secondary: {
                    hoverBackground: '{surface.100}',
                    activeBackground: '{surface.200}',
                    color: '{surface.800}'
                },
                success: {
                    hoverBackground: '{colorsuccess.100}',
                    activeBackground: '{colorsuccess.100}',
                    color: '{colorsuccess.500}'
                },
                info: {
                    hoverBackground: '{colorinfo.100}',
                    activeBackground: '{colorinfo.100}',
                    color: '{colorinfo.500}'
                },
                warn: {
                    hoverBackground: '{colorwarning.100}',
                    activeBackground: '{colorwarning.100}',
                    color: '{colorwarning.500}'
                },
                danger: {
                    hoverBackground: '{colordanger.100}',
                    activeBackground: '{colordanger.100}',
                    color: '{colordanger.500}'
                },
                plain: {
                    hoverBackground: '{surface.100}',
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
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {primary.color}, transparent 80%)'
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
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {surface.300}, transparent 80%)'
                    }
                },
                info: {
                    background: '{colorinfo.400}',
                    hoverBackground: '{colorinfo.300}',
                    activeBackground: '{colorinfo.200}',
                    borderColor: '{colorinfo.400}',
                    hoverBorderColor: '{colorinfo.300}',
                    activeBorderColor: '{colorinfo.200}',
                    color: '{colorinfo.900}',
                    hoverColor: '{colorinfo.900}',
                    activeColor: '{colorinfo.900}',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colorinfo.400}, transparent 80%)'
                    }
                },
                success: {
                    background: '{colorsuccess.400}',
                    hoverBackground: '{colorsuccess.300}',
                    activeBackground: '{colorsuccess.200}',
                    borderColor: '{colorsuccess.400}',
                    hoverBorderColor: '{colorsuccess.300}',
                    activeBorderColor: '{colorsuccess.200}',
                    color: '{colorsuccess.800}',
                    hoverColor: '{colorsuccess.800}',
                    activeColor: '{colorsuccess.800}',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colorsuccess.400}, transparent 80%)'
                    }
                },
                warn: {
                    background: '{colorwarning.400}',
                    hoverBackground: '{colorwarning.300}',
                    activeBackground: '{colorwarning.200}',
                    borderColor: '{colorwarning.400}',
                    hoverBorderColor: '{colorwarning.300}',
                    activeBorderColor: '{colorwarning.200}',
                    color: '{colorwarning.800}',
                    hoverColor: '{colorwarning.800}',
                    activeColor: '{colorwarning.800}',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colorwarning.400}, transparent 80%)'
                    }
                },
                danger: {
                    background: '{colordanger.400}',
                    hoverBackground: '{colordanger.300}',
                    activeBackground: '{colordanger.200}',
                    borderColor: '{colordanger.400}',
                    hoverBorderColor: '{colordanger.300}',
                    activeBorderColor: '{colordanger.200}',
                    color: '{colordanger.800}',
                    hoverColor: '{colordanger.800}',
                    activeColor: '{colordanger.800}',
                    focusRing: {
                        color: 'transparent',
                        shadow: '0 0 0 0.2rem color-mix(in srgb, {colordanger.400}, transparent 80%)'
                    }
                },
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
                    borderColor: '{surface.color}',
                    color: '{surface.400}',
                },
                success: {
                    hoverBackground: 'color-mix(in srgb, {colorsuccess.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {colorsuccess.400}, transparent 84%)',
                    borderColor: '{colorsuccess.color}',
                    color: '{colorsuccess.400}'
                },
                info: {
                    hoverBackground: 'color-mix(in srgb, {colorinfo.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {colorinfo.400}, transparent 84%)',
                    borderColor: '{colorinfo.color}',
                    color: '{colorinfo.400}'
                },
                warn: {
                    hoverBackground: 'color-mix(in srgb, {colorwarning.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {colorwarning.400}, transparent 84%)',
                    borderColor: '{colorwarning.color}',
                    color: '{colorwarning.400}'
                },
                danger: {
                    hoverBackground: 'color-mix(in srgb, {danger.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {danger.400}, transparent 84%)',
                    borderColor: '{colordanger.color}',
                    color: '{colordanger.400}'
                },
                plain: {
                    hoverBackground: '{surface.800}',
                    activeBackground: '{surface.700}',
                    borderColor: '{surface.color}',
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
                    hoverBackground: '{surface.700}',
                    activeBackground: '{surface.600}',
                    color: '{surface.300}'
                },
                success: {
                    hoverBackground: 'color-mix(in srgb, {colorsuccess.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {colorsuccess.400}, transparent 84%)',
                    color: '{colorsuccess.400}'
                },
                info: {
                    hoverBackground: 'color-mix(in srgb, {colorinfo.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {colorinfo.400}, transparent 84%)',
                    color: '{colorinfo.400}'
                },
                warn: {
                    hoverBackground: 'color-mix(in srgb, {colorwarning.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {colorwarning.400}, transparent 84%)',
                    color: '{colorwarning.400}'
                },
                danger: {
                    hoverBackground: 'color-mix(in srgb, {colordanger.400}, transparent 96%)',
                    activeBackground: 'color-mix(in srgb, {colordanger.400}, transparent 84%)',
                    color: '{colordanger.400}'
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
