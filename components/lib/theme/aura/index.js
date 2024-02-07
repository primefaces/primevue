import global from 'primevue/theme/aura/global';
import panel from 'primevue/theme/aura/panel';

export default {
    primitive: {
        emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22'
        },
        slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617'
        },
        zinc: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
            950: '#09090b'
        }
    },
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    50: '{emerald.50}',
                    100: '{emerald.100}',
                    200: '{emerald.200}',
                    300: '{emerald.300}',
                    400: '{emerald.400}',
                    500: '{emerald.500}',
                    600: '{emerald.600}',
                    700: '{emerald.700}',
                    800: '{emerald.800}',
                    900: '{emerald.900}',
                    950: '{emerald.950}'
                },
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                },
                highlight: {
                    bg: '{primary.50}',
                    textColor: '{primary.700}'
                },
                hover: {
                    bg: '{surface.100}'
                }
            },
            dark: {
                primary: {
                    50: '{emerald.50}',
                    100: '{emerald.100}',
                    200: '{emerald.200}',
                    300: '{emerald.300}',
                    400: '{emerald.400}',
                    500: '{emerald.500}',
                    600: '{emerald.600}',
                    700: '{emerald.700}',
                    800: '{emerald.800}',
                    900: '{emerald.900}',
                    950: '{emerald.950}'
                },
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                },
                highlight: {
                    bg: 'color-mix(in srgb, {primary.50}, transparency %16)',
                    textColor: 'rgba(255,255,255,.87)'
                },
                hover: {
                    bg: 'rgba(255, 255, 255, 0.03)'
                }
            }
        },
        common: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
            borderRadius: '6px',
            transitionDuration: '.2s',
            focusRing: {
                width: '2px',
                style: 'solid',
                color: '{primary.500}',
                offset: '2px'
            },
            surface: {
                card: 'var(--p-dark-surface-900, var(--p-surface-0))',
                border: 'var(--p-dark-surface-800, var(--p-surface-200))',
                ground: 'var(--p-dark-surface-950, var(--p-surface-50))',
                overlay: 'var(--p-dark-surface-900, var(--p-surface-0))',
                hover: 'var(--p-dark-hover-bg, var(--p-hover-bg))'
            },
            text: {
                color: 'var(--p-dark-surface-0, var(--p-surface-700))',
                secondaryColor: 'var(--p-dark-surface-400, var(--p-surface-500))'
            },
            primary: {
                color: 'var(--p-dark-primary-400, var(--p-primary-500))',
                colorInverse: 'var(--p-dark-surface-900, var(--p-surface-0))',
                colorText: 'var(--p-primary-color-inverse)'
            },
            highlight: {
                bg: 'var(--p-dark-highlight-bg, var(--p-highlight-bg))',
                textColor: 'var(--p-dark-highlight-text-color, var(--p-highlight-text-color))'
            },
            anchorGutter: '2px',
            mask: {
                bg: 'rgba(0,0,0,0.4)'
            }
        }
    },
    components: {
        global,
        panel
    }
};
