export default {
    root: {
        borderRadius: '{content.border.radius}',
        borderWidth: '1px',
        transitionDuration: '{transition.duration}'
    },
    content: {
        padding: '0.5rem 0.75rem',
        gap: '0.5rem',
        sm: {
            padding: '0.375rem 0.625rem'
        },
        lg: {
            padding: '0.625rem 0.875rem'
        }
    },
    text: {
        fontSize: '1rem',
        fontWeight: '700',
        sm: {
            fontSize: '0.875rem'
        },
        lg: {
            fontSize: '1.125rem'
        }
    },
    icon: {
        size: '1.125rem',
        sm: {
            size: '1rem'
        },
        lg: {
            size: '1.25rem'
        }
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
        size: '1rem',
        sm: {
            size: '0.875rem'
        },
        lg: {
            size: '1.125rem'
        }
    },
    outlined: {
        root: {
            borderWidth: '1px'
        }
    },
    simple: {
        content: {
            padding: '0'
        }
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
                },
                outlined: {
                    color: '{blue.800}',
                    borderColor: '{blue.800}'
                },
                simple: {
                    color: '{blue.800}'
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
                },
                outlined: {
                    color: '{green.800}',
                    borderColor: '{green.800}'
                },
                simple: {
                    color: '{green.800}'
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
                },
                outlined: {
                    color: '{yellow.600}',
                    borderColor: '{yellow.600}'
                },
                simple: {
                    color: '{yellow.600}'
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
                },
                outlined: {
                    color: '{red.800}',
                    borderColor: '{red.800}'
                },
                simple: {
                    color: '{red.800}'
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
                },
                outlined: {
                    color: '{surface.600}',
                    borderColor: '{surface.600}'
                },
                simple: {
                    color: '{surface.600}'
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
                },
                outlined: {
                    color: '{surface.900}',
                    borderColor: '{surface.900}'
                },
                simple: {
                    color: '{surface.900}'
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
                },
                outlined: {
                    color: '{blue.200}',
                    borderColor: '{blue.200}'
                },
                simple: {
                    color: '{blue.200}'
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
                },
                outlined: {
                    color: '{green.200}',
                    borderColor: '{green.200}'
                },
                simple: {
                    color: '{green.200}'
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
                },
                outlined: {
                    color: '{yellow.200}',
                    borderColor: '{yellow.200}'
                },
                simple: {
                    color: '{yellow.200}'
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
                },
                outlined: {
                    color: '{red.200}',
                    borderColor: '{red.200}'
                },
                simple: {
                    color: '{red.200}'
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
                },
                outlined: {
                    color: '{surface.400}',
                    borderColor: '{surface.400}'
                },
                simple: {
                    color: '{surface.400}'
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
                },
                outlined: {
                    color: '{surface.0}',
                    borderColor: '{surface.0}'
                },
                simple: {
                    color: '{surface.0}'
                }
            }
        }
    }
};
