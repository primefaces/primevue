const { transform } = require('typescript');

module.exports = {
    extend: {
        colors: {
            primary: 'var(-p-primary-color)',
            'primary-contrast': 'var(-p-primary-contrast-color)',
            'primary-50': 'var(--p-primary-50)',
            'primary-100': 'var(--p-primary-100)',
            'primary-200': 'var(--p-primary-200)',
            'primary-300': 'var(--p-primary-300)',
            'primary-400': 'var(--p-primary-400)',
            'primary-500': 'var(--p-primary-500)',
            'primary-600': 'var(--p-primary-600)',
            'primary-700': 'var(--p-primary-700)',
            'primary-800': 'var(--p-primary-800)',
            'primary-900': 'var(--p-primary-900)',
            'primary-950': 'var(--p-primary-950)',
            'surface-0': 'var(--p-surface-0)',
            'surface-50': 'var(--p-surface-50)',
            'surface-100': 'var(--p-surface-100)',
            'surface-200': 'var(--p-surface-200)',
            'surface-300': 'var(--p-surface-300)',
            'surface-400': 'var(--p-surface-400)',
            'surface-500': 'var(--p-surface-500)',
            'surface-600': 'var(--p-surface-600)',
            'surface-700': 'var(--p-surface-700)',
            'surface-800': 'var(--p-surface-800)',
            'surface-900': 'var(--p-surface-900)',
            'surface-950': 'var(--p-surface-950)'
        },
        keyframes: {
            fadein: {
                '0%': {
                    opacity: '0'
                },
                '100%': {
                    opacity: '1'
                }
            },
            fadeout: {
                '0%': {
                    opacity: '1'
                },
                '100%': {
                    opacity: '0'
                }
            },
            scalein: {
                '0%': {
                    opacity: '0',
                    transform: 'scaleY(0.8)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'scaleY(1)'
                }
            },
            slidedown: {
                '0%': {
                    maxHeight: '0'
                },
                '100%': {
                    maxHeight: 'auto'
                }
            },
            slideup: {
                '0%': {
                    maxHeight: '1000px'
                },
                '100%': {
                    maxHeight: '0'
                }
            },
            fadeinleft: {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0%)'
                }
            },
            fadeoutleft: {
                '0%': {
                    opacity: '1',
                    transform: 'translateX(0%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '0',
                    transform: 'translateX(-100%)'
                }
            },
            fadeinright: {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(100%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0%)'
                }
            },
            fadeoutright: {
                '0%': {
                    opacity: '1',
                    transform: 'translateX(0%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '0',
                    transform: 'translateX(100%)'
                }
            },
            fadeinup: {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-100%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0%)'
                }
            },
            fadeoutup: {
                '0%': {
                    opacity: '1',
                    transform: 'translateY(0%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '0',
                    transform: 'translateY(-100%)'
                }
            },
            fadeindown: {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(100%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0%)'
                }
            },
            fadeoutdown: {
                '0%': {
                    opacity: '1',
                    transform: 'translateY(0%)',
                    transition: 'transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1)'
                },
                '100%': {
                    opacity: '0',
                    transform: 'translateY(100%)'
                }
            },
            width: {
                '0%': {
                    width: '0'
                },
                '100%': {
                    width: '100%'
                }
            },
            flip: {
                from: {
                    transform: 'perspective(2000px) rotateX(-100deg)'
                },
                to: {
                    transform: 'perspective(2000px) rotateX(0)'
                }
            },
            flipleft: {
                from: {
                    transform: 'perspective(2000px) rotateY(-100deg)',
                    opacity: '0'
                },
                to: {
                    transform: 'perspective(2000px) rotateY(0)',
                    opacity: '1'
                }
            },
            flipright: {
                from: {
                    transform: 'perspective(2000px) rotateY(100deg)',
                    opacity: '0'
                },
                to: {
                    transform: 'perspective(2000px) rotateY(0)',
                    opacity: '1'
                }
            },
            flipup: {
                from: {
                    transform: 'perspective(2000px) rotateX(-100deg)',
                    opacity: '0'
                },
                to: {
                    transform: 'perspective(2000px) rotateX(0)',
                    opacity: '1'
                }
            },
            zoomin: {
                from: {
                    transform: 'scale3d(0.3, 0.3, 0.3)',
                    opacity: '0'
                },
                50: {
                    opacity: '1'
                }
            },
            zoomindown: {
                from: {
                    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)',
                    opacity: '0'
                },
                60: {
                    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
                    opacity: '1'
                }
            },
            zoominleft: {
                from: {
                    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)',
                    opacity: '0'
                },
                60: {
                    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
                    opacity: '1'
                }
            },
            zoominright: {
                from: {
                    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)',
                    opacity: '0'
                },
                60: {
                    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)',
                    opacity: '1'
                }
            },
            zoominup: {
                from: {
                    transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)',
                    opacity: '0'
                },
                60: {
                    transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)',
                    opacity: '1'
                }
            }
        },
        animation: {
            fadein: 'fadein 0.15s linear',
            fadeout: 'fadeout 0.15s linear',
            slidedown: 'slidedown 0.45s ease-in-out',
            slideup: 'slideup 0.45s cubic-bezier(0, 1, 0, 1)',
            scalein: 'scalein 0.15s linear',
            fadeinleft: 'fadeinleft 0.15s linear',
            fadeoutleft: 'fadeoutleft 0.15s linear',
            fadeinright: 'fadeinright 0.15s linear',
            fadeoutright: 'fadeoutright 0.15s linear',
            fadeinup: 'fadeinup 0.15s linear',
            fadeoutup: 'fadeoutup 0.15s linear',
            fadeindown: 'fadeindown 0.15s linear',
            fadeoutdown: 'fadeoutdown 0.15s linear',
            width: 'width 1000ms linear',
            flip: 'flip 0.15s linear',
            flipup: 'flipup 0.15s linear',
            flipleft: 'flipleft 0.15s linear',
            flipright: 'flipright 0.15s linear',
            zoomin: 'zoomin 0.15s linear',
            zoomindown: 'zoomindown 0.15s linear',
            zoominleft: 'zoominleft 0.15s linear',
            zoominright: 'zoominright 0.15s linear',
            zoominup: 'zoominup 0.15s linear'
        },
        animationDelay: {
            0: '0s',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            400: '400ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms'
        },
        animationDuration: {
            0: '0s',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            400: '400ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
            2000: '2000ms',
            3000: '3000ms'
        }
    }
};
