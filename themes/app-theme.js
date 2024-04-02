import { definePreset } from 'primevue/themes';
import PrimeOne from 'primevue/themes/primeone';
import Aura from 'primevue/themes/primeone/aura';

const Noir = definePreset(Aura, {
    semantic: {
        primary: {
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
        }
    }
});

export default {
    base: PrimeOne,
    preset: Noir,
    options: {
        darkModeSelector: '.p-dark'
    }
};
