import { definePreset } from 'primevue/themes';
import Aura from 'primevue/themes/aura';

const Noir = definePreset(Aura, {
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
        } /*,
        colorScheme: {
            light: {
                primary: {
                    color: '#09090b',
                    inverseColor: '#ffffff',
                    hoverColor: '#18181b',
                    activeColor: '#27272a'
                },
                highlight: {
                    background: '#09090b',
                    focusBackground: '#3f3f46',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '#fafafa',
                    inverseColor: '#09090b',
                    hoverColor: '#f4f4f5',
                    activeColor: '#e4e4e7'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }*/
    }
});

export default {
    preset: Noir,
    options: {
        darkModeSelector: '.p-dark'
    }
};
