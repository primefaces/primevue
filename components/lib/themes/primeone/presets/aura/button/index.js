export default {
    variables: {
        colorScheme: {
            light: {
                root: {
                    primary: {
                        background: '{primary.color}',
                        backgroundHover: '{primary.hoverColor}',
                        backgroundActive: '{primary.activeColor}',
                        borderColor: '{primary.color}',
                        borderColorHover: '{primary.hoverColor}',
                        borderColorActive: '{primary.activeColor}',
                        textColor: '{primary.inverseColor}',
                        textColorHover: '{primary.inverseColor}',
                        textColorActive: '{primary.inverseColor}'
                    },
                    secondary: {
                        background: '{surface.100}',
                        backgroundHover: '{surface.200}',
                        backgroundActive: '{surface.300}',
                        borderColor: '{surface.100}',
                        borderColorHover: '{surface.200}',
                        borderColorActive: '{surface.300}',
                        textColor: '{surface.600}',
                        textColorHover: '{surface.700}',
                        textColorActive: '{surface.800}'
                    },
                    info: {
                        background: '{sky.500}',
                        backgroundHover: '{sky.600}',
                        backgroundActive: '{sky.700}',
                        borderColor: '{sky.500}',
                        borderColorHover: '{sky.600}',
                        borderColorActive: '{sky.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    success: {
                        background: '{green.500}',
                        backgroundHover: '{green.600}',
                        backgroundActive: '{green.700}',
                        borderColor: '{green.500}',
                        borderColorHover: '{green.600}',
                        borderColorActive: '{green.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    warn: {
                        background: '{orange.500}',
                        backgroundHover: '{orange.600}',
                        backgroundActive: '{orange.700}',
                        borderColor: '{orange.500}',
                        borderColorHover: '{orange.600}',
                        borderColorActive: '{orange.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    help: {
                        background: '{purple.500}',
                        backgroundHover: '{purple.600}',
                        backgroundActive: '{purple.700}',
                        borderColor: '{purple.500}',
                        borderColorHover: '{purple.600}',
                        borderColorActive: '{purple.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    danger: {
                        background: '{red.500}',
                        backgroundHover: '{red.600}',
                        backgroundActive: '{red.700}',
                        borderColor: '{red.500}',
                        borderColorHover: '{red.600}',
                        borderColorActive: '{red.700}',
                        textColor: '#ffffff',
                        textColorHover: '#ffffff',
                        textColorActive: '#ffffff'
                    },
                    contrast: {
                        background: '{surface.950}',
                        backgroundHover: '{surface.900}',
                        backgroundActive: '{surface.800}',
                        borderColor: '{surface.950}',
                        borderColorHover: '{surface.900}',
                        borderColorActive: '{surface.800}',
                        textColor: '{surface.0}',
                        textColorHover: '{surface.0}',
                        textColorActive: '{surface.0}'
                    }
                },
                outlined: {
                    primary: {
                        backgroundHover: '{primary.50}',
                        backgroundActive: '{primary.100}',
                        borderColor: '{primary.200}',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        borderColor: '{surface.200}',
                        textColor: '{surface.500}'
                    },
                    success: {
                        backgroundHover: '{green.50}',
                        backgroundActive: '{green.100}',
                        borderColor: '{green.200}',
                        textColor: '{green.500}'
                    },
                    info: {
                        backgroundHover: '{sky.50}',
                        backgroundActive: '{sky.100}',
                        borderColor: '{sky.200}',
                        textColor: '{sky.500}'
                    },
                    warn: {
                        backgroundHover: '{orange.50}',
                        backgroundActive: '{orange.100}',
                        borderColor: '{orange.200}',
                        textColor: '{orange.500}'
                    },
                    help: {
                        backgroundHover: '{purple.50}',
                        backgroundActive: '{purple.100}',
                        borderColor: '{purple.200}',
                        textColor: '{purple.500}'
                    },
                    danger: {
                        backgroundHover: '{red.50}',
                        backgroundActive: '{red.100}',
                        borderColor: '{red.200}',
                        textColor: '{red.500}'
                    },
                    contrast: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        borderColor: '{surface.700}',
                        textColor: '{surface.950}'
                    },
                    plain: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        borderColor: '{surface.200}',
                        textColor: '{surface.700}'
                    }
                },
                text: {
                    primary: {
                        backgroundHover: '{primary.50}',
                        backgroundActive: '{primary.100}',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        textColor: '{surface.500}'
                    },
                    success: {
                        backgroundHover: '{green.50}',
                        backgroundActive: '{green.100}',
                        textColor: '{green.500}'
                    },
                    info: {
                        backgroundHover: '{sky.50}',
                        backgroundActive: '{sky.100}',
                        textColor: '{sky.500}'
                    },
                    warn: {
                        backgroundHover: '{orange.50}',
                        backgroundActive: '{orange.100}',
                        textColor: '{orange.500}'
                    },
                    help: {
                        backgroundHover: '{purple.50}',
                        backgroundActive: '{purple.100}',
                        textColor: '{purple.600}'
                    },
                    danger: {
                        backgroundHover: '{red.50}',
                        backgroundActive: '{red.100}',
                        textColor: '{red.500}'
                    },
                    plain: {
                        backgroundHover: '{surface.50}',
                        backgroundActive: '{surface.100}',
                        textColor: '{surface.700}'
                    }
                },
                link: {
                    textColor: '{primary.color}',
                    textColorHover: '{primary.color}',
                    textColorActive: '{primary.color}'
                }
            },
            dark: {
                root: {
                    primary: {
                        background: '{primary.color}',
                        backgroundHover: '{primary.hoverColor}',
                        backgroundActive: '{primary.activeColor}',
                        borderColor: '{primary.color}',
                        borderColorHover: '{primary.hoverColor}',
                        borderColorActive: '{primary.activeColor}',
                        textColor: '{primary.inverseColor}',
                        textColorHover: '{primary.inverseColor}',
                        textColorActive: '{primary.inverseColor}'
                    },
                    secondary: {
                        background: '{surface.800}',
                        backgroundHover: '{surface.700}',
                        backgroundActive: '{surface.600}',
                        borderColor: '{surface.800}',
                        borderColorHover: '{surface.700}',
                        borderColorActive: '{surface.600}',
                        textColor: '{surface.300}',
                        textColorHover: '{surface.200}',
                        textColorActive: '{surface.100}'
                    },
                    info: {
                        background: '{sky.400}',
                        backgroundHover: '{sky.300}',
                        backgroundActive: '{sky.200}',
                        borderColor: '{sky.400}',
                        borderColorHover: '{sky.300}',
                        borderColorActive: '{sky.200}',
                        textColor: '{sky.950}',
                        textColorHover: '{sky.950}',
                        textColorActive: '{sky.950}'
                    },
                    success: {
                        background: '{green.400}',
                        backgroundHover: '{green.300}',
                        backgroundActive: '{green.200}',
                        borderColor: '{green.400}',
                        borderColorHover: '{green.300}',
                        borderColorActive: '{green.200}',
                        textColor: '{green.950}',
                        textColorHover: '{green.950}',
                        textColorActive: '{green.950}'
                    },
                    warn: {
                        background: '{orange.400}',
                        backgroundHover: '{orange.300}',
                        backgroundActive: '{orange.200}',
                        borderColor: '{orange.400}',
                        borderColorHover: '{orange.300}',
                        borderColorActive: '{orange.200}',
                        textColor: '{orange.950}',
                        textColorHover: '{orange.950}',
                        textColorActive: '{orange.950}'
                    },
                    help: {
                        background: '{purple.400}',
                        backgroundHover: '{purple.300}',
                        backgroundActive: '{purple.200}',
                        borderColor: '{purple.400}',
                        borderColorHover: '{purple.300}',
                        borderColorActive: '{purple.200}',
                        textColor: '{purple.950}',
                        textColorHover: '{purple.950}',
                        textColorActive: '{purple.950}'
                    },
                    danger: {
                        background: '{red.400}',
                        backgroundHover: '{red.300}',
                        backgroundActive: '{red.200}',
                        borderColor: '{red.400}',
                        borderColorHover: '{red.300}',
                        borderColorActive: '{red.200}',
                        textColor: '{red.950}',
                        textColorHover: '{red.950}',
                        textColorActive: '{red.950}'
                    },
                    contrast: {
                        background: '{surface.0}',
                        backgroundHover: '{surface.100}',
                        backgroundActive: '{surface.200}',
                        borderColor: '{surface.0}',
                        borderColorHover: '{surface.100}',
                        borderColorActive: '{surface.200}',
                        textColor: '{surface.950}',
                        textColorHover: '{surface.950}',
                        textColorActive: '{surface.950}'
                    }
                },
                outlined: {
                    primary: {
                        backgroundHover: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                        borderColor: '{primary.900}',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: 'rgba(255,255,255,0.04)',
                        backgroundActive: 'rgba(255,255,255,0.16)',
                        borderColor: '{surface.700}',
                        textColor: '{surface.400}'
                    },
                    success: {
                        backgroundHover: 'color-mix(in srgb, {green.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {green.400}, transparent 84%)',
                        borderColor: '{green.900}',
                        textColor: '{green.400}'
                    },
                    info: {
                        backgroundHover: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                        borderColor: '{sky.900}',
                        textColor: '{sky.400}'
                    },
                    warn: {
                        backgroundHover: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                        borderColor: '{orange.900}',
                        textColor: '{orange.400}'
                    },
                    help: {
                        backgroundHover: 'color-mix(in srgb, {help.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {help.400}, transparent 84%)',
                        borderColor: '{purple.900}',
                        textColor: '{purple.400}'
                    },
                    danger: {
                        backgroundHover: 'color-mix(in srgb, {danger.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {danger.400}, transparent 84%)',
                        borderColor: '{red.900}',
                        textColor: '{red.400}'
                    },
                    contrast: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        borderColor: '{surface.500}',
                        textColor: '{surface.0}'
                    },
                    plain: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        borderColor: '{surface.600}',
                        textColor: '{surface.0}'
                    }
                },
                text: {
                    primary: {
                        backgroundHover: 'color-mix(in srgb, {primary.color}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {primary.color}, transparent 84%)',
                        textColor: '{primary.color}'
                    },
                    secondary: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        textColor: '{surface.400}'
                    },
                    success: {
                        backgroundHover: 'color-mix(in srgb, {green.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {green.400}, transparent 84%)',
                        textColor: '{green.400}'
                    },
                    info: {
                        backgroundHover: 'color-mix(in srgb, {sky.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {sky.400}, transparent 84%)',
                        textColor: '{sky.400}'
                    },
                    warn: {
                        backgroundHover: 'color-mix(in srgb, {orange.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {orange.400}, transparent 84%)',
                        textColor: '{orange.400}'
                    },
                    help: {
                        backgroundHover: 'color-mix(in srgb, {purple.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {purple.400}, transparent 84%)',
                        textColor: '{purple.400}'
                    },
                    danger: {
                        backgroundHover: 'color-mix(in srgb, {red.400}, transparent 96%)',
                        backgroundActive: 'color-mix(in srgb, {red.400}, transparent 84%)',
                        textColor: '{red.400}'
                    },
                    plain: {
                        backgroundHover: '{surface.800}',
                        backgroundActive: '{surface.700}',
                        textColor: '{surface.0}'
                    }
                },
                link: {
                    textColor: '{primary.color}',
                    textColorHover: '{primary.color}',
                    textColorActive: '{primary.color}'
                }
            }
        }
    }
};
