export default {
    primitive: {
        borderRadius: {
            none: '0',
            xs: '1px',
            sm: '4px',
            md: '8px',
            lg: '8px',
            xl: '8px'
        },
        colorbrand: { 100: '#f8f6fc', 200: '#f5f2fb', 300: '#eee9f8', 400: '#ab8cb9', 500: '#662E80', 600: '#5c2f71', 700: '#473152', 800: '#564b70', 900: '#383147' },
        colorsuccess: { 100: '#ecf8f8', 200: '#F3FBFB', 300: '#CEECEC', 400: '#58C0C0', 500: '#3BB5B5', 600: '#3AA8A8', 700: '#388181', 800: '#2A5A5A' },
        colordanger: { 100: '#fdf7f8', 200: '#FAEAED', 300: '#E8ADB7', 400: '#D45066', 500: '#CC314B', 600: '#BC3149', 700: '#8D2A3D', 800: '#4A3337' },
        colorwarning: { 100: '#fffcfc', 200: '#fef7f6', 300: '#fac7c2', 400: '#f5887d', 500: '#f37366', 600: '#DF6C61', 700: '#93534c', 800: '#503D3B', },
        colorinfo: { 100: '#D7D7D7', 200: '#BFBFBF', 300: '#A7A7A7', 400: '#8F8F8F', 500: '#515151', 600: '#494949', 700: '#404040', 800: '#333333', 900: '#2F2F2F' },
        colorsurface: { 100: '#fbfbfb', 200: '#F3F3F3', 300: '#e1e1e1', 400: '#D8D8D8', 500: '#ADADAD', 600: '#747474', 700: '#515151', 800: '#333333', 900: '#2F2F2F' },
    },
    semantic: {
        transitionDuration: '0.2s',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'transparent',
            offset: '0'
        },
        disabledOpacity: '0.6',
        iconSize: '1rem',
        anchorGutter: '2px',
        primary: {
            50: '{colorbrand.50}',
            100: '{colorbrand.100}',
            200: '{colorbrand.200}',
            300: '{colorbrand.300}',
            400: '{colorbrand.400}',
            500: '{colorbrand.500}',
            600: '{colorbrand.600}',
            700: '{colorbrand.700}',
            800: '{colorbrand.800}',
            900: '{colorbrand.900}',
        },
        formField: {
            paddingX: '1rem',
            paddingY: '.7rem',
            borderRadius: '{border.radius.md}',
            focusRing: {
                width: '{focus.ring.width}',
                style: '{focus.ring.style}',
                color: '{focus.ring.color}',
                offset: '{focus.ring.offset}',
                shadow: '{focus.ring.shadow}'
            },
            transitionDuration: '{transition.duration}'
        },
        list: {
            padding: '0.5rem 0',
            gap: '0',
            header: {
                padding: '0.625rem 1rem 0 1rem'
            },
            option: {
                padding: '0.625rem 1rem',
                borderRadius: '0'
            },
            optionGroup: {
                padding: '0.625rem 1rem',
                fontWeight: '600'
            }
        },
        content: {
            borderRadius: '{border.radius.md}'
        },
        mask: {
            transitionDuration: '0.15s'
        },
        navigation: {
            list: {
                padding: '0.5rem 0',
                gap: '0'
            },
            item: {
                padding: '0.625rem 1rem',
                borderRadius: '0',
                gap: '0.5rem'
            },
            submenuLabel: {
                padding: '0.625rem 1rem',
                fontWeight: '600'
            },
            submenuIcon: {
                size: '0.875rem'
            }
        },
        overlay: {
            select: {
                borderRadius: '{border.radius.md}',
                shadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
            },
            popover: {
                borderRadius: '{border.radius.md}',
                padding: '1rem',
                shadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            },
            modal: {
                borderRadius: '{border.radius.xl}',
                padding: '1.5rem',
                shadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
            },
            navigation: {
                shadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
            }
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    100: '{colorsurface.100}',
                    200: '{colorsurface.200}',
                    300: '{colorsurface.300}',
                    400: '{colorsurface.400}',
                    500: '{colorsurface.500}',
                    600: '{colorsurface.600}',
                    700: '{colorsurface.700}',
                    800: '{colorsurface.800}',
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.600}',
                    activeColor: '{primary.700}'
                },
                highlight: {
                    background: '{primary.100}',
                    focusBackground: '{primary.100}',
                    color: '{primary.700}',
                    focusColor: '{primary.800}'
                },
                focusRing: {
                    shadow: '0 0 0 0.2rem {primary.200}'
                },
                mask: {
                    background: 'rgba(0,0,0,0.4)',
                    color: '{surface.200}'
                },
                formField: {
                    background: '{surface.0}',
                    disabledBackground: '{surface.200}',
                    filledBackground: '{surface.100}',
                    filledHoverBackground: '{surface.100}',
                    filledFocusBackground: '{surface.0}',
                    borderColor: '{surface.300}',
                    hoverBorderColor: '{primary.color}',
                    focusBorderColor: '{primary.color}',
                    invalidBorderColor: '{colordanger.400}',
                    color: '{surface.700}',
                    disabledColor: '{surface.500}',
                    placeholderColor: '{surface.500}',
                    floatLabelColor: '{surface.500}',
                    floatLabelFocusColor: '{primary.600}',
                    floatLabelActiveColor: '{surface.500}',
                    floatLabelInvalidColor: '{colordanger.400}',
                    iconColor: '{surface.500}',
                    shadow: 'none'
                },
                text: {
                    color: '{surface.700}',
                    hoverColor: '{surface.800}',
                    mutedColor: '{surface.500}',
                    hoverMutedColor: '{surface.600}'
                },
                content: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.100}',
                    borderColor: '{surface.400}',
                    color: '{text.color}',
                    hoverColor: '{text.hover.color}'
                },
                overlay: {
                    select: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    popover: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    },
                    modal: {
                        background: '{surface.0}',
                        borderColor: '{surface.200}',
                        color: '{text.color}'
                    }
                },
                list: {
                    option: {
                        focusBackground: '{surface.100}',
                        selectedBackground: '{highlight.background}',
                        selectedFocusBackground: '{highlight.focus.background}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        selectedColor: '{highlight.color}',
                        selectedFocusColor: '{highlight.focus.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}'
                        }
                    },
                    optionGroup: {
                        background: 'transparent',
                        color: '{text.color}'
                    }
                },
                navigation: {
                    item: {
                        focusBackground: '{surface.100}',
                        activeBackground: '{surface.100}',
                        color: '{text.color}',
                        focusColor: '{text.hover.color}',
                        activeColor: '{text.hover.color}',
                        icon: {
                            color: '{surface.400}',
                            focusColor: '{surface.500}',
                            activeColor: '{surface.500}'
                        }
                    },
                    submenuLabel: {
                        background: 'transparent',
                        color: '{text.color}'
                    },
                    submenuIcon: {
                        color: '{surface.400}',
                        focusColor: '{surface.500}',
                        activeColor: '{surface.500}'
                    }
                }
            },
        }
    }
};
