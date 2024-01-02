import { palette } from 'primevue/theme';
import global from 'primevue/theme/lara/global';
import panel from 'primevue/theme/lara/panel';

export default {
    primitive: {
        blue: palette('#3B82F6') /* --p-blue-[50-900] */,
        gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827'
        }
    },
    semantic: {
        primary: {
            500: 'var(--p-blue-500)'
        },
        surface: {
            200: 'var(--p-gray-200)'
        },
        borderRadius: '6px',
        transitionDuration: '.2s',
        transition: 'background-color {transitionDuration}, color {transitionDuration}, box-shadow {transitionDuration}'
    },
    components: {
        global,
        panel
    }
};
