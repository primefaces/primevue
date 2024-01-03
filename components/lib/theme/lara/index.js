import accordion from 'primevue/theme/lara/accordion';
import card from 'primevue/theme/lara/card';
import global from 'primevue/theme/lara/global';
import panel from 'primevue/theme/lara/panel';

export default {
    primitive: {
        /*** @todo Remove ***/
        shade: {
            0: '#ffffff',
            100: '#f9fafb',
            200: '#f3f4f6',
            300: '#e5e7eb',
            400: '#d1d5db',
            500: '#9ca3af',
            600: '#6b7280',
            700: '#4b5563',
            800: '#374151',
            900: '#1f2937'
        },
        /********************/
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
        gap: {
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem'
        },
        p: {
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem'
        },
        m: {
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem'
        },
        text: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem'
        }
    },
    semantic: {
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
        fontFamily: '"Inter var", sans-serif',
        borderRadius: '6px',
        inlineGap: '{gap.2}', // inline-spacing
        transitionDuration: '.2s',
        transition: 'background-color {transitionDuration}, color {transitionDuration}, box-shadow {transitionDuration}, border-color {transitionDuration}'
    },
    components: {
        global,
        accordion,
        card,
        panel
    }
};
